import React, { useState,useRef } from 'react';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';

const App = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('#000000'); 
  const [eraserMode, setEraserMode] = useState(false);

  const handleToggleEraser = () => {
    setEraserMode((prevMode) => !prevMode);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Convert canvas to a data URL
    const dataURL = canvas.toDataURL("image/png");

    // Automatically download the image
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas-image.png"; 
    link.click(); 
  };

  return (
    <div>
      <Toolbar setColor={setColor} 
      handleToggleEraser={handleToggleEraser} 
      eraserMode={eraserMode} 
      handleSave={handleSave}
      />
      <Canvas ref={canvasRef} color={eraserMode ? '#ffffff' : color} /> 
    </div>
  );
};

export default App;