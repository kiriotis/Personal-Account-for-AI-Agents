import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';

const borderRadius = '10px'
const colors = {
  primary: {
    main: 'rgb(34,47,122)',
    active: 'rgba(221, 228, 251)',
  },
  secondary: {
    main: 'rgb(234, 236, 240)',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
    },
    secondary: { main: colors.secondary.main },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
          marginLeft: '10px',
          fontWeight: 400,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '22px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: borderRadius,
          backgroundColor: 'transparent',
          '&.Mui-selected': {
            backgroundColor: colors.primary.active,
            color: colors.primary.main,
          },
          '&:hover': {
            backgroundColor: 'rgba(42, 50, 117, 0.04)',
          },
          '&:not(.Mui-selected)': {
            color: grey[600],
            fontWeight: 400,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        columnHeaders: {
          // background: colors.secondary.main, // Цвет фона заголовков
          // fontSize: '1.2rem', // Размер шрифта
          // fontWeight: 'bold', // Жирный шрифт
        },
        root: {
          '--unstable_DataGrid-radius': borderRadius,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: colors.primary.main,
          fontSize: '22px',
        },
      },
    },
  },
});
