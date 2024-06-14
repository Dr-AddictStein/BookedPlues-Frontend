import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [passChanged, setPassChanged] = useState(false);
  const [problem, setProblem] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const pass1 = form.pass1.value;
    const pass2 = form.pass2.value;
    const OTP = form.otp.value;
    const data = { pass1, pass2, OTP };
    console.log("ASDSADASDAS", data);

    try {
      const response = await axios.patch(
        "http://localhost:4000/api/admin/resetpassword",
        data
      );

      console.log("Form submitted successfully!", response.data);
      setPassChanged(true);
      e.target.reset();
    } catch (error) {
      if (error.response.status === 409) {
        alert("Данные уже существуют");
      } else {
        console.log("ERRORORORORRORO",error.response.data.error)
        setProblem(error.response.data.error);
        e.target.reset();
      }
    }
  };
  return (
    <div>
      <div className=" flex justify-center items-center h-[80vh]">
        <div className="w-1/2">
          <form action="" onSubmit={handleSubmit} className="g">
            {passChanged && (
              <>
                <div className="error text-center text-3xl mb-6">
                  Your Password has changed Successfully.!.
                </div>
                <Link to="/login">
                  <button className="btn btn-primary bg-teal-600 text-white text-center w-full mt-3">
                    Go To Log In
                  </button>
                </Link>
              </>
            )}
            {!passChanged && (
              <>
                {problem && (
                  <>
                    <div className="error text-center">
                      {problem}
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
                    name="otp"
                    className="grow text-black"
                    placeholder="Enter the OTP you received on your Mail "
                  />
                </label>
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
                    type="password"
                    name="pass1"
                    className="grow text-black"
                    placeholder="Enter New Password"
                  />
                </label>
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
                    type="password"
                    name="pass2"
                    className="grow text-black"
                    placeholder="Confirm New Password"
                  />
                </label>

                <button className="btn btn-primary bg-teal-600 text-white text-center w-full mt-3">
                  Reset Password
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
