import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
      type: 'light',
      primary: {main: '#24806c'},
      secondary: {main: "#d9d9d9"},
      background: {
        default: "#222222",
        paper: "#ffffff",
      },
      text: {
        primary: "#000000"
      }
    },
    typography: {
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  