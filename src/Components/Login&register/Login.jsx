import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/user";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  const [isLoginVisible, setLoginVisible] = useState(true);

  const [User, setUser] = useState({
    email: "akashnyerunkar580@gmail.com",
    password: "Some@123",
  });

  const [RUser, setRUser] = useState({
    name: "",
    email: "",
    mpassword: "",
    cpassword: "",
    phoneNo: "",
    github: "",
    linkedin: "",
    dob: "",
  });

  const [file, setfile] = useState(null);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleRInputs = (e) => {
    const { name, value } = e.target;
    setRUser({ ...RUser, [name]: value });
  };

  const response = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ User }),
      });

      if (res.status === 201) {
        const d = await res.json();
        toast.success("User LoggedIn successfully");
        dispatch(login(d.data));
        navigate("/dashboard");
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      toast.error("Server Down...");
    }
  };

  const Rresponse = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(RUser).forEach((key) => {
      formData.append(key, RUser[key]);
    });

    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      toast.success("Registered Successfully");
      console.log(data);
    } catch (err) {
      toast.error("Registration Failed");
    }
  };

  const toggleCard = () => {
    setLoginVisible(!isLoginVisible);
  };

  return (
    <div className="login-register-container">

      {/* SLIDER */}
      <div
        className={`slider ${isLoginVisible ? "login-mode" : "register-mode"}`}
        onClick={toggleCard}
      >
        {isLoginVisible ? (
          <div className="slider-content">
            <h2>Hello!</h2>
            <p>Enter your details to access dashboard</p>
          </div>
        ) : (
          <div className="slider-content">
            <h2>Welcome Back!</h2>
            <p>Login to continue your journey</p>
          </div>
        )}
      </div>

      {/* MAIN */}
      <div className="login-main">

        {/* LOGIN */}
        <div className="login-section">
          <div className="login-form">
            <h1>Sign In</h1>

            <form onSubmit={response}>
              <input
                type="email"
                name="email"
                value={User.email}
                onChange={handleInputs}
                placeholder="Email"
              />

              <input
                type="password"
                name="password"
                value={User.password}
                onChange={handleInputs}
                placeholder="Password"
              />

              <button className="login-btn">Login</button>
            </form>

            <span className="forgot">Forgot Password?</span>
          </div>
        </div>

        {/* REGISTER */}
        <div className="register-section">
          <div className="register-form">
            <h1>Sign Up</h1>

            <form onSubmit={Rresponse}>
              <div className="grid-form">
                <input name="name" placeholder="Name" onChange={handleRInputs} />
                <input name="github" placeholder="Github" onChange={handleRInputs} />
                <input type="file" onChange={(e) => setfile(e.target.files[0])} />
                <input name="linkedin" placeholder="LinkedIn" onChange={handleRInputs} />
                <input name="email" placeholder="Email" onChange={handleRInputs} />
                <input name="phoneNo" placeholder="Phone" onChange={handleRInputs} />
                <input type="date" name="dob" onChange={handleRInputs} />
                <input name="mpassword" placeholder="Password" onChange={handleRInputs} />
                <input name="cpassword" placeholder="Confirm Password" onChange={handleRInputs} />
              </div>

              <button className="register-btn">Sign Up</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;