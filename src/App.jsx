import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="detail" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
