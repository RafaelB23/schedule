import { grey, blue } from '@mui/material/colors';

export const formFields = {
    signUp: {
        username: {
            label: "Clave",
            placeholder: "Introduce tu numero de profesor",
            errorMessage: 'Numero de profesor no valido',
            type: "text",
            order: 1
        },
        password: {
            label: 'Contraseña',
            placeholder: "Introduce tu contraseña",
            order: 2
        },
        confirm_password: {
            label: 'Confirmación de contraseña',
            placeholder: "Confirma tu contraseña",
            order: 3
        },
        email: {
            label: 'Email',
            placeholder: "Introduce tu correo electronico",
            order: 4
        },
        'custom:nombres': {
            label: "Nombre(s)",
            placeholder: "Introduce tu(s) nombre(s)",
            name: "custom:nombres",
            type: "text",
            order: 5
        },
        'custom:apellido_1': {
            label: "Apellido paterno",
            placeholder: "Introduce tu apellido paterno",
            name: "custom:apellido_1",
            type: "text",
            order: 6
        },
        'custom:apellido_2': {
            label: "Apellido materno",
            placeholder: "Introduce tu apellido materno",
            name: "custom:apellido_2",
            type: "text",
            order: 7
        },
    },
    signIn: {
        username: {
            label: "Clave",
            placeholder: "Introduce tu numero de profesor",
            errorMessage: 'Numero de profesor no valido',
            type: "text",
            order: 1
        },
        password: {
            order: 2
        },
    },
    resetPassword: {
        username: {
            label: "Clave",
            placeholder: "Introduce tu numero de profesor",
            errorMessage: 'Numero de profesor no valido',
            type: "text",
            order: 1
        },
    }
}

export const authTheme = {
    name: 'Auth Theme',
    tokens: {
        colors: {
            background: {
                primary: {
                    value: grey[50], //Fondo seleccionado
                },
                secondary: {
                    value: grey[200], //Fondo del tab no seleccionado
                },
            },
            font: {
                interactive: {
                    value: blue[500],
                },
            },
            brand: {
                primary: {
                    '10': blue[50],
                    '80': blue[500],
                    '90': blue[700],
                    '100': blue[400],
                },
            },
        },
        components: {
            tabs: {
                item: {
                    _focus: {
                        color: {
                            value: grey[900],
                        },
                    },
                    _hover: {
                        color: {
                            value: blue[500],
                        },
                    },
                    _active: {
                        color: {
                            value: grey[900],
                        },
                    },
                },
            },
        },
    },
}