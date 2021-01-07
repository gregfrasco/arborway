import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#196c47'
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
  shape: {
    borderRadius: 5
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

export { theme };
