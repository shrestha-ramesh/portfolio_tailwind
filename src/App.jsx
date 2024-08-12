import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { UserContextProvider } from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/" element={<Login />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
