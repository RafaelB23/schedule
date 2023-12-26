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
import { fcreateHorarioApi, fcreateMateriaApi, fcreateMateriaMaestroApi } from '../../apis/Api';
import { getMateriaMaestro, listMateriaMaestros } from '../../graphql/queries';
import { API } from 'aws-amplify';

export default function MateriasDashboard({ handlerAlert, userData }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogState, setDialogState] = useState(false)
    const [formData, setFormData] = useState({})
    const [cards, setCards] = useState([])

    const queryMateriaMaestro = async (materiaMaestroId) => {
        try {
            const MateriaMaestro =
                (
                    await API.graphql({
                        query: getMateriaMaestro.replaceAll("__typename", ""),
                        variables: { id: materiaMaestroId },
                    })
                )?.data?.getMateriaMaestro
            // console.log(MateriaMaestro)
            return MateriaMaestro
        } catch (err) {
            console.log(err)
        }
    }

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
                const { data: { createMateria: { id: materiaId } }, errorMateria } = await fcreateMateriaApi(updatedFormData.claveMateria, updatedFormData.nameMateria, updatedFormData.idioma, updatedFormData.modalidad)
                if (errorMateria) {
                    console.error("Error en la operación MateriaApi:", errorMateria);
                    return { err: errorMateria };
                }
                const { data: { createMateriaMaestro: { id: materiaMaestroId } } } = await fcreateMateriaMaestroApi(materiaId, userData.sub)
                const { errorHorario } = await fcreateHorarioApi(updatedFormData.horario, materiaMaestroId)
                // await fcreateHorarioApi(updatedFormData.horario, materiaMaestroId)

                const queryMateriaMaestroResponse = await queryMateriaMaestro(materiaMaestroId)
                console.log("Materia Agregada")
                setCards([...cards, queryMateriaMaestroResponse])
                if (errorHorario) {
                    console.error("Error en la operación HorarioApi:", errorHorario);
                    return { err: errorHorario };
                }

                // console.log("Nueva materia agregada", queryMateriaMaestro)
                handlerAlert('success', 'Registrado correctamente')
            } catch (err) {
                console.log(err)
                handlerAlert('error', 'No se pudo registrar')

            }
            // console.log('Información del completa:', updatedFormData);
            // setFormData({})
            handleCloseDialog();
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            if (userData) {
                try {
                    const result = (
                        await API.graphql({
                            query: listMateriaMaestros,
                            variables: {
                                filter: {
                                    materiaMaestroFMaestroId: {
                                        eq: userData.sub
                                    }
                                }
                            }
                        })
                    )?.data?.listMateriaMaestros?.items;

                    const promises = result.map(item => queryMateriaMaestro(item.id));
                    const resolvedData = await Promise.all(promises);

                    // console.log(resolvedData);

                    setCards(resolvedData);
                } catch (error) {
                    console.error('Error al obtener la información:', error);
                }
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
                        {cards.length !== 0 ? (
                            cards.map((item, index) => (
                                <MateriaCard key={index} propertyInfo={item} updateList={setCards} list={cards} handlerAlert={handlerAlert}/>
                            ))
                        ) : (
                            <Typography
                                variant="subtitle"
                                className="flex items-center justify-center py-6 w-full"
                            >
                                No hay registros
                            </Typography>
                        )}
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
