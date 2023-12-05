import { Box, Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MateriaCard(data) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className="flex h-60 max-h-60 min-w-full pb-2">
                <Box className='flex flex-col w-full'>
                    <CardContent className="flex flex-auto items-center justify-center">
                        <Typography component='div' variant='subtitle1'>asd</Typography>
                    </CardContent>
                    <Box className='flex gap-1 px-2' justifyContent="flex-end">
                        {/* <Typography component='div' variant='subtitle2'>footer</Typography> */}
                        <IconButton>
                            <EditIcon color="primary" />
                        </IconButton>
                        <IconButton>
                            <DeleteIcon color="error" />
                        </IconButton>
                    </Box>
                </Box>
            </Card>
        </Grid>
    )
}