import { HashRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { LoginAfter } from "./LoginAfter";
import { Sign } from "./Sign";
import { GlobalStyled } from "./styles/GlobalStyled";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyled />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/loginafter" element={<LoginAfter />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
