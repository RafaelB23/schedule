import * as React from "react";
import MateriaForm from "../components/MateriaForm";
import { Button, ButtonGroup, Card, CardContent, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useMaestroContext} from "../contexts/maestroContext"
import {useMateriaContext} from "../contexts/materiaContext"
import { useEffect } from "react";

export function MateriasPage() {
  const navigate = useNavigate();
  const contextMaestro = useMaestroContext()
  const contextMateria = useMateriaContext()

  useEffect(() => {
    if (JSON.stringify(contextMaestro.formMaestro) === '{}') {
      navigate('/form-profesores');
    }
  }, []);

  const handleForm = (data) => {
    contextMateria.updateFormMateria(data)
    navigate("/form-horario");
    // Redirige a la ruta deseada
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold p-10">Materia</h1>
      <div className="container mx-auto px-4">
        <MateriaForm onDataReciver={handleForm}/>
        <div className="mt-6">
          <Card>
            <Box>
              <CardContent>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {JSON.stringify(contextMaestro.formMaestro)}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {JSON.stringify(contextMateria.formMateria)}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
      </div>
    </div>
  );
}
