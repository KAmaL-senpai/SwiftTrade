import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function Signup() {
  const [inputVal, setInputVal] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { email, username, password } = inputVal;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };
  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const handleSubmitt = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/signup",
        { ...inputVal },
        { withCredentials: true }
      );
      const { success, message, user } = data;
      console.log(user);
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3000";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }

    setInputVal({ ...inputVal, email: "", username: "", password: "" });
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="row p-5 text-center fs-5">
        <h2 className="fs-1">Signup Account</h2>
        <form onSubmit={handleSubmitt} className="p-4">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              style={{ width: "50%" }}
              className="border"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              style={{ width: "50%" }}
              className="border"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              style={{ width: "50%" }}
              className="border"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br /> <br />
          <span>
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
