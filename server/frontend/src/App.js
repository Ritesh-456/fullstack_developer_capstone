import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/Register"
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;
