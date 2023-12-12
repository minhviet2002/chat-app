"use client"
import { Box, Typography, Stack, FormControl, TextField, InputLabel, InputAdornment, IconButton, FormLabel, FormHelperText, Button } from "@mui/material";
import { useEffect, useState } from 'react';
// import 'firebase/compat/auth';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithRedirect, FacebookAuthProvider } from 'firebase/auth';
import { useRouter } from "next/navigation";
import { PATH_DASHBOARD } from "@/src/config/path/path";
import { Icon } from '@iconify/react';
import auth from "@/src/config/auth/firebaseApp";
import { login, loginFirebase } from "@/src/config/auth/reducerAuthContext";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/src/store/store";
function FormLogin() {
    const dispatch = useDispatch();
    const { push } = useRouter();
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithRedirect(auth, provider);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFacebookLogin = async () => {
        const provider = new FacebookAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setLoadingLogin(true);
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const { displayName, email, photoURL, phoneNumber } = user;
                const accessToken = await user.getIdToken();
                dispatch(loginFirebase({
                    user: {
                        accessToken: accessToken,
                        email: email,
                        displayName: displayName,
                        photoUrl: photoURL,
                        phoneNumber: phoneNumber
                    },
                    isAuthenciated: true
                }))
                push('/' + PATH_DASHBOARD.home)
                setLoadingLogin(false);
            } else {
                // User is signed out
                setLoadingLogin(false);
            }
        });
        return () => unsubscribe();
    }, [auth])

    return (
        <Box position={'relative'} width={'600px'} height={'450px'} borderRadius={3} bgcolor={(theme) => theme.palette.background.paper} sx={{
            '&::before': loadingLogin ? {
                content: "''",
                display: 'block',
                position: 'absolute',
                inset: 0,
                zIndex: 999,
                backgroundColor: '#fff',
                opacity: 0.8,
                borderRadius: 3
            } : {}
        }}>
            <Box sx={{ position: 'absolute', inset: 0 }} padding={5}>
                <Box>
                    <Typography variant="h4" sx={{
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }} >
                        LOGIN {loadingLogin ? (<Icon icon={'eos-icons:bubble-loading'} ></Icon>) : ''}
                    </Typography>
                </Box>
                <Box paddingY={3}>
                    <FormControl size='small' fullWidth>
                        <TextField
                            label={'Name'}
                        />
                    </FormControl>
                    <FormControl size='small' fullWidth sx={{ paddingTop: 3, paddingBottom: 1 }}>
                        <TextField
                            label={'Password'}
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} edge="end">
                                            <Icon icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </FormControl>
                    <Stack alignItems={'flex-end'} width={'100%'}>
                        <Typography variant="body1" sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                color: 'red',
                                textDecoration: 'underline'
                            }
                        }}>
                            Register
                        </Typography>
                    </Stack>
                    <Stack alignItems={'flex-end'} width={'100%'} marginTop={2}>
                        <Button
                            variant="contained"
                            startIcon={<Icon icon={'formkit:submit'}></Icon>}
                            type="submit"
                        >
                            Login
                        </Button>
                    </Stack>
                    <Stack flexDirection={'row'} alignItems={'center'} width={'100%'} marginTop={2} id="firebaseui-auth-container">
                        <Typography variant="body1" fontWeight={'bold'}>Login with:</Typography>
                        <Stack flexDirection={'row'} alignItems={'center'}>
                            <Button
                                variant="outlined"
                                startIcon={<Icon icon={'flat-color-icons:google'}></Icon>}
                                sx={{ marginX: 2 }}
                                onClick={handleGoogleLogin}
                            >
                                Google
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<Icon icon={'icon-park:facebook'}></Icon>}
                                onClick={handleFacebookLogin}
                            >
                                Facebook
                            </Button>
                        </Stack>
                    </Stack>

                </Box>
            </Box>
        </Box>
    );
}

export default FormLogin;