import Footer from "./Footer";
import logoJ5Pharmacy from "../assets/logoJ5Pharmacy.png";

const Login = () => {
    return (
        <div className="d-flex flex-column min-vh-100 page-container">
            <div className="container my-auto">
                <div className="text-center">
                    <div className="position-relative" style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                        <img
                            src={logoJ5Pharmacy}
                            alt="Logo"
                            className="img-fluid position-absolute top-0 start-0"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>
                    <h1 className="h4 fw-bold" style={{ fontSize: '30px', color: '#3F3F3F' }}>Sign in</h1>
                    <p className="mb-4 fw-bold" style={{ fontSize: '15px', color: '#A1A1A1', marginTop: '-5px' }}>Access your account to manage the system</p>
                    
                    {/* Centering input fields */}
                    <div className="d-flex flex-column align-items-center ">
                        <input 
                            type="text" 
                            className="form-floating mb-3" 
                            style={{
                                width: '422.98px',
                                maxWidth: '100%',
                                padding: '0.6rem 1rem',
                                fontSize: '15px',
                                borderRadius: '10px',
                                border: '2px solid #D0D0D0', // Set border color and width
                            }}
                            id="formGroupExampleInput" 
                            placeholder="User ID"
                        />
                        <input 
                            type="password" 
                            className="form-control mb-3" 
                            style={{
                                width: '422.98px',
                                maxWidth: '100%',
                                padding: '0.6rem 1rem',
                                fontSize: '15px',
                                borderRadius: '10px',
                                border: '2px solid #D0D0D0', // Set border color and width
                            }}
                            id="formGroupExampleInput2" 
                            placeholder="Password"
                        />
                    </div>

                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <button style={{width: '422.98px', fontWeight: '600', maxWidth: '100%', padding: '0.6rem 1rem', borderRadius:'10px', backgroundColor:'#0F8420', color: 'white', border: '#0F8420', fontSize: '16px'}} type="submit" className="mb-1">Continue</button>
                        <button style={{fontWeight: '700', fontSize: '15px', color: '#515151', textDecoration: 'none'}} type="button" className="btn btn-link">Forgot Password</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};




export default Login