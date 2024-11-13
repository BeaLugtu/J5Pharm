// LoadingPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoJ5Pharmacy from "../../assets/logoJ5Pharmacy.png";
import NamePharmacy from "../../assets/NamePharmacy.png"

const LoadingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/superAdminDashboard");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ marginTop: '-25px', backgroundColor: '#FCFCFC' }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{textAlign: 'end', display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
                    <img src={logoJ5Pharmacy} style={{width:'65px', height: '100px'}} alt="" />
                    <h1 className="titleNameLoading">Pharmacy</h1>
                </div>
                <span className="loader"></span> {/* Loading bar */}
            </div>
        </div>
    );
};

export default LoadingPage;
