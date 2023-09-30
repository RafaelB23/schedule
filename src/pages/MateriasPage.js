import * as React from "react";
import MateriaForm from "../components/MateriaForm";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function MateriasPage() {
  const navigate = useNavigate();

  const action = () => {
    // Redirige a la ruta deseada
    navigate("/form-horario");
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold p-10">Materia</h1>
      <div className="container mx-auto px-4">
        <MateriaForm></MateriaForm>
        <ButtonGroup className="mt-8">
          <Button
            variant="contained"
            size="large"
            onClick={action}
          >
            Siguente
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
