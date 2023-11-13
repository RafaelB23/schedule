import { Button } from '@mui/material'
import { blue } from '@mui/material/colors';
import * as React from 'react'
import { Link } from 'react-router-dom'
import CloudError from '../cloud.svg'

export default function NotFoundPage() {

    return (
        <div className='App-header flex flex-col items-center'>
            <img src={CloudError} alt="Cloud Offline Icon" className="w-1/3" />
            <div className="mt-2">
                <Button color="inherit"
                    component={Link} to="/"
                    style={{
                        color: blue[500],
                        fontWeight: 'normal',
                        fontSize: '24px',
                        textTransform: 'none'
                    }}>
                        Regresar a inicio
                </Button>
            </div>
        </div>
    );
}