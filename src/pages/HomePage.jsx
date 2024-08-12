import Intro from "../intro/Index";
import Description from "../description/Index";
import FeedBack from "../feedBack/Index";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function HomePage() {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  return (
    <>
      {user ? (
        <div>
          <Intro />
          <Description />
          <FeedBack />
        </div>
      ) : (
        <button onClick={() => setUser(null)}>Click</button>

      )}
    </>
  );
}
