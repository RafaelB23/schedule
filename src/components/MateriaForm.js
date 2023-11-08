import {
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ButtonGroup,
  Button,
  FormHelperText
} from "@mui/material";
import * as React from "react";
import { useState } from "react";



export default function MateriaForm({ onDataReciver }) {
  const [idioma, setIdioma] = useState("")
  const [modalidad, setModalidad] = useState("")

  //Form
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({})

  const handleInput = (e) => {
    const { name, value } = e.target
    if (name === 'idioma') {
      setIdioma(value)
    }
    if (name === 'modalidad') {
      setModalidad(value)
    }
    setFormData({ ...formData, [name]: value });

  }

  const handleButton = () => {
    if(formData.claveMateria && formData.nameMateria && formData.idioma && formData.modalidad){    
      onDataReciver(formData)
    }
    setFormSubmitted(true)
  }
  return (
    <div className="gap-6">
      <FormGroup className="space-y-6 text-left">
        <div className="w-full">
          <TextField
            name="claveMateria"
            className="w-full sm:w-2/5 lg:w-48"
            type="text"
            label="Clave"
            onChange={handleInput}
            error = {formSubmitted && !formData.claveMateria}
            helperText={formSubmitted && !formData.claveMateria ? "Campo requerido.":""}
          ></TextField>
          {/* <p>Introduce la clave de la materia</p> */}
        </div>
        <TextField
          name="nameMateria"
          label="Unidad de aprendizaje"
          onChange={handleInput}
          error = {formSubmitted && !formData.nameMateria}
          helperText={formSubmitted && !formData.nameMateria ? "Campo requerido.":""}
        ></TextField>
        <div className="grid grid-cols-2 gap-6">
          <FormControl error = {formSubmitted && !formData.idioma}>
            <InputLabel id="select-label">Idioma</InputLabel>
            <Select
              name="idioma"
              labelId="select-label"
              label="Idioma"
              id="simple-select"
              value={idioma}
              onChange={handleInput}
            >
              <MenuItem value={"es"}>Español</MenuItem>
              <MenuItem value={"en"}>Ingles</MenuItem>
              <MenuItem value={"ds"}>Aleman</MenuItem>
            </Select>
            <FormHelperText>{formSubmitted && !formData.idioma ? "Campo requerido.":""}</FormHelperText>
          </FormControl>
          <FormControl error = {formSubmitted && !formData.modalidad}>
            <InputLabel id="select-label-mod">Modalidad</InputLabel>
            <Select
              name="modalidad"
              labelId="select-label-mod"
              id="simple-select-mod"
              label="Modalidad"
              value={modalidad}
              onChange={handleInput}
            >
              <MenuItem value={1}>Presencial</MenuItem>
              <MenuItem value={2}>En Linea</MenuItem>
              <MenuItem value={3}>Hibrido</MenuItem>
            </Select>
            <FormHelperText>{formSubmitted && !formData.modalidad ? "Campo requerido.":""}</FormHelperText>
          </FormControl>
        </div>
      </FormGroup>
      <ButtonGroup className="mt-8">
        <Button
          variant="contained"
          size="large"
          onClick={handleButton}
        >
          Siguente
        </Button>
      </ButtonGroup>
    </div>
  );
}
