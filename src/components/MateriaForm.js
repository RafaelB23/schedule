import {
    FormControl,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
import * as React from "react";

const idioma = ""
const modalidad = ""

export default function MateriaForm() {
  return (
    <div className="gap-6">
      <FormGroup className="space-y-6 text-left">
        <div className="w-full">
          <TextField
            className="w-full sm:w-2/5 lg:w-48"
            type="number"
            label="Clave"
          ></TextField>
          {/* <p>Introduce la clave de la materia</p> */}
        </div>

        <TextField label="Unidad de aprendizaje"></TextField>
        <div className="grid grid-cols-2 gap-6">
        <FormControl>
            <InputLabel id="select-label">Idioma</InputLabel>
            <Select
              labelId="select-label"
              id="simple-select"
              value={idioma}
              label="Idioma"
            >
              <MenuItem value={"es"}>Español</MenuItem>
              <MenuItem value={"en"}>Ingles</MenuItem>
              <MenuItem value={"ds"}>Aleman</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="select-label-mod">Modalidad</InputLabel>
            <Select
              labelId="select-label-mod"
              id="simple-select-mod"
              value={modalidad}
              label="Modalidad"
            >
              <MenuItem value={1}>Presencial</MenuItem>
              <MenuItem value={2}>En Linea</MenuItem>
              <MenuItem value={3}>Hibrido</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* <TextField label="Idioma"></TextField>
        <TextField label="Modalidad"></TextField> */}
      </FormGroup>
    </div>
  );
}
