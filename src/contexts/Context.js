import React from 'react';
import { MaestroContextProvider } from '../contexts/maestroContext'
import { MateriaContextProvider } from '../contexts/materiaContext'

export default function Providers({ children }) {
    return (
        <MaestroContextProvider>
          <MateriaContextProvider>
            {children}
          </MateriaContextProvider>
        </MaestroContextProvider>
    );
}