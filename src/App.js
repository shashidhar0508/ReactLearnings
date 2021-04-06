import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/start/Header";
import { Footer } from "./components/start/Footer";
import Dashboard from "./components/start/Dashboard";
import useOrderCountHook from "./components/hooks/useCustomHook";

// Stateless Functional Component - Presentation component / Dumb component
// This class has not state

//Father is component(connected to store)
// Kids/children are Presentation
function App() {
  // using the custom hook which we created in "useCustomHook"
  const orderHook = useOrderCountHook();

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
          <h2>Testing Custom Hook</h2>
          <h3>Count : {orderHook.orderCount.count}</h3>
          <button type="button" onClick={orderHook.changeOrderCount}>
            Increment Order
          </button>
          <Dashboard company="shashi Tecnologies" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
