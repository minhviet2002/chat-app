import { Metadata } from 'next'
import { Box } from "@mui/material";
import avatar from "../../../src/public/img/bg-presentation.889630297390d27e8dfb.jpg"
import FormLogin from '@/src/section/auth/login';
export const metadata: Metadata = {
    title: 'Login',
}

function Login() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: `url(${avatar.src}) center top / cover transparent`,
                minHeight: '100vh',
                width: '100%',

            }}>
                <FormLogin />
            </Box>
        </>
    );
}

export default Login;