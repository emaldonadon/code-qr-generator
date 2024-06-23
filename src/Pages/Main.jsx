import React, { useState } from 'react';
import { Grid, Paper, Box, Typography, TextField, Button } from '@mui/material';
import QRCode from 'react-qr-code';
import '../Pages/todo.Main.css';

export const Main = () => {
    const [convertir, setConvertir] = useState('');
    const [qrValue, setQrValue] = useState('');

    const qr = () => {
        setQrValue(convertir);
        setConvertir('');
    };

    return (
        <div style={{
            background: 'linear-gradient(to right, #6a11cb, #2575fc)',
            height: '100vh',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Box sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '50px'}}>
                GENERADOR DE CÓDIGO QR
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', my: 4 }}>
                <Paper elevation={6} sx={{ width: 300, height: 308, p: 2, backgroundColor: '#ffffffa0', backdropFilter: 'blur(10px)' }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            <Typography variant="h5" align="center" color="textPrimary" fontWeight="bold">
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
                                InputLabelProps={{ style: { color: '#000' } }}
                                InputProps={{ style: { color: '#000' } }}
                                sx={{ mt: 3 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={qr}
                                sx={{
                                    backgroundColor: '#6a11cb',
                                    '&:hover': { backgroundColor: '#2575fc' },
                                    transition: 'background-color 0.3s ease'
                                }}
                            >
                                Crear QR
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper elevation={6} sx={{ width: 305, height: 308, p: 2, backgroundColor: '#ffffffa0', backdropFilter: 'blur(10px)' }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            <Typography variant="h5" align="center" color="textPrimary" fontWeight="bold">
                                Resultado QR
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            {qrValue && <QRCode value={qrValue} />}
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <footer style={{
                background: 'linear-gradient(to right, #6a11cb, #2575fc)',
                padding: '10px',
                textAlign: 'center',
                width: '100%',
                position: 'fixed',
                bottom: 0
            }}>
                © {new Date().getFullYear()} Eduardo / <a href="https://github.com/emaldonadon" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none'}}>GitHub</a>
            </footer>
        </div>
    );
};
