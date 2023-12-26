import { Box, Button, ButtonGroup, Card, CardContent, Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { fdeleteHorarioApi, fdeleteMateriaApi, fdeleteMateriaMaestroApi } from "../../apis/Api";
import { API } from "aws-amplify";
import { listHorarios } from "../../graphql/queries";

export default function MateriaCard({propertyInfo, updateList, list, handlerAlert}) {
    const [open, setState] = useState(false)
    const handleClick = () => {
        setState(true);
      };
    
      const handleClose = () => {
        setState(false);
      };
    useEffect(()=>{
        // console.log(propertyInfo.fMateria.name)
    })
    const handleDelete = (async ()=>{
        // console.log(propertyInfo)
        try{
            const resDeleteMateria = await fdeleteMateriaApi(propertyInfo.materiaMaestroFMateriaId)
            const listHorarioApi = await API.graphql({
                query: listHorarios,
                variables: {
                    filter: {
                        horarioFMateriaMaestroId: {
                            eq: propertyInfo.id
                        }
                    }
                }
            })
            const idHorarios = listHorarioApi.data?.listHorarios?.items.map(item => item.id)
            const deletePromises = idHorarios.map(async item => {
                return fdeleteHorarioApi(item);
            })
            const resDeleteHorarioArray = await Promise.all(deletePromises)

            const resDeleteMateriaMaestro = await fdeleteMateriaMaestroApi(propertyInfo.id)
            const res = {
                "materia_message": resDeleteMateria?resDeleteMateria:"Error with MateriaId",
                "horario_message": resDeleteHorarioArray?resDeleteHorarioArray:"Error with HorarioId",
                "materiamaestro_message": resDeleteMateriaMaestro?resDeleteMateriaMaestro:"Error with MateroaMaestroId"
            }
            const newListCards = list.filter(item => item.id !== propertyInfo.id)
            updateList(newListCards)
            handlerDialogConfirmation('success', 'Eliminado correctamente')
        }catch(err){
            const messages = err.errors.map(error => error.message)
            console.log(messages)
            handlerDialogConfirmation('error', 'Ocurrio un problema al intentar eliminar '+ propertyInfo.fMateria.name)
        }
        
    })
    const handlerDialogConfirmation = (status, message) => {
        handlerAlert(status, message)
        handleClose()
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className="flex h-60 max-h-60 min-w-full pb-2">
                <Box className='flex flex-col w-full'>
                    <CardContent className="flex flex-auto items-center justify-center">
                        <Typography component='div' variant='subtitle1'>{propertyInfo.fMateria.name}</Typography>
                    </CardContent>
                    <Box className='flex gap-1 px-2' justifyContent="flex-end">
                        {/* <Typography component='div' variant='subtitle2'>footer</Typography> */}
                        <IconButton>
                            <EditIcon color="primary" />
                        </IconButton>
                        {/* <IconButton onClick={handleDelete}> */}
                        <IconButton onClick={handleClick}>
                            <DeleteIcon color="error" />
                        </IconButton>
                    </Box>
                </Box>
            </Card>
            <Dialog open={open} fullWidth maxWidth="sm">
                <DialogTitle>
                    Confirmación
                </DialogTitle>
                <DialogContent>
                    ¿Esta seguro de que quiere eliminar <strong>{propertyInfo.fMateria.name}</strong>?
                </DialogContent>
                <DialogContent>
                    <ButtonGroup>
                        <Button color="error" onClick={handleDelete}>
                        {/* <Button color="error" onClick={handleDelete}> */}
                            Confirmar
                        </Button>
                        <Button onClick={handleClose}>
                            Cancelar
                        </Button>
                    </ButtonGroup>
                </DialogContent>
            </Dialog>
        </Grid>
    )
}