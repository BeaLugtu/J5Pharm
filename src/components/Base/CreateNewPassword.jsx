import logoJ5Pharmacy from "../../assets/logoJ5Pharmacy.png";
import Footer from "./Footer";
import exitButton from "../../assets/exitButton.png"; // Assuming you have an exit button icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";



const CreateNewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate hook

    // Toggle Password Visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const handleSubmitButton = () => {
        navigate("/resetPasswordSuccessfully")
    }


    const handleExitClick = () => {
        navigate("/"); // Navigate to LoginPage
    }


    return (
        <div className="font-all d-flex flex-column min-vh-100" style={{ backgroundColor: '#FCFCFC' }}>
            {/* Header with Logo and Exit Button */}
            <div className="mt-3 padding-container d-flex justify-content-between align-items-center">
                <div style={{ width: '43px', height: '60.52px' }}>
                    <img src={logoJ5Pharmacy} alt="J5 Pharmacy Logo" className="img-fluid" />
                </div>
                <button className="border-0 bg-transparent btn-exit" onClick={handleExitClick}>
                    <img src={exitButton} alt="Exit" style={{ width: '25px', height: '25px' }} />
                </button>
            </div>

            {/* Main content */}
            <div className="my-auto">
                <div className="container text-center" style={{ marginTop: '-100px' }}>
                    {/* Title */}
                    <h1 className="h4 fw-bold" style={{ fontSize: '30px', color: '#1D242E' }}>Create New Password</h1>
                    <p className="mb-4 fw-regular" style={{ fontSize: '15px', color: '#1D242E', marginTop: '-5px' }}>
                        Secure your account with a strong new password.
                    </p>

                    {/* Form */}
                    <div className="d-flex flex-column align-items-center">
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

                        {/* button */}
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
                            onClick={handleSubmitButton} // Trigger navigation on click
                        >
                            Continue
                        </button>


                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default CreateNewPassword;
