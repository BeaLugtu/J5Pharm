import logoJ5Pharmacy from "../../assets/logoJ5Pharmacy.png";
import Footer from "./Footer";
import exitButton from "../../assets/exitButton.png"; // Assuming you have an exit button icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ForgotPass = () => {
    const navigate = useNavigate()

    const handleSubmitButton = () => {
        navigate("/email-Verification-Code")
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
                <div className="container text-center" style={{ marginTop: '-140px' }}>
                    {/* Title */}
                    <h2 className="h4 fw-bold" style={{ fontSize: '30px', color: '#1D242E' }}>Forgot password?</h2>
                    <p className="mb-4 fw-regular" style={{ fontSize: '15px', color: '#1D242E', maxWidth: '420px', margin: '0 auto', wordWrap: 'break-word' }}>
                        Enter the email associated with your account.
                    </p>

                    {/* Form */}
                    <div className="d-flex flex-column align-items-center">
                        <input
                            type="text"
                            className="form-control mb-2"
                            style={{
                                marginTop: '0px',
                                width: '420px',
                                maxWidth: '100%',
                                padding: '0.75rem 1rem',
                                fontSize: '15px',
                                borderRadius: '10px',
                                border: '2px solid #D0D0D0',
                            }}
                            id="userIDInput"
                            placeholder="Email"
                        />

                        {/* Submit Button */}
                        <button
                            style={{
                                marginTop: '12px',
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
                            className="btn btn-hover"
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
