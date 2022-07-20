import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { GlobalStyled } from "./styles/GlobalStyled";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
