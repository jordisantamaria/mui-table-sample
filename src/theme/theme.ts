import { createTheme } from '@mui/material/styles'
import { Colors } from './Colors';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: Colors.primaryMain,
      dark: Colors.primaryDark,
    },
    secondary: {
      main: Colors.secondary,
    },

    error: {
      main: Colors.error
    },
    warning: {
      main: Colors.warning,
    },
    info: {
      main: Colors.info,
    },
    success: {
      main: Colors.success,
    },

    action: {
      disabled: Colors.disabled,
      disabledBackground: Colors.disabledBackground,
      hover: 'rgba(0,0,0,1)' // TODO when triggers
    }
  },
})

