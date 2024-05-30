import { useEffect, useRef, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Home = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        restaurantName: '',
        email: '',
        phoneNumber: '',
        captcha: '',
    });
    const [errors, setErrors] = useState({});
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    useEffect(() => {
        loadCaptchaEnginge(6);
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

    const handleValidateCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

    const handleSubmit = (e) => {
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
            setShowThankYouMessage(true);
        }
    };

    return (
        <div className="container mx-auto text-center py-24 px-4">
            <h2 className="text-3xl font-bold mb-4 fade-in-up md:text-5xl">
                Catering Reservations Simplified
            </h2>
            <p className="text-lg mb-8 fade-in-up">
                Join our waitlist now to get an automatic 3-month free trial at our launch, or a chance to win a 6-month trial!
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
                            className={`w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.fullName ? 'invalid' : ''}`}
                        />
                        {/* {errors.fullName && <p className="error">{errors.fullName}</p>} */}

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.email ? 'invalid' : ''}`}
                        />
                        {/* {errors.email && <p className="error">{errors.email}</p>} */}

                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.phoneNumber ? 'invalid' : ''}`}
                        />
                        {/* {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>} */}

                        <input
                            type="text"
                            name="restaurantName"
                            placeholder="Restaurant / Catering Name"
                            value={formData.restaurantName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.restaurantName ? 'invalid' : ''}`}
                        />
                        {/* {errors.restaurantName && <p className="error">{errors.restaurantName}</p>} */}

                        <div className='text-left'>
                            <LoadCanvasTemplate />
                            <input
                                ref={captchaRef}
                                type="text"
                                name='captcha'
                                placeholder='Type the above captcha'
                                
                                onBlur={(e) => {
                                    handleChange(e);
                                    handleValidateCaptcha();
                                }}
                                className="w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <button
                            disabled={disabled}
                            type="submit"
                            className={`w-full py-2 transition duration-200 ${disabled ? 'captcha-button' : ''}`}
                        >
                            Sign me up!
                        </button>
                    </form>
                </div>
            ) : (
                <div id="thankYouMessage" className="fade-in-up">
                    <h3>Thank you for signing up!</h3>
                    <p>We will contact you soon.</p>
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
