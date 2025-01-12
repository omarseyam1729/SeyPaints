import React, { useRef, useEffect } from 'react';
import '../styles/Canvas.css';
const Canvas = React.forwardRef(({ color },forwardedRef) => {
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
    canvas.width = 800;
    canvas.height = 600;

    // Fill the canvas with a white background initially
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    isDrawingRef.current = true;
    context.strokeStyle = color;
    context.lineWidth = 2;
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
      className='canvas'
    ></canvas>
  );
});

export default Canvas;
