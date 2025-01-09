import React, { useRef, useEffect } from 'react';

const Canvas = ({ color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
    context.fillStyle = '#ffffff'; 
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.strokeStyle = color; // Brush or eraser color
    context.lineWidth = 2;       
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    const draw = (event) => {
      context.lineTo(event.offsetX, event.offsetY);
      context.stroke();
    };

    const stopDrawing = () => {
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
    };

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      style={{
        border: '1px solid black',
        display: 'block',
        margin: '20px auto',
      }}
    ></canvas>
  );
};

export default Canvas;