import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faEraser, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/Toolbar.css';

const Toolbar = ({
  setColor,
  handleToggleEraser,
  eraserMode,
  handleSave,
  setBrushSize,
  handleClearScreen,
  setCanvasSize,
  setBrushType, // New callback for brush type
  brushType, // Current selected brush type
}) => {
  const handleCanvasSizeChange = (e) => {
    const { name, value } = e.target;
    setCanvasSize((prev) => ({ ...prev, [name]: value }));
  };

  const handleBrushTypeChange = (e) => {
    setBrushType(e.target.value);
  };

  const toggleEraserMode = () => {
    setBrushType('default'); // Reset brush type to default when eraser is toggled
    handleToggleEraser();
  };

  return (
    <div className="toolbar">
      <button onClick={toggleEraserMode} title={eraserMode ? 'Brush' : 'Eraser'}>
        <FontAwesomeIcon icon={eraserMode ? faPaintBrush : faEraser} />
      </button>
      {!eraserMode && (
        <>
          <input
            type="color"
            title="Pick Color"
            onChange={(e) => setColor(e.target.value)}
          />
        </>
      )}
      <div className="brush-size-container">
        <label htmlFor="brush-size">{eraserMode ? 'Eraser Size' : 'Brush Size'}</label>
        <input
          id="brush-size"
          type="range"
          min="1"
          max="50"
          defaultValue="10"
          onChange={(e) => setBrushSize(e.target.value)}
          title="Adjust Brush Size"
        />
      </div>
      <div className="canvas-size-container">
        <label>Canvas Size</label>
        <div className="canvas-size-inputs">
          <input
            type="number"
            name="width"
            min="100"
            max="2000"
            placeholder="Width"
            title="Canvas Width"
            onChange={handleCanvasSizeChange}
          />
          <input
            type="number"
            name="height"
            min="100"
            max="2000"
            placeholder="Height"
            title="Canvas Height"
            onChange={handleCanvasSizeChange}
          />
        </div>
      </div>
      {!eraserMode && (
        <div className="brush-type-container">
          <label htmlFor="brush-type">Brush Type</label>
          <select
            id="brush-type"
            value={brushType}
            onChange={handleBrushTypeChange}
            title="Select Brush Type"
          >
            <option value="default">Default</option>
            <option value="calligraphy">Calligraphy</option>
            <option value="splatter">Splatter</option>
            <option value="swirl">Swirl</option>
            <option value="neon">Neon</option>
          </select>
        </div>
      )}
      <button onClick={handleSave} title="Save">
        <FontAwesomeIcon icon={faSave} />
      </button>
      <button onClick={handleClearScreen} title="Clear Screen">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Toolbar;
