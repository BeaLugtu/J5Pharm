import Footer from "./Footer";
import logoJ5Pharmacy from "../../assets/logoJ5Pharmacy.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate hook

    // Toggle Password Visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    // Handle Continue button click
    const handleContinueClick = () => {
        navigate("/loadingPage"); // Navigate to LoadingPage
    }

    const handleForgotPassword = () => {
        navigate("/forgotPass")
    }

    return (
        <div className="font-all d-flex flex-column min-vh-100" style={{ backgroundColor:'#FCFCFC' }}>
            <div className="my-auto">
                <div className="text-center">
                    <div className="position-relative" style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                        <img
                            src={logoJ5Pharmacy}
                            alt="Logo"
                            className="img-fluid position-absolute top-0 start-0"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>
                    <h1 className="h4 fw-bold" style={{ fontSize: '30px', color: '#1D242E' }}>Sign in</h1>
                    <p className="mb-4 fw-regular" style={{ fontSize: '15px', color: '#1D242E', marginTop: '-5px' }}>
                        Access your account to manage the system
                    </p>

                    {/* Centering input fields */}
                    <div className="d-flex flex-column align-items-center">
                        <input
                            type="text"
                            className="form-control mb-2"
                            style={{
                                width: '422.98px',
                                maxWidth: '100%',
                                padding: '0.6rem 1rem',
                                fontSize: '15px',
                                borderRadius: '10px',
                                border: '2px solid #D0D0D0',
                            }}
                            id="userIDInput"
                            placeholder="User ID"
                        />

                        {/* Password field with visibility toggle */}
                        <div className="position-relative mb-3" style={{ width: '422.98px', maxWidth: '100%' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="passwordInput"
                                placeholder="Password"
                                style={{
                                    padding: '0.6rem 1rem',
                                    fontSize: '15px',
                                    borderRadius: '10px',
                                    border: '2px solid #D0D0D0',
                                    paddingRight: '3rem'
                                }}
                            />

                            {/* Password visibility toggle icon */}
                            <span
                                className="position-absolute"
                                style={{
                                    top: '50%',
                                    right: '17px',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                    color: 'black'
                                }}
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <button
                            style={{
                                width: '422.98px',
                                fontWeight: '600',
                                maxWidth: '100%',
                                padding: '0.6rem 1rem',
                                borderRadius: '10px',
                                backgroundColor: '#0F8420',
                                color: 'white',
                                border: '#0F8420',
                                fontSize: '16px',
                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                            }}
                            type="submit"
                            className="mb-1 btn-hover"
                            onClick={handleContinueClick} // Trigger navigation on click
                        >
                            Continue
                        </button>
                        <button
                            style={{
                                fontWeight: '500',
                                fontSize: '15px',
                                color: '#1D242E',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                            }}
                            type="button"
                            className="btn btn-link btn-forgot-hover"
                            onClick={handleForgotPassword}
                        >
                            Forgot Password
                        </button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
