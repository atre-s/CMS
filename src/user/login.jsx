import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
    Alert,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';



export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState();



    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const credentials = { email, password };

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            // Handle login success (e.g., save token, redirect)
            setSuccess(data);

            console.log('Login successful', data);
            localStorage.setItem('token', data.token);
            // Redirect or update UI for logged-in state
            navigate("/");
        } catch (error) {
            console.error('Error:', error);
            setError('Login failed, please try again');
        }
    };


    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container style={{ height: '100vh'}} alignItems="center" justifyContent="center">
                <center>
                    <Card sx={{ width: 500, padding: "10px", boxShadow: " 3px 3px 15px rgba(0.3, 0.3, 0.3, 0.2)" }}>
                        {/* <CardHeader title="Login" sx={{color: "#00308F"}} /> */}
                        <h1 style={{ marginTop: "30px", fontSize: "30px", color: "#00308F" }}>Log In</h1>

                        <CardContent>
                            <Stack direction="column" width={400} spacing={5}>

                                <TextField id="outlined-basic" label="Email Address" name='email' value={success ? "" : email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />


                                {/* <TextField id="filled-basic" label="Password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined" /> */}
                                <FormControl sx={{ m: 1 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={success ? "" : password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    onMouseUp={handleMouseUpPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>

                                {error && <Typography>{error}</Typography>}
                                <Button sx={{ maxWidth: 500 }} variant="contained" onClick={handleLogin}>Log In</Button>
                                {success &&
                                    <Alert variant="filled" severity="success">
                                        Login Successfull
                                    </Alert>
                                }
                                <Typography>Don't have an account? <Link to="/signup" style={{ color: "#00308F" }}>Sign Up</Link></Typography>
                            </Stack>

                        </CardContent>
                        <CardActions >

                        </CardActions>

                    </Card>
                </center>
            </Grid>
        </React.Fragment>
    )
}
