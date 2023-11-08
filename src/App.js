import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { MaestrosPage } from "./pages/MaestrosPage";
import { MateriasPage } from "./pages/MateriasPage";
import { HomePage } from "./pages/HomePage";
import { HorarioPage } from "./pages/HorarioPage";

// Auth Pages
import { Amplify, } from "aws-amplify";
import awsconfig from "./aws-exports";

// Styles
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Context
import Providers from "./contexts/Context";

import NavBar from "./components/navBar";
import AuthComponent from "./auth/pages/auth"
import NotFoundPage from "./pages/NotFoundPage";

const theme = createTheme({
  palette: {
    white: {
      main: "#282c34",
    },
  },
});

Amplify.configure(awsconfig);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Providers>
        <Router>
          <NavBar />
          <Routes className="App">
            {/* Root */}
            <Route index element={< HomePage />} />
            {/* Autenticacion */}
            <Route path="/auth" element={<AuthComponent />} />
            {/* Formularios */}
            <Route path="/form-profesores" element={<MaestrosPage />} />
            <Route path="/form-materias" element={<MateriasPage />} />
            <Route path="/form-horario" element={<HorarioPage />} />
            {/* Ruta 404 (Not Found) */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Providers>
    </ThemeProvider>
  );
}

export default App;
