import logoJ5Pharmacy from "../assets/logoJ5Pharmacy.png";
import Footer from "./Footer";
import exitButton from "../assets/exitButton.png"; // Assuming you have an exit button icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ForgotPass = () => {
    const navigate = useNavigate()

    const handleSubmitButton = () => {
        navigate("/requestSubmitted")
    }

    return (
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#FCFCFC' }}>
            {/* Header with Logo and Exit Button */}
            <div className="d-flex justify-content-between align-items-center p-3">
                <div style={{ width: '80px', height: '80px' }}>
                    <img src={logoJ5Pharmacy} alt="J5 Pharmacy Logo" className="img-fluid" />
                </div>
                <button className="border-0 bg-transparent">
                    <img src={exitButton} alt="Exit" style={{ width: '24px', height: '24px' }} />
                </button>
            </div>

            {/* Main content */}
            <div className="my-auto">
                <div className="container text-center">
                    {/* Title */}
                    <h2 className="fw-bold" style={{ fontSize: '24px' }}>Request Password Reset</h2>
                    <p className="text-muted mb-4" style={{ fontSize: '16px', maxWidth: '420px', margin: '0 auto', wordWrap: 'break-word' }}>
                        Submit a request, and our admin will email you a new password shortly.
                    </p>

                    {/* Form */}
                    <div className="d-flex flex-column align-items-center">
                        <input
                            type="text"
                            className="form-control mb-3"
                            style={{
                                width: '420px',
                                maxWidth: '100%',
                                padding: '0.75rem 1rem',
                                fontSize: '15px',
                                borderRadius: '10px',
                                border: '2px solid #D0D0D0',
                            }}
                            id="userIDInput"
                            placeholder="User ID"
                        />
                        <input
                            type="password"
                            className="form-control mb-3"
                            style={{
                                width: '420px',
                                maxWidth: '100%',
                                padding: '0.75rem 1rem',
                                fontSize: '15px',
                                borderRadius: '10px',
                                border: '2px solid #D0D0D0',
                            }}
                            id="passwordInput"
                            placeholder="Password"
                        />
                        <input
                            type="text"
                            className="form-control mb-1"
                            style={{
                                width: '420px',
                                maxWidth: '100%',
                                padding: '0.75rem 1rem',
                                fontSize: '15px',
                                borderRadius: '10px',
                                border: '2px solid #D0D0D0',
                            }}
                            id="descriptionInput"
                            placeholder="Description (Optional)"
                        />

                        {/* Submit Button */}
                        <button
                            style={{
                                width: '420px',
                                fontWeight: '600',
                                maxWidth: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '10px',
                                backgroundColor: '#0F8420',
                                color: 'white',
                                fontSize: '16px',
                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                            }}
                            className="btn"
                            type="submit"
                            onClick={handleSubmitButton}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ForgotPass;
