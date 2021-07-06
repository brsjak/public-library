import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import './fonts.scss';

export const publicLibraryTheme: ThemeOptions = {
  typography: {
    fontFamily: ['Gilroy', 'Poppins', 'sans-serif'].join(','),
    // Welcome screen titles
    h2: {
      fontSize: '34px',
      fontWeight: 'bold',
      lineHeight: '40.8px',
      textTransform: 'none',
    },
    // Application section titles
    h3: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '28.8px',
      textTransform: 'none',
    },

    h4: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '36px',
      textTransform: 'none',
    },
    h5: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '36px',
      textTransform: 'none',
    },
    h6: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '36px',
      textTransform: 'none',
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '30px',
      textTransform: 'none',
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '21px',
      textTransform: 'none',
    },
    button: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '36px',
      fontFamily: 'Poppins',
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#068D9D',
      //   contrastText: POS_WHITE,
    },
    secondary: {
      main: '#ffffff',
      //   contrastText: POS_WHITE,
    },
  },
};

export const theme = createMuiTheme(publicLibraryTheme);
