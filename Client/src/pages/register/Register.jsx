import React, { useContext, useState } from "react";
import "./register.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
    phone: undefined,
    city: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const [disabled, setDisabled] = useState(false);

  const handleClick = async () => {
    setDisabled(true);
    console.log(credentials);
    const proxy = process.env.REACT_APP_API_URL;
    console.log(proxy);
    try {
      const res = await axios.post(`${proxy}/api/auth/register`, credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch({ type: "REGISTER_FAILURE", payload: err });
      setDisabled(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="Register">
        <div className="RContainer">
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
            className="RInput"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            className="RInput"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            className="RInput"
          />
          <input
            type="text"
            placeholder="Phone"
            id="phone"
            onChange={handleChange}
            className="RInput"
          />
          <input
            type="text"
            placeholder="City"
            id="city"
            onChange={handleChange}
            className="RInput"
          />
          <button disabled={disabled} onClick={handleClick} className="RButton">
            Register
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </>
  );
};

export default Register;
