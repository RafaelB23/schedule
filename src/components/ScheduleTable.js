import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function JSONtoTable(jsonData) {
  // Verifica si el JSON está vacío o nulo
  if (!jsonData || jsonData.length === 0) {
    return <div>No hay datos para mostrar.</div>;
  }

  // Obtén las cabeceras de la tabla desde la primera fila del JSON
  const headers = Object.keys(jsonData[0]);

  return (
    <TableContainer component={Paper} elevation={6}>
      <Table sx={{ minwidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} sx={{ fontWeight: 'bold' }}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {jsonData.map((rowData, rowIndex) => (
            <TableRow key={rowIndex}>
              {headers.map((header, cellIndex) => (
                <TableCell key={cellIndex}>{rowData[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function ScheduleTable({ data }) {
  // Convierte el objeto JSON en una tabla React
  const tableElement = JSONtoTable(data);

  return <div className="table-container">{tableElement}</div>;
}

export default ScheduleTable;
