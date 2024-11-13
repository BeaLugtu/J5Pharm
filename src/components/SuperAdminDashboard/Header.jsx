import React, { useEffect, useState } from 'react';
import headerLogo from '../../assets/headerLogo.png';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import { FaSun, FaMoon, FaCloudSun } from 'react-icons/fa'; // Import icons
import GenericAvatar from '../../assets/GenericAvatar.png';
import DotsMoreDark from '../../assets/DotsMoreDark.png';


const Header = () => {
    const [greeting, setGreeting] = useState('');
    const [icon, setIcon] = useState(<FaSun />); // Default icon
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateGreetingAndIcon = () => {
            const now = new Date();
            setCurrentTime(formatDate(now)); // Update the current time

            const currentHour = now.getHours();
            if (currentHour < 12) {
                setGreeting('Good Morning');
                setIcon(<FaSun />);
            } else if (currentHour < 18) {
                setGreeting('Good Afternoon');
                setIcon(<FaCloudSun />);
            } else {
                setGreeting('Good Evening');
                setIcon(<FaMoon />);
            }
        };

        const formatDate = (date) => {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            const datePart = date.toLocaleDateString('en-US', options); // Format only the date
            const timePart = date.toTimeString().split(' ')[0]; // Get time in HH:MM:SS format
            return `${datePart} ${timePart}`; // Combine date and time without "at"
        };

        updateGreetingAndIcon();
        const intervalId = setInterval(updateGreetingAndIcon, 0); // Update every minute

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <nav className="navbar font-all" style={{ backgroundColor: '#F7FAFD', width: '100%', padding: '0', borderBottom: '2px solid rgba(29, 36, 46, 0.3)' }}>
            <div className="container-fluid d-flex justify-content-between align-items-center" style={{ paddingLeft: '0', paddingRight: '0' }}>

                {/* Logo */}
                <div style={{ paddingLeft: '12px', backgroundColor: 'white', flexShrink: 0, width: '286px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a className="navbar-brand mb-0" href="#">
                        <img
                            src={headerLogo}
                            alt="J5 Pharmacy Logo"
                            style={{ width: '100%', maxWidth: '162px', height: 'auto' }}
                        />
                    </a>
                </div>

                {/* Search Bar (Visible on larger screens) */}
                <form className="d-none d-md-flex flex-grow-1 pe-2 ps-4" role="search">
                    <div className="input-group">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search Medicine here"
                            aria-label="Search"
                            style={{ maxWidth: '440px', backgroundColor: '#E3EBF3', fontSize: '13px', border: 'none' }}
                        />
                        <button
                            type="submit"
                            className="btn"
                            aria-label="Search"
                            style={{
                                backgroundColor: 'white',
                                border: 'none',
                                marginLeft: '-8px',
                                cursor: 'pointer',
                            }}
                        >
                            <FaSearch />
                        </button>
                    </div>
                </form>

                {/* Greeting and Date (Visible on larger devices) */}
                <div className="text-end d-none d-md-flex flex-column pe-5" style={{ flexShrink: 0 }}>
                    <p className="mb-0 fw-bold" style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>
                        {greeting} {icon}
                    </p>
                    <small style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                        {currentTime}
                    </small>
                </div>

                {/* Hamburger Toggle Button for Small Devices (Positioned on the right) */}
                <button className="navbar-toggler d-md-none me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Offcanvas Menu */}
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <div className="text-start">
                            <p className="mb-0 fw-bold fs-5" style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>
                                {greeting} {icon}
                            </p>
                            <small style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                {currentTime}
                            </small>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column justify-content-between">
                        {/* Search Form */}
                        <form className="d-flex mb-3" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search Medicine here"
                                aria-label="Search"
                                style={{ backgroundColor: '#E3EBF3', fontSize: '13px', border: 'none' }}
                            />
                            <button
                                type="submit"
                                className="btn"
                                aria-label="Search"
                                style={{
                                    backgroundColor: 'white',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                <FaSearch />
                            </button>
                        </form>

                        {/* Nav Links */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Inventory
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">List of items</a></li>
                                    <li><a className="dropdown-item" href="#">Types</a></li>
                                    <li><a className="dropdown-item" href="#">Category</a></li>
                                </ul>
                            </li>

                            {/* Other nav items */}
                            <li className="nav-item">
                                <a className="nav-link" href="#">User Logs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Setting</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Notification</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Branches</a>
                            </li>
                        </ul>

                        {/* Profile Section */}
                        <footer className="mt-auto" style={{ padding: '25px 40px 30px', borderTop: '1px solid #ddd' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 'normal' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={GenericAvatar} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                    <div style={{ marginLeft: '16px', textAlign: 'left' }}>
                                        <h5 className="fw-medium" style={{ color: '#333', margin: 0, fontSize: '17px' }}>Janeth</h5>
                                        <p style={{ color: '#555', fontSize: '13px', marginTop: '4px', fontWeight: 'normal', margin: 0 }}>Owner</p>
                                    </div>
                                </div>
                                <div style={{ color: '#333', fontSize: '20px', cursor: 'pointer' }}>
                                    <img src={DotsMoreDark} alt="" style={{ width: '3.8px', height: '17px' }} />
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>





            </div>
        </nav>
    );
};

export default Header;
