import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import "./Home.css";

// Ensure that RECAPTCHA_TOKEN is correctly imported
const reCaptchaToken = import.meta.env.VITE_RECAPTCHA_TOKEN;
console.log("🚀 ~ reCaptchaToken:", reCaptchaToken);

const Home = () => {
  const captchaRef = useRef(null);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    restaurantName: "",
    email: "",
    phoneNumber: "",
    captcha: "",
  });
  const [errors, setErrors] = useState({});
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    console.log("ReCAPTCHA sitekey:", reCaptchaToken);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^(\+?1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
    return re.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = {};

    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }

    if (formData.restaurantName.trim() === "") {
      newErrors.restaurantName = "Restaurant Name is required";
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email";
      valid = false;
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setShowCaptcha(true);
    }
  };
  
  const onReCAPTCHAChange = async (captchaValue) => {
    if (captchaValue) {
      // setDisabled(false);
      setLoader(true);
      
      const firstname = formData.fullName.split(" ")[0];
      const lastname = formData.fullName.split(" ")[1];
      const email = formData.email;
      const restaurant = formData.restaurantName;
      const phone = formData.phoneNumber;
      
      const data = {
        firstname,
        lastname,
        email,
        restaurant,
        phone,
        // captcha: captchaValue,
      };
      
      setShowThankYouMessage(true);
      try {
        const response = await axios.post(
          "https://api.bookedplus.com/api/user/",
          data
        );

        console.log("Form submitted successfully!", response.data);
      } catch (error) {
        setShowThankYouMessage(false);
        if (error.response.status === 409) {
          alert("Data already exists");
        } else {
          console.log(error);
        }
      }
    }
  };

  return (
    <div className="container mx-auto text-center py-24 px-4">
      <h2 className="text-3xl font-bold mb-4 fade-in-up md:text-5xl">
        Catering Reservations Simplified
      </h2>
      <p className="text-lg mb-8 fade-in-up">
        Join our waitlist now to get an automatic 3-month free trial at our
        launch, or a chance to win a 6-month trial!
      </p>
      {!showThankYouMessage ? (
        <div className="waitlist-box fade-in-up">
          <form id="waitlistForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.fullName ? "invalid" : ""
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.email ? "invalid" : ""
              }`}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.phoneNumber ? "invalid" : ""
              }`}
            />
            <input
              type="text"
              name="restaurantName"
              placeholder="Restaurant / Catering Name"
              value={formData.restaurantName}
              onChange={handleChange}
              className={`w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.restaurantName ? "invalid" : ""
              }`}
            />

            {showCaptcha && (
              <div className="sm:ml-0 ml-[-38px] ">
                <ReCAPTCHA
                  sitekey={reCaptchaToken}
                  onChange={onReCAPTCHAChange}
                />
              </div>
            )}

            <button
              type="submit"
              className={`w-full py-2 transition duration-200 ${
                showCaptcha && disabled ? "captcha-button mt-4" : ""
              }`}
            >
              {showCaptcha && loader && disabled ? (
                <div role="status" className="flex justify-center">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                <>Sign me up!</>
              )}
            </button>
          </form>
        </div>
      ) : (
        <div id="thankYouMessage" className="text-center">
          <div className="w-full">
            <img
              src="koala5.jpeg"
              alt="Koala"
              className="mx-auto rounded-none mb-4 w-full md:w-1/3 h-1/3"
            />
          </div>
          <p className="text-lg">Woohoo! You're In! 🎉</p>
        </div>
      )}

      <div className="mt-8 fade-in-up">
        <Link
          to={"/blogs"}
          className="bg-transparent border border-white text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-blue-700 transition duration-200"
        >
          Learn About Online Catering
        </Link>
      </div>
    </div>
  );
};

export default Home;
