import logoJ5Pharmacy from "../../assets/logoJ5Pharmacy.png";
import Footer from "./Footer";
import exitButton from "../../assets/exitButton.png"; // Assuming you have an exit button icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const EmailCodeVerify = () => {
    const navigate = useNavigate()

    const handleSubmitButton = () => {
        navigate("/createNewPassword")
    }

    const handleBackClick = () => {
        navigate("/forgotPass"); // Navigate to LoginPage
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
                    <h2 className="h4 fw-bold" style={{ fontSize: '30px', color: '#1D242E' }}>Email Verification</h2>
                    <p className="mb-4 fw-regular" style={{ fontSize: '15px', color: '#1D242E', maxWidth: '420px', margin: '0 auto', wordWrap: 'break-word' }}>
                        We have sent a code to your email <b> jdoecath@pharmacy.com</b>
                    </p>

                    {/* Form */}
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex" style={{ gap: '33px' }}>
                            <input
                                type="text"
                                className="form-control mb-2"
                                style={{
                                    width: '48.39px',
                                    maxWidth: '100%',
                                    fontSize: '25px',
                                    fontWeight: '600',
                                    borderRadius: '10px',
                                    border: '2px solid #D0D0D0',
                                    height: '54.06px',
                                    textAlign: 'center', // Centers the text inside the input field
                                }}
                                id="userIDInput"
                                maxLength="1"
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                style={{
                                    width: '48.39px',
                                    fontWeight: '600',
                                    maxWidth: '100%',
                                    fontSize: '25px',
                                    borderRadius: '10px',
                                    border: '2px solid #D0D0D0',
                                    height: '54.06px',
                                    textAlign: 'center', // Centers the text inside the input field
                                }}
                                id="userIDInput"
                                maxLength="1"
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                style={{
                                    width: '48.39px',
                                    fontWeight: '600',
                                    maxWidth: '100%',
                                    fontSize: '25px',
                                    borderRadius: '10px',
                                    border: '2px solid #D0D0D0',
                                    height: '54.06px',
                                    textAlign: 'center', // Centers the text inside the input field
                                }}
                                id="userIDInput"
                                maxLength="1"
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                style={{
                                    width: '48.39px',
                                    fontWeight: '600',
                                    maxWidth: '100%',
                                    fontSize: '25px',
                                    borderRadius: '10px',
                                    border: '2px solid #D0D0D0',
                                    height: '54.06px',
                                    textAlign: 'center', // Centers the text inside the input field
                                }}
                                id="userIDInput"
                                maxLength="1"
                            />
                        </div>

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
                        <button
                            style={{
                                marginTop: '12px',
                                width: '420px',
                                fontWeight: '600',
                                maxWidth: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '10px',
                                backgroundColor: 'rgba(108, 108, 108, 0.78)', // 74% opacity
                                color: 'white',
                                fontSize: '16px',
                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                            }}
                            className="btn btn-hover"
                            type="submit"
                            onClick={handleBackClick}
                        >
                            Cancel
                        </button>

                        {/* resend code */}
                        <p
                            className="mb-4 fw-regular"
                            style={{
                                fontSize: '15px',
                                marginTop: '20px',
                                color: '#A1A1A1',
                                maxWidth: '420px',
                                margin: '0 auto',
                                wordWrap: 'break-word',
                            }}
                        >
                            Didn’t get a code?{' '}
                            <button
                                style={{
                                    marginTop: '20px',
                                    background: 'none',
                                    border: 'none',
                                    fontWeight: '700',
                                    color: '#303030',
                                    textDecoration: 'underline', // Optional: mimic a link style
                                    cursor: 'pointer',
                                    padding: 0, // Remove button padding
                                }}
                            >
                                click to resend
                            </button>
                        </p>


                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default EmailCodeVerify;
