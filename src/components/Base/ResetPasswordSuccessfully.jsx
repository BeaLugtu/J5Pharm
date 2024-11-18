import logoJ5Pharmacy from "../../assets/logoJ5Pharmacy.png";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

const ResetPasswordSuccessfully = () => {

    const navigate = useNavigate(); // Initialize the navigate hook

    const handleLoginClick = () => {
        navigate("/"); // Navigate to Login
    }


    return (
        <div className="font-all d-flex flex-column min-vh-100">
            <div className="my-auto">
                <div className="text-center">
                    <div
                        className="position-relative"
                        style={{
                            width: '50px',
                            height: '50px',
                            margin: '0 auto',
                            marginBottom: '15px',
                        }}
                    >
                        <img
                            src={logoJ5Pharmacy}
                            alt="Logo"
                            className="img-fluid position-absolute top-0 start-0"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>
                    <h1 className="h2 fw-bold" style={{ color: '#1D242E', marginTop: '-4px' }}>Password Reset!</h1>
                    <p className="mb-4 fw-regular" style={{
                        maxWidth: '344px',
                        margin: '0 auto',
                        color: '#1D242E',
                        fontSize: '15px',
                        lineHeight: '1.5',
                        marginTop: '10px',
                    }}>
                        Password reset successful! You can now log in with your new password.
                    </p>
                    <button
                        style={{
                            width: '400.98px',
                            fontWeight: '600',
                            maxWidth: '100%',
                            padding: '0.6rem 1rem',
                            borderRadius: '15px',
                            backgroundColor: '#0F8420',
                            color: 'white',
                            border: '#0F8420',
                            fontSize: '16px',
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                        }}
                        type="submit"
                        className="mb-1 btn-hover"
                        onClick={handleLoginClick} // Trigger navigation on click
                    >
                        Continue
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ResetPasswordSuccessfully;
