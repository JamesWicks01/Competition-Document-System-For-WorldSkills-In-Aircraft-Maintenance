import React, {
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';

const DrawingCanvas = forwardRef(({ width, height }, ref) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [paths, setPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);

  useImperativeHandle(ref, () => ({
    clearCanvas: () => clearCanvas(),
    loadPaths: (drawingData) => loadPaths(drawingData),
    exportPaths: () => exportPaths(),
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    ctxRef.current = canvas.getContext('2d');
    ctxRef.current.lineJoin = 'round';
    ctxRef.current.lineCap = 'round';
    ctxRef.current.lineWidth = 5;
  }, []);

  const getCanvasOffset = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    const isTouch = e.touches && e.touches.length > 0;
    const x = isTouch ? e.touches[0].clientX - rect.left : e.nativeEvent.offsetX;
    const y = isTouch ? e.touches[0].clientY - rect.top : e.nativeEvent.offsetY;

    return { x, y };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const { x, y } = getCanvasOffset(e);

    if (isErasing) {
      setIsDrawing(false);
      erase(x, y);
      return;
    }

    setIsDrawing(true);
    setCurrentPath([{ x, y }]);
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (!isErasing && currentPath.length > 0) {
      setPaths((prev) => [...prev, currentPath]);
    }

    setCurrentPath([]);
  };

  const draw = (e) => {
    e.preventDefault();
    if (!isDrawing) return;

    const { x, y } = getCanvasOffset(e);

    setCurrentPath((prevPath) => {
      const newPath = [...prevPath, { x, y }];
      drawOnCanvas(newPath);
      return newPath;
    });
  };

  const drawOnCanvas = (path) => {
    if (!Array.isArray(paths)) return;
    ctxRef.current.clearRect(0, 0, width, height);
    paths.forEach((p) => drawPath(p));
    drawPath(path);
  };

  const drawPath = (path) => {
    if (path.length < 2) return;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(path[0].x, path[0].y);
    path.forEach((point) => {
      ctxRef.current.lineTo(point.x, point.y);
    });
    ctxRef.current.stroke();
  };

  const erase = (x, y) => {
    const newPaths = paths.map((path) => removeSegmentFromPath(path, x, y));
    setPaths(newPaths);
    redrawCanvas(newPaths);
  };

  const removeSegmentFromPath = (path, x, y) => {
    const radius = 15;
    const newPath = [];

    for (let i = 0; i < path.length - 1; i++) {
      const start = path[i];
      const end = path[i + 1];
      if (!lineSegmentIntersectCircle(start, end, x, y, radius)) {
        newPath.push(start);
      }
    }

    newPath.push(path[path.length - 1]);
    return newPath;
  };

  const lineSegmentIntersectCircle = (start, end, cx, cy, radius) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const fx = start.x - cx;
    const fy = start.y - cy;

    const a = dx * dx + dy * dy;
    const b = 2 * (fx * dx + fy * dy);
    const c = fx * fx + fy * fy - radius * radius;

    const discriminant = b * b - 4 * a * c;
    return discriminant > 0;
  };

  const redrawCanvas = (newPaths) => {
    if (!Array.isArray(newPaths)) return;
    ctxRef.current.clearRect(0, 0, width, height);
    newPaths.forEach((path) => drawPath(path));
  };

  const clearCanvas = () => {
    ctxRef.current.clearRect(0, 0, width, height);
    setPaths([]);
  };

  const toggleEraseMode = () => {
    setIsErasing((prev) => !prev);
  };

  const loadPaths = (drawingData) => {
    try {
      const parsedPaths = Array.isArray(drawingData)
        ? drawingData
        : typeof drawingData === 'string'
        ? JSON.parse(drawingData)
        : [];

      if (!Array.isArray(parsedPaths)) {
        console.warn('Invalid drawing data:', parsedPaths);
        return;
      }

      setPaths(parsedPaths);
      redrawCanvas(parsedPaths);
    } catch (error) {
      console.error('Failed to load drawing paths:', error);
    }
  };

  const exportPaths = () => {
    return paths;
  };

  return (
    <div style={{ position: 'relative', touchAction: 'none' }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseOut={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        style={{ border: '1px solid black', display: 'block' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button
          onClick={toggleEraseMode}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            fontSize: '24px',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          {isErasing ? '✏️' : '🖊️'}
        </button>
        <button
          onClick={clearCanvas}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            fontSize: '24px',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
          }}
        >
          🧹
        </button>
      </div>
    </div>
  );
});

export default DrawingCanvas;
