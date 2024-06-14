import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const { user } = useAuthContext();

  if (user) {
    navigate("/665bc136ca6d454ec0f5eed5");
  }

  const [password, setPasword] = useState("");

  const [problem, setProblem] = useState(null);
  const [mailSent, setMailSent] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const OTP = Date.now().toString();

    const data = { email, OTP };
    console.log("ASDSADASDAS", data);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/admin/forgotpassword",
        data
      );

      console.log("Form submitted successfully!", response.data);
      setMailSent(response.data.message);
      e.target.reset();
    } catch (error) {
      if (error.response.status === 409) {
        alert("Данные уже существуют");
      } else {
        setProblem(error.response.data.error);
        console.log("BUGSSSSS", error.response.data.error);
      }
    }
  };

  return (
    <div className=" flex justify-center items-center h-[80vh]">
      <div className="w-1/2">
        <form action="" onSubmit={handleSubmit} className="g">
          {problem && (
            <>
              <div className="error text-center">{problem}</div>
            </>
          )}
          {mailSent && (
            <>
              <div className="error text-center">
                A verification mail has been sent to your Email.
              </div>
            </>
          )}
          <label className="my-4 input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              name="email"
              className="grow text-black"
              placeholder="Email"
            />
          </label>

          <button className="btn btn-primary bg-teal-600 text-white text-center w-full">
            Get OTP through Mail
          </button>

          {/* <div className="mt-3 text-center">
            Not Signed Up yet.?.{" "}
            <Link to="/signup" className="text-cyan-600 font-semibold">
              Sign Up
            </Link>{" "}
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
