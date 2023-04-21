import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
