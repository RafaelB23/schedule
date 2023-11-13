import * as React from "react";
import MaestrosForm from "../components/MaestrosForm";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMaestroContext } from "../contexts/maestroContext"
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { fmaestroApi } from "../apis/Api";

export function MaestrosPage() {
  const { user, route } = useAuthenticator((context) => [context.user, context.route])
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const context = useMaestroContext()

  const handleForm = async (data) => {
    setIsLoading(true)
    context.updateFormMaestro(data)
    const [name, apell1, apell2] = data.nameProfesor.split(' ')
    try {
      await fmaestroApi(name, apell1 + ' ' + apell2, data.level, data.lenguage, data.noProfesor)
      navigate("/form-materias");
      setIsLoading(false)
    }catch(err){
      setIsLoading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    if (!route === 'authenticated' ) {
      navigate('/auth')
    }
  }, [navigate, route])

  return (
    <div className="flex items-center justify-center min-h-full">
      <Card variant="outlined" className="w-full md:w-1/2 p-4 mt-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold p-10">Profesor</h1>
          <div className="container mx-auto px-4">
            <MaestrosForm
              isLoading={isLoading}
              onDataReciver={handleForm}
              user={user} />
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
