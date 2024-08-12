import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setUserFunction();
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.email != "" && formData.password != "") {
      const timer = setTimeout(() => {
        navigate("/homepage");
      }, 3000); // Navigate after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer
    }
  });

  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const setUserFunction = () => {
    formData.email = "shresthashare@gmail.com";
    formData.password = "password";
    setUser(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center text-white">
      {formData.password == "" ? <Spinner /> : <div>Data Loaded</div>}
      <div className="h-[330px] w-80 px-6 my-4 bg-blue-600">
        <h2 className="text-3xl font-bold p-6 text-center">Login</h2>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="w-full relative">
            <input
              className="w-full border border-gray-200 rounded-full py-2 px-4 bg-transparent my-2"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <MdMail className="absolute top-[35%] right-3" />
          </div>
          <div className="w-full relative">
            <input
              className="w-full border border-gray-200 rounded-full py-2 px-4 bg-transparent my-2"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <FaLock className="absolute top-[35%] right-3" />
          </div>
          <button
            className="my-2 py-2 w-full bg-blue-600 rounded-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
