import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/start/Header";
import { Footer } from "./components/start/Footer";
import Dashboard from "./components/start/Dashboard";

// Stateless Functional Component - Presentation component / Dumb component
// This class has not state

//Father is component(connected to store)
// Kids/children are Presentation
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* All react components should start with capital letters */}
      {/* Header component can be saved with .js or .jsx file */}
      <Header name_info="passing shashidhar in props" />
      <section>
        <div>
          <Dashboard company="shashi Tecnologies" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
