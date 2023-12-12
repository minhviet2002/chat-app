"use client"
import { Container, Stack, useTheme, Box } from "@mui/material";
import NavHeader from "@/src/components/nav/Nav";
import ModeSelected from "@/src/components/mode-selected/ModeSelected";
import Logo from "../logo";
import { Size } from "@/src/config/size";

function Header() {
    return (
        <>
            <Stack flexDirection={'row'} justifyContent={'center'} sx={{ width: '100%' }}>
                <Container
                    maxWidth={false}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: 'fixed',
                        top: Size.navTop,
                        minHeight: Size.headerHeight,
                        width: 'calc(100% - 50vw)',
                        backgroundColor: (theme) => theme.palette.background.paper,
                        borderRadius: '0.75rem'
                    }}
                >
                    <Logo />
                    <Stack flexDirection='row' alignItems={'center'}>
                        <NavHeader />
                        <ModeSelected />
                    </Stack>
                </Container>
            </Stack>
        </>

    );
}

export default Header;