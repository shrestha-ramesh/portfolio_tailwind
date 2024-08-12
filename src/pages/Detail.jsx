import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export default function Detail() {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  console.log("This is detail user", user);

  return (
    <div>
      <h1>Detail</h1>
      {user ? <p>This page is on main·te·nance</p> : <Navigate to="/login" />}
      <button onClick={() => setUser(null)}>Click</button>
    </div>
  );
}
