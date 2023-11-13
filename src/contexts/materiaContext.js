import { createContext, useContext, useState } from 'react';

const materiaContext = createContext(null);

export function useMateriaContext() {
    return useContext(materiaContext);
}

export function MateriaContextProvider({ children }) {
    const [formMateria, setFormMateria] = useState({}); // Aquí puedes inicializar tu estado de formulario

    const updateFormMateria = (newData) => {
        setFormMateria(newData);
    };

    return (
        <materiaContext.Provider value={{ formMateria, updateFormMateria }}>
            {children}
        </materiaContext.Provider>
    );
}