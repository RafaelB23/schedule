import * as React from "react";
import SchoolSchedule from "../components/ScheduleComponent";
import { Box, Button, ButtonGroup, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMaestroContext } from "../contexts/maestroContext"
import { useMateriaContext } from "../contexts/materiaContext"
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { fhorarioApi } from "../apis/Api";
import { API } from "aws-amplify";
import { getMaestro, getMateria } from "../graphql/queries"

export function HorarioPage() {
  const navigate = useNavigate();
  const contextMaestro = useMaestroContext()
  const contextMateria = useMateriaContext()
  const [isLoading, setIsLoading] = useState(false);

  const action = () => {
    // Redirige a la ruta deseada
    navigate("/form-horario");
    console.log('Enviando...');
  };
  const handleForm = async (data) => {
    setIsLoading(true)
    try {
      const maestro = await API.graphql({
        query: getMaestro,
        variables: { id: contextMaestro.formMaestro },
      })
      const materia = await API.graphql({
        query: getMateria,
        variables: { id: contextMateria.formMateria },
      })
      console.log('Form', maestro.data.getMaestro);
      console.log('Form', materia.data.getMateria);
      // console.info('Form', JSON.stringify(data));
      const res = await fhorarioApi(JSON.stringify(data), maestro.data.getMaestro.maestro_key, materia.data.getMateria.materia_key)
      console.log('Form', res.data);
      // navigate('/')
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log('************');
      console.log('Form', err.errors[0].message);
    }
  }

  const { user } = useAuthenticator((context) => [context.user])
  const [attributes, setAttributes] = useState('')
  useEffect(() => {
    user ? setAttributes(user.attributes) : navigate('/authentication')
  }, [user, attributes, navigate])

  return (
    <div className="text-center mb-12">
      <div className="container mx-auto px-4">
        <SchoolSchedule
          isLoading={isLoading}
          onDataReciver={handleForm} />
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
