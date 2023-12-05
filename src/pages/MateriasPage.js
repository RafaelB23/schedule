import * as React from "react";
import MateriaForm from "../components/MateriaForm";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useMaestroContext} from "../contexts/maestroContext"
import {useMateriaContext} from "../contexts/materiaContext"
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useState } from "react";
import { fmateriaApi } from "../apis/Api";

export function MateriasPage() {
  const navigate = useNavigate();
  const contextMaestro = useMaestroContext()
  const contextMateria = useMateriaContext()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (JSON.stringify(contextMaestro.formMaestro) === '{}') {
      navigate('/form-profesores');
    }
  }, [contextMaestro.formMaestro, navigate]);

  const handleForm = async (data) => {
    setIsLoading(true)
    contextMateria.updateFormMateria(data)
    try{
      await fmateriaApi(data.claveMateria, data.nameMateria, data.idioma, data.modalidad)
      navigate("/form-horario");
      setIsLoading(false)
    }catch(err){
      setIsLoading(false)
      console.log(err)
    }
    // Redirige a la ruta deseada
  };

  const { user } = useAuthenticator((context) => [context.user])
  const [attributes, setAttributes] = useState('')
  useEffect(() => {
    user ? setAttributes(user.attributes) : navigate('/auth')
  }, [user, attributes, navigate])
  
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold p-10">Materia</h1>
      <div className="container mx-auto px-4">
        <MateriaForm onDataReciver={handleForm} isLoading={isLoading}/>
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
