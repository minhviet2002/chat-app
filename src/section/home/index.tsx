"use client"

import { Box } from "@mui/material";
import avatar from "../../../src/public/img/bg-presentation.889630297390d27e8dfb.jpg"
import AppChar from "@/src/components/chat";
function HomePage() {
    return (
        <>
            <Box sx={{
                background: `url(${avatar.src}) center top / cover transparent`,
                minHeight: '100vh',
                width: '100%',
            }}>
                <AppChar />
            </Box>
        </>
    )
}

export default HomePage;

