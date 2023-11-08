import * as React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { Card, CardContent, Box } from '@mui/material';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";

export function HomePage() {
  const [attributes, setAttributes] = useState('')
  const navigate = useNavigate();

  const action = () => {
    // Redirige a la ruta deseada
    navigate("/form-profesores");
  };

  const { user, route } = useAuthenticator((context) => [context.user, context.route])
  useEffect(() => {
    if (route === 'authenticated') {
      setAttributes(user.attributes)
    } else {
      navigate('/auth')
    }
  }, [user, route, navigate])

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
        {/* Temporal */}
        <Card className="mx-8 mt-24 text-base">
          <Box>
            <CardContent>
              <p key='username'>
                <strong>username:</strong> {user.username}
              </p>
              {Object.keys(attributes).map((key) => (
                <p key={key}>
                  <strong>{key}:</strong> {attributes[key].toString()}
                </p>
              ))}
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
              {JSON.stringify(attributes)}
            </Typography> */}
            </CardContent>
          </Box>
        </Card>
      </header>
    </div>
  );
}
