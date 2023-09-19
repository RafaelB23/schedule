// import logo from "./logo.svg";
import { Button, ButtonGroup } from "@mui/material";
import "./App.css";
// import ButtonUsage from "./components/defaultPage.js";
import { MaestrosPage } from "./pages/MaestrosPage";
import { MateriasPage } from "./pages/MateriasPage";
import SchoolSchedule from "./components/ScheduleComponent";

function App() {
  return (
    <div className="App">
      <MaestrosPage />
      <MateriasPage />
      <div className="conteiner py-16 align-content-end">
        <ButtonGroup>
          <Button variant="contained" color="primary" >Enviar</Button>
        </ButtonGroup>
      </div>
      <SchoolSchedule/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Training...</p>
        <ButtonUsage />
      </header> */}
    </div>
  );
}

export default App;
