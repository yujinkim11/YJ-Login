import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { GlobalStyled } from "./styles/GlobalStyled";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
