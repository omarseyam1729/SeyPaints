import React, { useState, useRef } from 'react';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import './styles/global.css';

const App = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('#000000'); 
  const [eraserMode, setEraserMode] = useState(false);
  const [brushSize, setBrushSize] = useState(10); 
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 }); // New state for canvas size

  const handleToggleEraser = () => {
    setEraserMode((prevMode) => !prevMode);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas-image.png"; 
    link.click(); 
  };

  const handleClearScreen = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff'; // Set the fill color to white
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas with white
  };

  return (
    <div>
      <Toolbar 
        setColor={setColor} 
        handleToggleEraser={handleToggleEraser} 
        eraserMode={eraserMode} 
        handleSave={handleSave}
        setBrushSize={setBrushSize}
        handleClearScreen={handleClearScreen} 
        setCanvasSize={setCanvasSize} // Pass canvas size control to Toolbar
      />
      <Canvas 
        ref={canvasRef} 
        color={eraserMode ? '#ffffff' : color} 
        brushSize={brushSize} 
        width={canvasSize.width} 
        height={canvasSize.height} 
      /> 
    </div>
  );
};

export default App;
