import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function Login() {
  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputVal;
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
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        { ...inputVal },
        { withCredentials: true }
      );
      const { success, message, user } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }

    setInputVal({ ...inputVal, email: "", password: "" });
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="row p-5 text-center fs-5">
        <h2 className="fs-1">Login Account</h2>
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
            Create an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
