import Footer from "./Footer";
import logoJ5Pharmacy from "../assets/logoJ5Pharmacy.png";
import QuestionMarkIcon from "../assets/QuestionMarkIcon.png"; // Assuming you save the question mark background here

const NotFound = () => {
    return (
        <div
            className="font-all d-flex flex-column min-vh-100 img-fluid"
            style={{
                backgroundColor: '#FCFCFC',
                backgroundImage: `url(${QuestionMarkIcon})`, // Adding the background image
                backgroundSize: 'cover', // Ensures the background covers the entire area
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
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
                    <h2 className="h4 fw-bold" style={{ color: '#1D242E' }}>404</h2>
                    <h1 className="h2 fw-bold" style={{ color: '#1D242E', marginTop: '-4px' }}>Oops, page not found</h1>
                    <p className="mb-4 fw-regular" style={{
                        maxWidth: '455px',
                        margin: '0 auto',
                        color: '#6c757d',
                        fontSize: '15px',
                        lineHeight: '1.5',
                        marginTop: '10px',
                    }}>
                        The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
                    </p>
                    <button
                        style={{
                            width: '182px',
                            fontWeight: '600',
                            maxWidth: '100%',
                            padding: '0.6rem 1rem',
                            borderRadius: '28px',
                            backgroundColor: '#0F8420',
                            color: 'white',
                            border: '#0F8420',
                            fontSize: '16px',
                            marginTop: '35px',
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                        }}
                        type="submit"
                        className="mb-1 btn-hover"
                    >
                        Go Back
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;
