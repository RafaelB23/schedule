import * as React from "react";
import MaestrosForm from "../components/MaestrosForm";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMaestroContext } from "../contexts/maestroContext"
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useState } from "react";

export function MaestrosPage() {
  const navigate = useNavigate();

  const context = useMaestroContext()

  const handleForm = (data) => {
    context.updateFormMaestro(data)
    navigate("/form-materias");
  }

  const { user, route } = useAuthenticator((context) => [context.user, context.route])
  const [attributes, setAttributes] = useState('')
  useEffect(() => {
    if (route === 'authenticated'){
      setAttributes(user.attributes)
    }else{
      navigate('/auth')
    }
  }, [user, navigate, route])

  return (
    <div className="flex items-center justify-center min-h-full">
      <Card variant="outlined" className="w-full md:w-1/2 p-4 mt-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold p-10">Profesor</h1>
          <div className="container mx-auto px-4">
            <MaestrosForm onDataReciver={handleForm} />
            <div className="mt-6">
              <CardContent>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {JSON.stringify(context.formMaestro)}
                </Typography>
              </CardContent>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
