import {
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  FormHelperText
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import {useMaestroContext} from "../contexts/maestroContext"

export default function MaestrosForm({onDataReciver}) {
  const [idioma, setIdioma] = useState("")
  const [nivel, setNivel] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const context = useMaestroContext()

  //Form
  const [formData, setFormData] = useState({})

  const handleInput = (e) => {
    const { name, value } = e.target
    if (name == 'lenguage') {
      setIdioma(value)
    }
    if (name == 'level') {
      setNivel(value)
    }
    setFormData({ ...formData, [name]: value });
    
  }

  const handleButton = () => {
    if (formData.noProfesor && formData.nameProfesor && formData.level && formData.lenguage) {
      onDataReciver(formData)
    }
    setFormSubmitted(true)
  }

  return (
    <div className="gap-6">
      <FormGroup className="space-y-6">
        <TextField
          name="noProfesor"
          className="sm:w-2/5 lg:w-48"
          type="number"
          label="No. Empleado"
          onChange={handleInput}
          error = {formSubmitted && !formData.noProfesor}
          helperText={formSubmitted && !formData.noProfesor ? "Campo requerido.":""}
        ></TextField>
        <TextField
          name="nameProfesor"
          type="text"
          label="Nombre del profesor"
          onChange={handleInput}
          error = {formSubmitted && !formData.nameProfesor}
          helperText={formSubmitted && !formData.nameProfesor ? "Campo requerido.":""}
        ></TextField>
        <div className="grid grid-cols-2 gap-6">
          {/* <TextField label="Nivel"></TextField> */}
          <FormControl error = {formSubmitted && !formData.level}>
            <InputLabel id="select-label">Nivel</InputLabel>
            <Select
              name="level"
              labelId="select-label"
              id="simple-select"
              label="Nivel"
              value={nivel}
              onChange={handleInput}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          <FormHelperText>{formSubmitted && !formData.level ? "Campo requerido.":""}</FormHelperText>
          </FormControl>
          <FormControl error = {formSubmitted && !formData.lenguage}>
            <InputLabel id="select-label">Idioma</InputLabel>
            <Select
              name="lenguage"
              labelId="select-label"
              id="simple-select"
              label="Idioma"
              value={idioma}
              onChange={handleInput}
            >
              <MenuItem value={"es"}>Español</MenuItem>
              <MenuItem value={"en"}>Ingles</MenuItem>
              <MenuItem value={"ds"}>Aleman</MenuItem>
            </Select>
            <FormHelperText>{formSubmitted && !formData.lenguage ? "Campo requerido.":""}</FormHelperText>
          </FormControl>
        </div>
        <div className="mt-6">
          <Button variant="contained" size="large" onClick={handleButton}>
            Siguente
          </Button>
        </div>
      </FormGroup>
    </div>
  );
}
