import "./App.css";
import Header from "./comps/Header";
import MovingBar from "./comps/MovingBar.jsx";
import Body from "./comps/Body.jsx";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
      </div>
      <MovingBar></MovingBar>
      <Body></Body>
    </div>
  );
}

export default App;
