import Footer from "./Footer";
import logoJ5Pharmacy from "../assets/logoJ5Pharmacy.png";

const Login = () => {
    return (
        <div className="d-flex flex-column min-vh-100 page-container">
            <div className="container my-auto">
                <div className="text-center">
                    <img src={logoJ5Pharmacy} alt="Logo" className="mb-4" />
                    <h1>Sign in</h1>
                    <p>Access your account to manage the system</p>
                    <input
                        type="text"
                        id="userID"
                        placeholder="User ID"
                        className="form-control mb-3"
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="form-control mb-3"
                    />
                    <button type="submit" className="btn btn-primary mb-2">Continue</button>
                    <button  type="button" className="btn btn-link">Forgot Password</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login