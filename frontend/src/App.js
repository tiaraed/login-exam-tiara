 import Login from "./components/Login";
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
      <Login />
    </BrowserRouter>
  );
}

export default App;
