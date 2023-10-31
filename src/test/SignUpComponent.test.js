import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import SignUpComponent from '../auth/pages/signUp'; // Importa tu componente SignUpComponent

test('Muestra mensajes de error cuando los campos están vacíos', () => {
    render(<SignUpComponent />);

    const signUpButton = screen.getByRole('button', { name: 'Registrarse' });
    fireEvent.click(signUpButton);

    const usernameError = screen.getByText('El usuario es obligatorio');
    const passwordError = screen.getByText('La contraseña es obligatoria');
    const claveError = screen.getByText('La clave de profesor es obligatoria');
    const nameError = screen.getByText('El nombre es obligatorio');
    const apellido1Error = screen.getByText('El apellido paterno es obligatorio');
    const apellido2Error = screen.getByText('El apellido materno es obligatorio');
    const emailError = screen.getByText('El correo electrónico es obligatorio');

    expect(usernameError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
    expect(claveError).toBeInTheDocument();
    expect(nameError).toBeInTheDocument();
    expect(apellido1Error).toBeInTheDocument();
    expect(apellido2Error).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
});

test('Muestra mensaje de error cuando la contraseña no cumple con los requisitos', () => {
    render(<SignUpComponent />);

    const passwordInput = screen.getByLabelText('Contraseña');
    const signUpButton = screen.getByRole('button', { name: 'Registrarse' });

    fireEvent.change(passwordInput, { target: { value: 'weak' } });
    fireEvent.click(signUpButton);

    const passwordError = screen.getByText('La contraseña debe tener al menos 8 caracteres y cumplir con los requisitos.');
    expect(passwordError).toBeInTheDocument();
});

test('Registro completo exitoso', async () => {
    render(<SignUpComponent />);

    const usernameInput = screen.getByLabelText('Usuario');
    const passwordInput = screen.getByLabelText('Contraseña');
    const claveInput = screen.getByLabelText('Clave de profesor');
    const nameInput = screen.getByLabelText('Nombre(s)');
    const apellido1Input = screen.getByLabelText('Apellido Paterno');
    const apellido2Input = screen.getByLabelText('Apellido Materno');
    const emailInput = screen.getByLabelText('Correo Electrónico');
    const signUpButton = screen.getByRole('button', { name: 'Registrarse' });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'StrongP@ssword1' } });
    fireEvent.change(claveInput, { target: { value: '12345' } });
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(apellido1Input, { target: { value: 'Doe' } });
    fireEvent.change(apellido2Input, { target: { value: 'Smith' } });
    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });

    fireEvent.click(signUpButton);

    // Usar waitFor para esperar a que aparezca el mensaje
    // const successMessage = await waitFor(() => screen.getByText('¡Registro exitoso!'));
    // expect(successMessage).toBeInTheDocument();
});
