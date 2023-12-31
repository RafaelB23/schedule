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
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MaestrosForm({ isLoading, onDataReciver, user }) {
  const navigate = useNavigate()
  const [idioma, setIdioma] = useState("")
  const [nivel, setNivel] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)

  //Form
  const [formData, setFormData] = useState({})

  const handleInput = (e) => {
    const { name, value } = e.target
    if (name === 'lenguage') {
      setIdioma(value)
    }
    if (name === 'level') {
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

  useEffect(() => {
    try {
      const dummyForm = {
        noProfesor: user?.username || '',
        nameProfesor: `${user?.attributes['custom:nombres'] || ''} ${user?.attributes['custom:apellido_1'] || ''} ${user?.attributes['custom:apellido_2'] || ''}`,
      };
      setFormData(dummyForm)
    } catch (err) {
      navigate('/404')
    }
  },[ navigate, user])
  return (
    <div className="gap-6">
      <FormGroup className="space-y-6">
        <TextField
          name="noProfesor"
          className="sm:w-2/5 lg:w-48"
          type="number"
          label="No. Empleado"
          onChange={handleInput}
          value={user?.username || ''}
          error={formSubmitted && !formData.noProfesor}
          helperText={formSubmitted && !formData.noProfesor ? "Campo requerido." : ""}
          disabled={user?.username ? true : false}
        ></TextField>
        <TextField
          name="nameProfesor"
          type="text"
          label="Nombre del profesor"
          onChange={handleInput}
          value={`${user?.attributes['custom:nombres'] || ''} ${user?.attributes['custom:apellido_1'] || ''} ${user?.attributes['custom:apellido_2'] || ''}`}
          error={formSubmitted && !formData.nameProfesor}
          helperText={formSubmitted && !formData.nameProfesor ? "Campo requerido." : ""}
          disabled={user?.attributes['custom:nombres'] && user?.attributes['custom:apellido_1'] && user.attributes['custom:apellido_2'] ? true : false}
        ></TextField>
        <div className="grid grid-cols-2 gap-6">
          {/* <TextField label="Nivel"></TextField> */}
          <FormControl error={formSubmitted && !formData.level}>
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
            <FormHelperText>{formSubmitted && !formData.level ? "Campo requerido." : ""}</FormHelperText>
          </FormControl>
          <FormControl error={formSubmitted && !formData.lenguage}>
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
            <FormHelperText>{formSubmitted && !formData.lenguage ? "Campo requerido." : ""}</FormHelperText>
          </FormControl>
        </div>
        <div className="mt-6">
          <Button
            disabled={isLoading}
            variant="contained"
            size="large"
            onClick={handleButton}>
            {isLoading ? 'Enviando...' : 'Siguente'}
          </Button>
        </div>
      </FormGroup>
    </div>
  );
}