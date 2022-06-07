import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import EHRSimulatorForm from "./Components/EHRSimulatorForm";
//import AddSimulator from './Components/AddSimulator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EHRSimulatorForm />
        {/* <AddSimulator /> */}
      </header>
    </div>
  );
}

export default App;
