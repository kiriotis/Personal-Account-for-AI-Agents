import { createTheme } from '@mui/material/styles';

const colors = {
  primary:{
    main: 'rgb(34,47,122)'
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: colors.primary.main,
        },
      },
    },
  },
});
