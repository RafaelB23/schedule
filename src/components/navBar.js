import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function NavBar() {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    // const navigate = useNavigate()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flex: 1 }}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Horarios de Posgrado
                    </Link>
                </Typography>
                {user && (
                    // <IconButton color="inherit" onClick={() => signOut()}>
                    //     <span style={{ marginLeft: '8px' }}>Cerrar Sesión</span>

                    // </IconButton>
                    <Button
                        component="label"
                        variant="text"
                        onClick={() => {signOut()}}
                        endIcon={<ExitToAppIcon />}
                        style={{ 
                            color: 'white',
                            textTransform: 'none' 
                        }} // Agrega el estilo para el color del texto
                    >
                        Cerrar Sesión
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}
