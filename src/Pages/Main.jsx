import React, { useState } from 'react'
import { Grid, Paper, Box, Typography, TextField, Button } from '@mui/material';
import QRCode from "react-qr-code";
import '../Pages/todo.Main.css'


export const Main = () => {
    const [convertir, setConvertir] = useState('')
    const [qrValue, setQrValue] = useState('');

    const qr = () => {
        console.log('Creando código QR con valor:', convertir);
        setQrValue(convertir);
        setConvertir('');
    }

    return (
        <div>
            <Box sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '50px', my: 2, color: '#36220b' }}>
                GENERADOR DE CÓDIGO QR
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', my: 4 }}>
                <Paper elevation={3} sx={{ width: 300, height: 300, p: 2 }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            <Typography variant="h5" align="center">
                                Escriba el producto a convertir en QR
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="CONVERTIR A QR"
                                variant="outlined"
                                fullWidth
                                value={convertir}
                                onChange={(e) => setConvertir(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={qr}
                            >
                                Crear QR
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper elevation={3} sx={{ width: 300, height: 300, p: 2 }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            <Typography variant="h5" align="center">
                                Resultado QR
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            {qrValue && <QRCode value={qrValue} />}
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <footer style={{ backgroundColor: '#d6b575', padding: '5px', textAlign: 'center', marginTop: '10%' }}>
                © {new Date().getFullYear()} Eduardo / <a href="https://github.com/emaldonadon" target="_blank" rel="noopener noreferrer">GitHub</a>
            </footer>
        </div>
    )
}
