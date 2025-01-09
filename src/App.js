import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';

const App = () => {
  const [color, setColor] = useState('#000000'); 
  const [eraserMode, setEraserMode] = useState(false);

  const handleToggleEraser = () => {
    setEraserMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <Toolbar setColor={setColor} handleToggleEraser={handleToggleEraser} eraserMode={eraserMode} />
      <Canvas color={eraserMode ? '#ffffff' : color} /> 
    </div>
  );
};

export default App;