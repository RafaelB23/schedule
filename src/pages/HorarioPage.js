import * as React from "react";
import SchoolSchedule from "../components/ScheduleComponent";
import { Box, Button, ButtonGroup, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useMaestroContext} from "../contexts/maestroContext"
import {useMateriaContext} from "../contexts/materiaContext"
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useState } from "react";

export function HorarioPage() {
  const navigate = useNavigate();
  const contextMaestro = useMaestroContext()
  const contextMateria = useMateriaContext()

  const action = () => {
    // Redirige a la ruta deseada
    navigate("/form-horario");
    console.log('Enviando...');
  };

  const { user } = useAuthenticator((context) => [context.user])
  const [attributes, setAttributes] = useState('')
  useEffect(() => {
    user ? setAttributes(user.attributes) : navigate('/auth')
  }, [user, attributes, navigate])
  
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
        <Card className="m-6">
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
  );
}
