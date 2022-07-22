import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { LoginAfter } from "./LoginAfter";
import { Sign } from "./Sign";
import { GlobalStyled } from "./styles/GlobalStyled";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/loginafter" element={<LoginAfter />} />
      </Routes>
    </Router>
  );
}

export default App;
