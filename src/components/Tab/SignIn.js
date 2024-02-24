import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, FormControlLabel, Checkbox, Tab, Tabs, Avatar, Input, InputLabel, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../../assets/img/logo.svg';
import './SignIn.css'
const RegisterForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    position: 'relative',
    maxWidth: '500px',
    margin: '0 auto',
});

const RegisterCard = styled(Card)({
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

export default function SignIn() {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('user');
    const [profileImage, setProfileImage] = useState(null);
    const [utilityBill, setUtilityBill] = useState(null);

    const handlePasswordVisibilityToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleProfileImageChange = (event) => {
        const imageFile = event.target.files[0];
        setProfileImage(imageFile);
    };

    const handleUtilityBillChange = (event) => {
        const billFile = event.target.files[0];
        setUtilityBill(billFile);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <section>
                <Container maxWidth={'lg'}>
                    <Grid pt={15} p={15} container >
                        <RegisterCard>
                            <CardContent >
                                <LogoImage src={logo} alt="Logo" />
                                <Typography variant="h5" align="center" gutterBottom>
                                    Sign Up
                                </Typography>
                                <Tabs
                                    value={userType}
                                    onChange={(event, newValue) => setUserType(newValue)}
                                    variant="fullWidth"
                                    indicatorColor="primary"
                                    textColor="primary"
                                    aria-label="user type tabs"
                                >
                                    <Tab className='act' sx={{ color: 'black', fontSize: '1.6rem' }} label="User" value="user" />
                                    <Tab className='act' sx={{ color: 'black', fontSize: '1.6rem' }} label="Mechanic" value="mechanic" />
                                </Tabs>
                                {userType === 'user' && (
                                    <RegisterForm sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onSubmit={handleSubmit}>
                                        <Box sx={{ position: 'relative' }}>
                                            <label htmlFor="profile-image-input">
                                                <Avatar
                                                    sx={{ width: 120, height: 120 }}
                                                    src={profileImage ? URL.createObjectURL(profileImage) : ''}
                                                />
                                            </label>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                id="profile-image-input"
                                                style={{ display: 'none' }}
                                                onChange={handleProfileImageChange}
                                            />
                                            <label htmlFor="profile-image-input">
                                                <Button sx={{ backgroundColor: 'var(--orange)' }} variant="contained" component="span">
                                                    Upload Profile Image
                                                </Button>
                                            </label>
                                        </Box>
                                        <TextField
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                        />
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                        />
                                        <TextField
                                            label="Phone Number"
                                            variant="outlined"
                                            fullWidth
                                        />
                                        <Grid sx={{ width: '100%' }} style={{ position: 'relative' }}>
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
                                        </Grid>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="I accept the terms and conditions."
                                        />
                                        <Button sx={{ backgroundColor: 'var(--orange)' }} className='btn btn-orange' type="submit" variant="contained" color="primary" fullWidth>
                                            Sign Up
                                        </Button>
                                    </RegisterForm>
                                )}
                                {userType === 'mechanic' && (
                                    <RegisterForm sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onSubmit={handleSubmit}>
                                        <Box sx={{ position: 'relative' }}>
                                            <label htmlFor="mechanic-profile-image">
                                                <Avatar
                                                    sx={{ width: 120, height: 120 }}
                                                    src={profileImage ? URL.createObjectURL(profileImage) : ''}
                                                />
                                            </label>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                id="mechanic-profile-image"
                                                style={{ display: 'none' }}
                                                onChange={handleProfileImageChange}
                                            />
                                            <label htmlFor="mechanic-profile-image">
                                                <Button sx={{ backgroundColor: 'var(--orange)' }} variant="contained" component="span">
                                                    Upload Profile Image
                                                </Button>
                                            </label>
                                        </Box>

                                        <TextField
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                        />
                                        <TextField
                                            label="Location"
                                            variant="outlined"
                                            fullWidth
                                        />

                                        <TextField
                                            label="CNIC"
                                            variant="outlined"
                                            fullWidth
                                        />

                                        <Grid sx={{ width: '100%' }} style={{ position: 'relative' }}>
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
                                        </Grid>

                                        <Input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            id="utility-bill-input"
                                            style={{ display: 'none' }}
                                            onChange={handleUtilityBillChange}
                                        />
                                        <InputLabel sx={{ width: '100%' }} htmlFor="utility-bill-input">
                                            <Button sx={{ backgroundColor: 'var(--orange)' }} className='btn btn-orange' variant="contained" component="span" fullWidth>
                                                Utility Bill  {utilityBill && <Typography> {utilityBill.name}</Typography>}
                                            </Button>
                                        </InputLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="I accept the terms and conditions."
                                        />
                                        <Button sx={{ backgroundColor: 'var(--orange)' }} className='btn btn-orange' type="submit" variant="contained" color="primary" fullWidth>
                                            Sign Up
                                        </Button>
                                    </RegisterForm>
                                )}
                            </CardContent>
                        </RegisterCard>
                    </Grid>
                </Container>
            </section>
        </Box>
    );
}
