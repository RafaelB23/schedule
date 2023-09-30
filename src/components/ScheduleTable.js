import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function CSVtoTable(csv) {
  const rows = csv.split("\n");

  // Crea una matriz de filas y columnas
  const tableData = rows.map((row) => row.split(","));

  return (
    <TableContainer component={Paper} elevation={6}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            {tableData[0].map((header, index) => (
              <TableCell key={index} sx={{ fontWeight: 'bold' }}>{header.trim()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.slice(1).map((rowData, rowIndex) => (
            <TableRow key={rowIndex}>
              {rowData.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell.trim()}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function ScheduleTable({ data }) {
  // Convierte la cadena CSV en una tabla React
  const tableElement = CSVtoTable(data);

  return <div className="table-container">{tableElement}</div>;
}

export default ScheduleTable;
