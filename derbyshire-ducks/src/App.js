import "./App.css";
import Header from "./comps/Header";
import MovingBar from "./comps/MovingBar.jsx";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
      </div>
      <MovingBar></MovingBar>
    </div>
  );
}

export default App;
