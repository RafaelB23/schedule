import * as React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  const action = () => {
    // Redirige a la ruta deseada
    navigate("/form-profesores");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="mb-8">Bienvenido al portal de horarios posgrado</h1>
        <ButtonGroup>
          <Button
            variant="contained"
            size="large"
            onClick={action}
          >
            Iniciar
          </Button>
        </ButtonGroup>
      </header>
    </div>
  );
}
