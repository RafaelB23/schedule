import { Box, Button, Typography } from '@mui/material'
import { blue } from '@mui/material/colors';
import * as React from 'react'
import { Link } from 'react-router-dom'
import CloudError from '../cloud.svg'

export default function NotFoundPage() {

    return (
        <div className='App-header flex flex-col items-center'>
            <img src={CloudError} alt="Cloud Offline Icon" className="w-1/2" />
            <div className="mt-2">
                <Button color="inherit"
                    component={Link} to="/"
                    className="text-blue-500 font-normal text-2xl uppercase-normal">
                    Regresar a inicio
                </Button>
            </div>
        </div>
    );
}