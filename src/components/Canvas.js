import React, { useRef, useEffect } from 'react';
import '../styles/Canvas.css';

const Canvas = React.forwardRef(({ color, brushSize,width,height }, forwardedRef) => {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    if (forwardedRef) {
      forwardedRef.current = canvasRef.current;
    }
  }, [forwardedRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, [width,height]);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    isDrawingRef.current = true;

    context.strokeStyle = color;
    context.lineWidth = brushSize; 
    context.lineCap = 'round'; 
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawingRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
  };

  const handleMouseUp = () => {
    isDrawingRef.current = false;
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="canvas"
    ></canvas>
  );
});

export default Canvas;
