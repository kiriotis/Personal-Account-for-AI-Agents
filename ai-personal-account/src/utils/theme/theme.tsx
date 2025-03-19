import { createTheme } from '@mui/material/styles';

export let theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(34,47,122)',
    },
  },
});

theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
        },
      },
    },
  },
});
