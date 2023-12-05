import {
    Dialog,
    DialogTitle,
    DialogContent,
} from '@mui/material';
import MateriaForm from '../MateriaForm';
import ScheduleComponent from '../ScheduleComponent'

export default function DialogForm({
    openDialog,
    handleFormSubmit,
    handleCloseDialog,
    dialogState
}) {
    return (
        <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
            <DialogTitle>Agregar Unidad de Aprendizaje</DialogTitle>
            <DialogContent>
                <div className='max-w-lg m-auto pt-4'>
                    {dialogState ?
                        <ScheduleComponent
                            handleCloseDialog={handleCloseDialog}
                            handleFormSubmit={handleFormSubmit}
                            dialogState={dialogState} /> :
                        <MateriaForm
                            handleCloseDialog={handleCloseDialog}
                            handleFormSubmit={handleFormSubmit}
                            dialogState={dialogState} />}
                    {/* <MateriaForm /> */}
                </div>
            </DialogContent>
            {/* <DialogActions>
                <Button onClick={handleCloseDialog}>Cancelar</Button>
                <Button onClick={handleFormSubmit(formData)}>
                    {dialogState ? 'Guardar' : 'Siguiente'}
                </Button>
            </DialogActions> */}
        </Dialog>
    );
}
