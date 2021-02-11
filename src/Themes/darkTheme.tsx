import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
      type: 'dark',
      primary: {main: '#24806c'},
      secondary: {main: "#181a1c"},
      background: {
        default: "#222222",
        paper: "#040404",
      },
      text: {
        primary: "#ffffff"
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
  

/*   import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
      type: 'dark',
      primary: {main: '#24806c'},
      secondary: {main: "#181a1c"},
      background: {
        default: "#222222",
        paper: "#222222",
      },
      text: {
        primary: "#ffffff"
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
  }); */
  