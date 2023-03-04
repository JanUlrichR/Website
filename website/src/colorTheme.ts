import { createTheme } from '@mui/material/styles';

// https://bareynol.github.io/mui-theme-creator/
export const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#2e9f43',
        },
        secondary: {
            main: '#13f500',
        },
        background: {
            paper: '#161b22',
            default: '#0d1117',
        },
    },
    typography: {
        allVariants: {
            color: "#ffffff"
        },
    },
});
