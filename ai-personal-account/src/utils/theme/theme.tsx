import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';

const borderRadius = '10px';
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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '6px 2px',
          borderRadius: '4px', // скругление углов
          '&.Mui-selected': {
            color: 'black', // черный текст при выборе
            fontWeight: 500,
            backgroundColor: colors.primary.active, // фон активного элемента
          },
          '&:not(.Mui-selected)': {
            color: grey[600], // серый текст, если не выбран
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)', // легкий hover-эффект
            },
          },
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
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: 'rgb(234, 236, 240)',
          color: 'rgb(52, 64, 84)',
          fontWeight: 700,
          cursor: 'default',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        columnHeaders: {
          backgroundColor: 'rgb(234, 236, 240)',
          color: 'rgb(52, 64, 84)',
          fontWeight: 700,
          cursor: 'default',
        },
        root: {
          '& .MuiPaper-root': {
            boxShadow: 'unset',
          },
          '--unstable_DataGrid-radius': borderRadius,
          '--DataGrid-containerBackground': 'rgb(234, 236, 240)',
          '--unstable_DataGrid-headWeight': '600',
          '--Paper-shadow': null,
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
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled .MuiSvgIcon-root': {
            color: grey[500],
            opacity: 0.5,
          },
        },
      },
    },
  },
});
