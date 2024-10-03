import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
    Alert,
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowCPassword = () => setShowCPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownCPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpCPassword = (event) => {
        event.preventDefault();
    };

    // handleMatchPassword = () => {
    //     if (password === cPassword && password.length === cPassword.length) {
    //         console.log("Password Match Succesfully");

    //     } else {
    //         console.log("Password not matched");

    //     }
    // }

    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = { email, password };

        if (password !== cPassword || email == "" || name == "" || password == "" || cPassword == "") {
            setError(true);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            // Handle successful registration
            console.log('Registration successful', data);
            setSuccess(true);
            setError(null);
            navigate("/login");
            // !error && navigate("/login");
        } catch (error) {
            console.error('Error:', error);
            setError('Registration failed, please try again.');
            setSuccess(false);
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container style={{ height: '100vh' }} alignItems="center" justifyContent="center">
                <center>
                    <Card sx={{ width: 500, padding: "10px", boxShadow: " 3px 3px 15px rgba(0.3, 0.3, 0.3, 0.2)" }}>
                        {/* <CardHeader title="Sign Up" sx={{ color: "#00308F" }} /> */}
                        <h1 style={{ marginTop: "30px", fontSize: "30px", color: "#00308F" }}>Sign Up</h1>

                        <CardContent>
                            <Stack direction="column" width={400} spacing={5} >

                                <TextField id="outlined-basic" label="Full Name" name='name' value={name} onChange={(e) => setName(e.target.value)} variant="outlined" required />

                                <TextField id="outlined-basic" label="Email Address" name='email' value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" required />


                                <FormControl sx={{ m: 1 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
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
                                        required
                                    />
                                </FormControl>

                                <FormControl sx={{ m: 1 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-cpassword">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-cpassword"
                                        type={showCPassword ? 'text' : 'password'}
                                        value={cPassword}
                                        onChange={(e) => setCPassword(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowCPassword}
                                                    onMouseDown={handleMouseDownCPassword}
                                                    onMouseUp={handleMouseUpCPassword}
                                                    edge="end"
                                                >
                                                    {showCPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                        required
                                    />
                                </FormControl>



                                {error && <Typography>{error}</Typography>}
                                {success && <Typography>Registration successful! You can now log in.</Typography>}
                                {error &&
                                    <Alert color='error' severity="error">
                                        Please enter correct password
                                    </Alert>
                                }
                                <Button sx={{ maxWidth: 500 }} variant="contained" onClick={handleRegister}>Sign Up</Button>

                                <Typography>Already have an account? <Link to="/login" style={{ color: "#00308F" }}>Log In</Link></Typography>
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
