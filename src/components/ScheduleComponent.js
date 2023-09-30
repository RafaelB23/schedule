import React, { useState } from "react";
import Button from '@mui/material/Button'
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ScheduleTable from "./ScheduleTable";

const SchoolSchedule = () => {
  const [selectedCells, setSelectedCells] = useState({});
  const [selectedColor, setSelectedColor] = useState(null);
  const [valueCsv, setValueCsv] = useState('');

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

  const generateCSV = () => {
    const schedule = selectedCells
    console.log(selectedCells)
      // Mapeo de días de la semana a números
    const dayToNumber = {
      "Lunes": 1,
      "Martes": 2,
      "Miércoles": 3,
      "Jueves": 4,
      "Viernes": 5,
      "Sábado": 6,
    };

    // Mapeo de horas a números
    const hourToNumber = {
      "M1": 1,
      "M2": 2,
      "M3": 3,
      "M4": 4,
      "M5": 5,
      "M6": 6,
      "V1": 7,
      "V2": 8,
      "V3": 9,
      "V4": 10,
      "V5": 11,
      "V6": 12,
      "N1": 13,
      "N2": 14,
      "N3": 15,
      "N4": 16,
      "N5": 17,
      "N6": 18,
    };

    // Crear una matriz de objetos para ordenar los valores
    const orderedSchedule = [];

    // Convertir el objeto de horario en una matriz de objetos
    for (const key in schedule) {
      if (schedule.hasOwnProperty(key)) {
        const dayHour = key.split(/(?=[A-Z])/);
        const day = dayHour[0];
        const hour = dayHour[1];
        const value = schedule[key];
        const dayNumber = dayToNumber[day];
        const hourNumber = hourToNumber[hour];
        orderedSchedule.push({ dayNumber, hourNumber, value });
      }
    }

    // Ordenar la matriz por día y hora
    orderedSchedule.sort((a, b) => {
      if (a.dayNumber === b.dayNumber) {
        return a.hourNumber - b.hourNumber;
      }
      return a.dayNumber - b.dayNumber;
    });

    // Crear el CSV ordenado
    let csv = "Dia,Hora,Valor\n";
    orderedSchedule.forEach((item) => {
      csv += `${item.dayNumber},${item.hourNumber},${item.value}\n`;
    });
    console.log(csv)
    setValueCsv(csv)
    return csv;
  }

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
        <Button onClick={generateCSV}>Generar CSV</Button>
        <ScheduleTable data={valueCsv} />
        {/* <p>{valueCsv}</p> */}
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
