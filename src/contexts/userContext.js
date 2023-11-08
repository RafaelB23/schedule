import { createContext, useContext, useState } from 'react';

const userContext = createContext(null);

export function useUserContext() {
    return useContext(userContext);
}

export function UserContextProvider({ children }) {
    const [formUser, setFormUser] = useState(null); // Aquí puedes inicializar tu estado de formulario

    const updateFormUser = (newData) => {
        setFormUser({ ...formUser, ...newData });
    };

    return (
        <userContext.Provider value={{ formUser, updateFormUser }}>
            {children}
        </userContext.Provider>
    );
}