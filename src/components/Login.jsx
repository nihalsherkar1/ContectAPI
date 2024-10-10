import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Profile from "./Profile";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleUsernameOnChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    // const name = document.getElementById("name").value;
    // const password = document.getElementById("password").value;
    // console.log(name, password);
    setUser({ username, password });
  };
  return (
    <div className=" w-full sm:w-full md:w-full   h-[100vh] rounded overflow-hidden shadow-lg   ">
      <h2 className="text-center text-3xl p-5 font-bold mt-[80px]">Login</h2>
      <div className=" p-5 md:p-5   w-10/12   shadow-xl bg-white rounded-lg py-10     mx-auto  ">
        <div className="flex items-center justify-center     ">
          <input
            className="rounded-2xl md:w-4/5   w-[100%]   p-2 pl-2 border "
            type="text"
            name="name"
            id="name"
            value={username}
            onChange={handleUsernameOnChange}
            placeholder="Username"
          />
        </div>
        <div className="flex items-center  justify-center mt-3 ">
          <input
            className="rounded-2xl md:w-4/5 p-2 w-[100%] pl-2 border"
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordOnChange}
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-center mt-5 text-center">
          <button
            className="bg-blue-500 rounded-lg text-white font-semibold   py-2 px-10 "
            type="submit"
            aria-label="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default Login;
