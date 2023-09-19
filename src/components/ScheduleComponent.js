import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const SchoolSchedule = () => {
    const [selectedCells, setSelectedCells] = useState({});
    const [selectedColor, setSelectedColor] = useState(null);
  
    const handleCellClick = (x, y) => {
      if (selectedCells[`${x}${y}`]) {
        // Si la celda ya está pintada, elimínala
        const newSelectedCells = { ...selectedCells };
        delete newSelectedCells[`${x}${y}`];
        setSelectedCells(newSelectedCells);
      } else if (selectedColor) {
        // Pinta la celda con el color seleccionado
        setSelectedCells((prevSelectedCells) => ({
          ...prevSelectedCells,
          [`${x}${y}`]: selectedColor,
        }));
      }
    };
  
    const renderColorSelector = () => {
      const colors = ['green', 'orange', 'red'];
  
      return (
        <div className="color-selector">
          <ToggleButtonGroup
            value={selectedColor}
            exclusive
            onChange={(event, newColor) => setSelectedColor(newColor)}
          >
            {colors.map((color) => (
              <ToggleButton
                key={color}
                value={color}
                className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                style={{
                  backgroundColor: color,
                  color: 'white', // Letras blancas
                  width: '100px', // Ancho fijo de 100px para botones
                  fontWeight: 'bold', // Texto en negrita
                  border: selectedColor === color ? '2px solid #333' : 'none', // Borde cuando seleccionado
                }}
              >
                {color}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
      );
    };

    const renderSchedule = () => {
        const xValues = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']; // Días en español
        const yValues = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'N1', 'N2', 'N3', 'N4', 'N5', 'N6']; // Letras mayúsculas
    
        return (
          <div>
            {renderColorSelector()}
            <table className="schedule-table">
              <thead>
                <tr>
                  <th></th>
                  {xValues.map((x) => (
                    <th key={x} className="day-header">
                      {x}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {yValues.map((y) => (
                  <tr key={y}>
                    <td className="time-cell">{y}</td>
                    {xValues.map((x) => (
                      <td
                        key={`${x}${y}`}
                        className={`schedule-cell ${selectedCells[`${x}${y}`] || ''}`}
                        onClick={() => handleCellClick(x, y)}
                      ></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      };
    
      return (
        <div className="schedule-container">
          <h2>Horario Escolar</h2> {/* Título en español */}
          {renderSchedule()}
        </div>
      );
    };
    
    export default SchoolSchedule;