import "./App.css";
import Home from "./components/Home";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
