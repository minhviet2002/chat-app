'use client';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material/styles";
import themeExtend from '@/src/theme';



export default function ThemeRegistry(props: any) {
    const { options, children } = props;
    return (
        <CssVarsProvider theme={themeExtend}>
            <CssBaseline />
            {children}
        </CssVarsProvider>
    );
}