import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';

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
    exportPaths: () => exportPaths(), // Expose exportPaths method
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    ctxRef.current = canvas.getContext('2d');
    ctxRef.current.lineJoin = 'round';
    ctxRef.current.lineCap = 'round';
    ctxRef.current.lineWidth = 5;
  }, []);

  const startDrawing = (e) => {
    if (isErasing) {
      setIsDrawing(false);
      erase(e);
      return;
    }
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setCurrentPath([{ x: offsetX, y: offsetY }]);
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (!isErasing) {
      setPaths((prevPaths) => [...prevPaths, currentPath]);
    }
    setCurrentPath([]);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    setCurrentPath((prevPath) => {
      const newPath = [...prevPath, { x: offsetX, y: offsetY }];
      drawOnCanvas(newPath);
      return newPath;
    });
  };

  const drawOnCanvas = (path) => {
    ctxRef.current.clearRect(0, 0, width, height); // Clear the canvas before redrawing
    paths.forEach((p) => drawPath(p));
    drawPath(path);
  };

  const drawPath = (path) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(path[0].x, path[0].y);
    path.forEach((point) => {
      ctxRef.current.lineTo(point.x, point.y);
    });
    ctxRef.current.stroke();
  };

  const erase = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const newPaths = paths.map((path) => removeSegmentFromPath(path, offsetX, offsetY));
    setPaths(newPaths);
    redrawCanvas(newPaths);
  };

  const removeSegmentFromPath = (path, offsetX, offsetY) => {
    const radius = 15; // Eraser radius
    const newPath = [];
    
    for (let i = 0; i < path.length - 1; i++) {
      const start = path[i];
      const end = path[i + 1];
      if (!lineSegmentIntersectCircle(start, end, offsetX, offsetY, radius)) {
        newPath.push(start);
      }
    }
    
    newPath.push(path[path.length - 1]); // Always add the last point
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
    drawingData.forEach((path) => {
      drawPath(path);
    });
  };

  // Export the paths as a JSON string
  const exportPaths = () => {
    return JSON.stringify(paths); // Simply return the paths as a JSON string
  };

  return (
    <div style={{ position: 'relative' }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseOut={stopDrawing}
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
