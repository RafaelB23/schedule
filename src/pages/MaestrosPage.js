import * as React from "react";
import MaestrosForm from "../components/MaestrosForm";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function MaestrosPage() {
  const navigate = useNavigate();

  const action = () => {
    // Redirige a la ruta deseada
    navigate("/form-materias");
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold p-10">Profesor</h1>
      <div className="container mx-auto px-4">
        <MaestrosForm></MaestrosForm>
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
