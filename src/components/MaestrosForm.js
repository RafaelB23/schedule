import {
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as React from "react";
const idioma = "";
const nivel = "";
export default function MaestrosForm() {
  return (
    <div className="gap-6">
      <FormGroup className="space-y-6">
        <TextField
          className="sm:w-2/5 lg:w-48"
          type="number"
          label="No. Empleado"
        ></TextField>
        <TextField label="Nombre del profesor"></TextField>
        <div className="grid grid-cols-2 gap-6">
          {/* <TextField label="Nivel"></TextField> */}
          <FormControl>
            <InputLabel id="select-label">Nivel</InputLabel>
            <Select
              labelId="select-label"
              id="simple-select"
              value={nivel}
              label="Nivel"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
          {/* <TextField label="Idioma"></TextField> */}
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
        </div>
      </FormGroup>
    </div>
  );
}
