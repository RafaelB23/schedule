import * as React from "react";
import SchoolSchedule from "../components/ScheduleComponent";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function HorarioPage() {
  const navigate = useNavigate();

  const action = () => {
    // Redirige a la ruta deseada
    navigate("/form-horario");
    console.log('Enviando...');
  };
  return (
    <div className="text-center mb-12">
      <div className="container mx-auto px-4">
        <SchoolSchedule />
        <ButtonGroup className="mt-8">
          <Button
            variant="contained"
            size="large"
            onClick={action}
          >
            Enviar
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
