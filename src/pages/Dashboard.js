import { Container, Snackbar, Alert } from '@mui/material';
import MateriasDashboard from '../components/Dashboard/GridMateriaComponent';
import { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
    const navigate = useNavigate()
    const { user, route } = useAuthenticator((context) => [context.user, context.route])
    const [attributes, setAttributes] = useState('')
    const [open, setOpen] = useState(false)
    const [alertStatus, setAlertStatus] = useState('success')
    const [alertMessage, setAlertMessage] = useState('')

    const handleClick = (severity, message) => {
        setAlertStatus(severity)
        setAlertMessage(message)
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(()=>{
        if (route === 'authenticated') {
            try{
                // console.log(user)
                setAttributes(user?.attributes)
            }catch(err){
                navigate('/auth')
            }
          }
    },[user, route, navigate])
    return (
        <div className="App">
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertStatus} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
            <Container className="m-6" maxWidth="lg" minwidth='xs'>
                <MateriasDashboard userData={attributes} handlerAlert={handleClick}/>
            </Container>
        </div>
    )
}
