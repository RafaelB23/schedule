import React, { useEffect, useState } from 'react';
import {
    Button,
    ButtonGroup,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import MateriaCard from './cardMateriaComponent';
import DialogForm from './DialogForm';
import { fhorarioApi, fmateriaApi, fmateriaMaestroApi } from '../../apis/Api';
import { getMateriaMaestro, listMateriaMaestros } from '../../graphql/queries';
import { API } from 'aws-amplify';

export default function MateriasDashboard({ handlerAlert, userData }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogState, setDialogState] = useState(false)
    const [formData, setFormData] = useState({})
    const [cards, setCards] = useState([])

    const handleButton = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setDialogState(false)
        setOpenDialog(false);
    };

    const handleFormSubmit = async (data) => {
        const updatedFormData = { ...formData, ...data };
        console.log('Información del formulario:', data);
        setFormData(updatedFormData);
        // Cerrar el diálogo después de enviar el formulario
        setDialogState(!dialogState)
        if (dialogState) {
            try {
                const { data: { createMateria: { id: materiaId } }, errorMateria } = await fmateriaApi(updatedFormData.claveMateria, updatedFormData.nameMateria, updatedFormData.idioma, updatedFormData.modalidad)
                if (errorMateria) {
                    console.error("Error en la operación MateriaApi:", errorMateria);
                    return { err: errorMateria };
                }
                const { data: { createMateriaMaestro: { id: materiaMaestroId } } } = await fmateriaMaestroApi(materiaId, userData.sub)
                const { errorHorario } = await fhorarioApi(updatedFormData.horario, materiaMaestroId)
                // await fhorarioApi(updatedFormData.horario, materiaMaestroId)

                // console.log(data)
                if (errorHorario) {
                    console.error("Error en la operación HorarioApi:", errorHorario);
                    return { err: errorHorario };
                }
                console.log(cards)
                // setCards(...cards, materiaMaestroId)
                handlerAlert('success', 'Registrado correctamente')
            } catch (err) {
                handlerAlert('error', 'No se pudo registrar')

            }
            // console.log('Información del completa:', updatedFormData);
            // setFormData({})
            handleCloseDialog();
        }
    };
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: {listMateriaMaestros: { items: result}}} = await API.graphql({
                    query: listMateriaMaestros,
                    variables: {
                        filter: {
                            materiaMaestroFMaestroId: {
                              eq: userData.sub
                            }
                          }
                    }
                });
                setCards(result);
                console.log(result)
            } catch (error) {
                console.error('Error al obtener la información:', error);
            }
        };
        fetchData();
    }, [userData]);
    return (
        <Grid container className="gap-4">
            <Grid item xs={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'auto',
                    }}
                >
                    <nav className="mb-4">
                        <Grid container justifyContent="space-between">
                            <Grid item>
                                <Typography variant="h6">Unidades de aprendizaje</Typography>
                            </Grid>
                            <Grid item>
                                <ButtonGroup>
                                    <Button onClick={handleButton}>Agregar</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </nav>
                    <Grid container spacing={2}>
                        <MateriaCard />
                        {/* {cards.map((item)=>
                            <MateriaCard data={item}/>
                        )} */}
                        {/* <MateriaCard />
                        <MateriaCard />
                        <MateriaCard />
                        <MateriaCard /> */}
                    </Grid>
                </Paper>
            </Grid>
            <DialogForm
                handlerAlert={handlerAlert}
                openDialog={openDialog}
                handleFormSubmit={handleFormSubmit}
                handleCloseDialog={handleCloseDialog}
                dialogState={dialogState} />
            {/* Dialog con formulario */}

        </Grid>
    );
}
