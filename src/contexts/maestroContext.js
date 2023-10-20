import { createContext, useContext, useState } from 'react';

const maestroContext = createContext(null);

export function useMaestroContext() {
    return useContext(maestroContext);
}

export function MaestroContextProvider({ children }) {
    const [formMaestro, setFormMaestro] = useState({}); // Aquí puedes inicializar tu estado de formulario

    const updateFormMaestro = (newData) => {
        setFormMaestro({ ...formMaestro, ...newData });
    };

    return (
        <maestroContext.Provider value={{ formMaestro, updateFormMaestro }}>
            {children}
        </maestroContext.Provider>
    );
}