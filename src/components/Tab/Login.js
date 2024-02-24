import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const LoginForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    position: 'relative',
    maxWidth: '500px',
    margin: '0 auto',
});

const LoginCard = styled(Card)({
    width: '400px',
    margin: '0 auto',
});

const LogoImage = styled('img')({
    width: '50px',
    display: 'block',
    margin: '0 auto 20px',
});

const EyeButton = styled(Button)({
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
});

const CustomTypography = styled(Typography)({
    marginTop: '15px',
});

export default function Login() {
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordVisibilityToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <LoginCard>
                <CardContent>
                    <LogoImage src={logo} alt="Logo" />
                    <Typography variant="h5" align="center" gutterBottom>
                        Login
                    </Typography>
                    <LoginForm onSubmit={handleSubmit}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            autoFocus
                        />
                        <div style={{ position: 'relative' }}>
                            <TextField
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <EyeButton onClick={handlePasswordVisibilityToggle} size="small">
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </EyeButton>
                        </div>
                        <FormControlLabel
                            control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                            label="Remember me"
                        />
                        <Button type="submit" className='btn btn-orange' variant="contained" color="primary" fullWidth>
                            Sign In
                        </Button>
                    </LoginForm>
                    <CustomTypography align="center" variant="body2">
                        Don't have an account? <Link to={'/Signup'}>Register</Link>
                    </CustomTypography>
                </CardContent>
            </LoginCard>
        </Box>
    );
}
