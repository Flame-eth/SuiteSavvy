import React, { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
  };

  const [disabled, setDisabled] = useState(false);

  //   function handleClick() {
  //     setDisabled(true);
  //   }

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button
            disabled={disabled}
            onClick={handleSubmit}
            className="lButton">
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </>
  );
};

export default Login;
