import React from 'react';
import { MaestroContextProvider } from '../contexts/maestroContext'
import { MateriaContextProvider } from '../contexts/materiaContext'
import { UserContextProvider } from './userContext';
import { Authenticator } from '@aws-amplify/ui-react';

export default function Providers({ children }) {
  return (
    <UserContextProvider>
      <MaestroContextProvider>
        <MateriaContextProvider>
          <Authenticator.Provider>
            {children}
          </Authenticator.Provider>
        </MateriaContextProvider>
      </MaestroContextProvider>
    </UserContextProvider>
  );
}