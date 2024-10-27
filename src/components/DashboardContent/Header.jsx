import React, { useEffect, useState } from 'react';
import headerLogo from '../../assets/headerLogo.png';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import { FaSun, FaMoon, FaCloudSun } from 'react-icons/fa'; // Import icons

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
        const intervalId = setInterval(updateGreetingAndIcon, 60000); // Update every minute

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <nav className="navbar font-all" style={{ backgroundColor: '#F7FAFD', width: '100%', padding: '0', borderBottom: '2px solid rgba(29, 36, 46, 0.3)' }}>
            <div className="container-fluid d-flex justify-content-between align-items-center" style={{ paddingLeft: '0', paddingRight: '0' }}>

                {/* Logo */}
                <div style={{ paddingLeft: '12px', backgroundColor: 'white', flexShrink: 0, width: '226px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a className="navbar-brand mb-0" href="#">
                        <img
                            src={headerLogo}
                            alt="J5 Pharmacy Logo"
                            style={{ width: '100%', maxWidth: '162px', height: 'auto' }}
                        />
                    </a>
                </div>

                {/* Search Bar */}
                <form className="d-flex flex-grow-1 pe-2 ps-4" role="search">
                    <div className="input-group">
                        <input
                            className="form-control me-2 d-none d-md-block"
                            type="search"
                            placeholder="Search Medicine here"
                            aria-label="Search"
                            style={{ maxWidth: '440px', backgroundColor: '#E3EBF3', fontSize: '13px', border: 'none' }}
                        />
                        <button
                            type="submit"
                            className="btn d-none d-md-block" // Added class for hover effect
                            aria-label="Search"
                            style={{
                                backgroundColor: 'white',
                                border: 'none',
                                marginLeft: '-8px',
                                cursor: 'pointer', // Ensures it remains a pointer on hover
                            }}
                        >
                            <FaSearch className='search-btn' />
                        </button>

                        {/* Search icon button on smaller screens */}
                        <button
                            type="button"
                            className="btn d-md-none ms-auto" // Added class for hover effect
                            aria-label="Search"
                            style={{
                                marginLeft: 'auto',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer', // Ensures it remains a pointer on hover
                            }}
                        >
                            <FaSearch className='search-btn' />
                        </button>

                    </div>
                </form>

                {/* Greeting and Date */}
                <div className="text-end d-flex flex-column pe-5" style={{ flexShrink: 0 }}>
                    <p className="mb-0 fw-bold" style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>
                        {greeting} {icon}
                    </p>
                    <small style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                        {currentTime}
                    </small>
                </div>
            </div>
        </nav>
    );
};

export default Header;
