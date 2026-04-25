import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [User, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phoneNo: "",
    github: "",
    linkedin: "",
    dob: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...User, [name]: value });
  };

  const response = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          User:{...User}
      }),
    });
  };

  return (
    <div className="RegisterContainer">
      <div className="Form_Side">
        <h2>Welcome ✌️</h2>
        <h4>Let's get you onboard...</h4>
        <form>
          <div className="FormWrapper">
            <div className="Regi_Form">
              {/* <input
                onChange={(e) => {
                  setUser({ ...User, Image: e.target.files[0] });
                }}
                type="file"
              /> */}
              <input
                className="field"
                id="name"
                type="text"
                name="name"
                value={User.name}
                onChange={handleInputs}
                placeholder="Name"
              />
              <input
                className="field"
                id="github"
                type="text"
                name="github"
                value={User.github}
                onChange={handleInputs}
                placeholder="Github Link"
              />
              <input
                className="field"
                id="linkedin"
                type="text"
                name="linkedin"
                value={User.linkedin}
                onChange={handleInputs}
                placeholder="LinkedIn Link"
              />
              <input
                id="email"
                name="email"
                value={User.email}
                onChange={handleInputs}
                type="text"
                placeholder="Email Address"
              />
              <input
                className="InputNumber"
                id="phoneNo"
                type="number"
                placeholder="Phone Number"
                name="phoneNo"
                value={User.phoneNo}
                onChange={handleInputs}
              />

              <input
                id="dob"
                type="date"
                placeholder="Date Of Birth"
                name="dob"
                value={User.dob}
                onChange={handleInputs}
              />
              <input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={User.password}
                onChange={handleInputs}
              />
              <input
                id="cpassword"
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                value={User.cpassword}
                onChange={handleInputs}
              />
            </div>
          </div>

          <button
            onClick={(e)=>response(e)}
            className="SubmitButton">
            Register
          </button>
        </form>
      </div>
      <div className="Background"></div>
    </div>
  );
}

export default Register;
