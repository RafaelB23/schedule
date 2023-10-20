
// import { Button, ButtonGroup } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MaestrosPage } from "./pages/MaestrosPage";
import { MateriasPage } from "./pages/MateriasPage";
import { HomePage } from "./pages/HomePage";
import { HorarioPage } from "./pages/HorarioPage";
// Styles
import { createTheme, ThemeProvider } from "@mui/material/styles";
//Context
import Providers from './contexts/Context'

const theme = createTheme({
  palette: {
    white: {
      main: "#282c34",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Providers>
          <Routes className="App">
            <Route exact path="/" element={<HomePage />} />{" "}
            {/* Usar element para renderizar el componente */}
            <Route path="/form-profesores" element={<MaestrosPage />} />
            <Route path="/form-materias" element={<MateriasPage />} />
            <Route path="/form-horario" element={<HorarioPage />} />
            {/* <MaestrosPage />
        <MateriasPage />
        <div className="conteiner py-16 align-content-end">
          <ButtonGroup>
            <Button variant="contained" color="primary">
              Enviar
            </Button>
          </ButtonGroup>
        </div>
        <SchoolSchedule /> */}
          </Routes>
        </Providers>
      </Router>
    </ThemeProvider>
  );
}

export default App;
