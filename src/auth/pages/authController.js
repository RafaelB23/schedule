import { useAuthenticator } from '@aws-amplify/ui-react'
import { API } from 'aws-amplify';
import * as React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { listMaestros } from '../../graphql/queries';
import { fmaestroApi } from '../../apis/Api';

export default function AuthController() {
    async function fFindMaestro(user) {
        try {          
          const foundMaestroResponse = await API.graphql({
            query: listMaestros,
            variables: {
              filter: {
                key: {
                  eq: user?.username
                }
              }
            }
          });
          // console.log(foundMaestroResponse)
      
          if (foundMaestroResponse.data.listMaestros.items.length !== 0) {
            // console.log('Maestro encontrado:', foundMaestroResponse.data.listMaestros.items[0]);
            return { found: true, maestro: foundMaestroResponse.data.listMaestros.items[0] };
          } else {
            const createdMaestroResponse = await fmaestroApi(
              user?.attributes.sub,
              user?.username,
              user?.attributes["custom:nombres"],
              user?.attributes["custom:apellido_1"],
              user?.attributes["custom:apellido_2"],
              user?.attributes["email"]
            );
      
            console.log('Maestro registrado:', createdMaestroResponse);
            return { found: false, maestro: createdMaestroResponse.data.createMaestro };
          }
        } catch (error) {
          console.error('Error al buscar/crear maestro:', error);
          return { error: error.message };
        }
      }
      

    const navigate = useNavigate()
    const { route, user } = useAuthenticator((context) => [context.route, context.user])
    // console.log(user)
    useEffect(() => {
        if (route === 'authenticated') {
            // {/* Guardar Maestro */ }
            fFindMaestro(user)
            navigate('/')
        }
        else {
            navigate('/auth')
        }
    })
    return (
        <>
        </>
    )
}