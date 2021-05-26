import React from 'react'
import Routes from './Routes'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";


const lightTheme = createMuiTheme({
  palette: {
    background: {
        default: "#eee"
    }
}
})

function App() {
  return (
    <MuiThemeProvider theme = {lightTheme}>
        <Routes />
        <CssBaseline />
    </MuiThemeProvider>
  );
}

export default App;
