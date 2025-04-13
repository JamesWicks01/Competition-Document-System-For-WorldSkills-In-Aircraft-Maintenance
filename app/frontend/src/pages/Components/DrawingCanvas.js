// DrawingCanvas.js
import { ReactSketchCanvas } from "react-sketch-canvas";

const styles = {
  border: "1px solid #000"
};

export default function DrawingCanvas() {
  return (
    <ReactSketchCanvas
      style={styles}
      strokeWidth={4}
      strokeColor="black"
    />
  );
}

