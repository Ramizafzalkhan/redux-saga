import { createMuiTheme, responsiveFontSizes  } from '@material-ui/core/styles';

export let ThemeConfig = createMuiTheme({
  
  palette: {
    type: "light",
    primary: {
      // light: '#357C4F',
      // main: '#1A3D27',
      // dark: '#203628',
      light: '#ffbb33',
      main: '#FFAA00',
      dark: '#FF9500',
      contrastText: '#fff'
   },
    secondary: {
      light: '#e5f1f7',
      main: '#3f74e8',
      dark: '#3f74e8',
      contrastText: '#fff'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f'
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#ff9800'
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2'
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c'
    },
    text: {
      primary: '#3a3a3a',
      secondary: '#6b778c',
      disabled: 'rgba(0,0,0,0.38)',
      hint: 'rgba(0,0,0,0.38)'
    },
  },
  
  typography: {
    fontSize: 14,
    h1: {
      // '@media (min-width:600px)': {
      //   fontSize: '1.5rem'
      // },
    },
    button: {
      // fontSize: '1rem',
      fontSize: '0.875rem',
      textTransform: 'none',
      // minHeight: 40,
      // ripple: {
      //   color: 'red',
      // },
    },
    
    
    fontFamily: [
      '"Segoe UI Regular"',
      '"Segoe UI Light"',
      '"Segoe UI Semibold"',
      '"Al Bayan Plain"',
      '"Arial"',
      '"Segoe UI Bold"',
      '"Segoe UI Symbol"',
      '"Segoe UI Emoji"',
      '"-apple-system"',
      '"BlinkMacSystemFont"',
      '"Segoe UI"',
      '"Roboto"',
      '"Helvetica Neue"',
      '"Arial"',
      '"sans-serif"',
      '"Apple Color Emoji"',
      'sans-serif'
      
    ].join(','),
  },
  
  overrides: {
    // MuiCssBaseline: {
    //   '@global': {
    //     '@font-face': ,
    //   },
    // },
    
    MuiButton: {
      text: {
        color: 'white',
        root: {
          fontSize: '1rem',
        }
      },
      
    },
    
    // MuiButton: {
    //   sizeLarge: {
    //     // Adjust spacing to reach minimal touch target hitbox
    //     minHeight:56,
    //   },
    // },

    MuiFormLabel: {
      asterisk: {
        color: '#ff0000',
      },
    },

    //overriding typography
    MuiTypography:{
      h1:{
        // fontSize: 1,
        // '@media (min-width:800px)': {
        //   fontSize: '1rem'
        // },
        // '@media (min-width:600px)': {
        //   fontSize: '1.5rem',
        // }
      }
    }

  }
  
});

ThemeConfig = responsiveFontSizes(ThemeConfig);
