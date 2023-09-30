import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const SchoolSchedule = () => {
  const [selectedCells, setSelectedCells] = useState({});
  const [selectedColor, setSelectedColor] = useState(null);

  const handleCellClick = (x, y) => {
    const cellKey = `${x}${y}`;
    const newSelectedCells = { ...selectedCells };

    if (selectedCells[cellKey]) {
      // Si la celda ya está seleccionada, elimínala
      delete newSelectedCells[cellKey];
    } else if (selectedColor) {
      // Selecciona la celda con el color seleccionado
      newSelectedCells[cellKey] = selectedColor;
    }

    setSelectedCells(newSelectedCells);
  };

  const renderColorSelector = () => {
    const colors = [
      { color: "green", label: "Preferido" },
      { color: "orange", label: "Disponibilidad" },
      { color: "red", label: "No Disponible" },
    ];

    return (
      <div className="color-selector mb-8">
        <ToggleButtonGroup
          value={selectedColor}
          exclusive
          onChange={(event, newColor) => setSelectedColor(newColor)}
        >
          {colors.map((color) => (
            <ToggleButton
              key={color.color}
              value={color.color}
              className={`color-button ${
                selectedColor === color.color ? "selected" : ""
              }`}
              style={{
                backgroundColor: color.color,
                color: "white", // Letras blancas
                width: "150px", // Ancho fijo de 100px para botones
                fontWeight: "bold", // Texto en negrita
                border:
                  selectedColor === color.color ? "3px solid #333" : "none", // Borde cuando seleccionado
              }}
            >
              {color.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    );
  };

  const renderSchedule = () => {
    const xValues = [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Días en español
    const yValues = [
      "M1",
      "M2",
      "M3",
      "M4",
      "M5",
      "M6",
      "V1",
      "V2",
      "V3",
      "V4",
      "V5",
      "V6",
      "N1",
      "N2",
      "N3",
      "N4",
      "N5",
      "N6",
    ]; // Letras mayúsculas

    return (
      <div>
        {renderColorSelector()}
        <table className="schedule-table">
          <thead>
            <tr>
              <th style={{ width: "10%" }}></th>{" "}
              {/* Ancho ajustado para las horas */}
              {xValues.map((x) => (
                <th
                  key={x}
                  className="day-header"
                  style={{ width: `${90 / xValues.length}%` }}
                >
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
                      className={`schedule-cell ${
                        selectedCells[`${x}${y}`] || ""
                      }`}
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
      <h1 className="text-3xl font-bold p-10">Horario Escolar</h1>{" "}
      {/* Título en español */}
      {renderSchedule()}
    </div>
  );
};

export default SchoolSchedule;
