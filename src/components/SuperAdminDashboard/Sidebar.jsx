import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GenericAvatar from '../../assets/GenericAvatar.png';
import DotsMore from '../../assets/dotsMore.png';
import DashboardIcon from '../../assets/DashboardIcon.png';
import DropdownIcon from '../../assets/dropdownIcon.png';
import InventoryIcon from '../../assets/InventoryIcon.png';
import PharmacyOperationIcon from '../../assets/PharmacyOperationIcon.png'
import ReportsIcon from '../../assets/ReportsIcon.png'
import EmployeeStaffIcon from '../../assets/EmployeeStaffIcon.png'
import CustomerInfo from '../../assets/CustomerInfo.png'
import UserLogsIcon from '../../assets/UserLogsIcon.png'
import SettingsIcon from '../../assets/SettingsIcon.png'
import NotificationsIcon from '../../assets/NotificationsIcon.png'
import BranchesIcon from '../../assets/BranchesIcon.png'
import ListItemsIcon from '../../assets/ListItemsIcon.png'
import TypesIcon from '../../assets/TypesIcon.png'
import CategoryIcon from '../../assets/CategoryIcon.png'
import CollapseNavbar from '../../assets/CollapseNavbar.png'

const Sidebar = () => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [selectedLink, setSelectedLink] = useState(null); // Track selected link
    const [expandedSections, setExpandedSections] = useState({}); // Track expanded sections
    const [isCollapsed, setIsCollapsed] = useState(false);


    useEffect(() => {
        const header = document.querySelector('nav.navbar');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="font-all d-flex" style={{ backgroundColor: '#FCFCFC', height: '100vh', overflow: 'hidden' }}>


            {/* Sidebar */}
            <div
                style={{
                    width: '286px',
                    backgroundColor: '#224E39',
                    paddingTop: '15px',
                    position: 'fixed',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#f5f5f5',
                    position: 'relative'
                }}
            >
                {/* Collapsed Navbar*/}
                <div className="child-container"
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                        bottom: '114px', // Moved to bottom
                        right: '-22px',  // Moved to right
                        width: '22px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        paddingRight: '5px',
                        borderTopLeftRadius: '0px', // Corrected property name
                        borderTopRightRadius: '50px', // Corrected property name
                        borderBottomLeftRadius: '0px', // Corrected property name
                        borderBottomRightRadius: '50px', // Corrected property name
                        backgroundColor: '#455162', // Kept the color as per your previous code
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added shadow for a design effect
                    }}>


                    <img src={CollapseNavbar} alt="" style={{ width: '8px', height: '7.71px', transform: 'rotate(180deg)' }} />
                </div>

                {/* Profile Section */}
                <div style={{ paddingBottom: '30px', paddingLeft: '40px', paddingTop: '25px', paddingRight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 'normal' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={GenericAvatar} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        <div style={{ marginLeft: '16px', textAlign: 'left' }}>
                            <h5 className="fw-medium" style={{ color: '#f5f5f5', margin: 0, fontSize: '17px' }}>Janeth</h5>
                            <p style={{ color: '#FED600', fontSize: '13px', marginTop: '4px', fontWeight: 'normal', margin: 0 }}>Owner</p>
                        </div>
                    </div>
                    <div style={{ color: '#f5f5f5', fontSize: '20px', cursor: 'pointer' }}>
                        <img src={DotsMore} alt="" style={{ width: '3.8px', height: '17px' }} />
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-grow-1" style={{ overflowY: 'auto', height: '100%', scrollbarWidth: 'thin' }}>
                    <ul className="nav flex-column">
                        {/* Dashboard Link */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <Link
                                className="nav-link text-white"
                                style={{
                                    backgroundColor: selectedLink === 'dashboard' ? '#009917' : '',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '31px'
                                }}
                                onClick={() => setSelectedLink('dashboard')} // Set active link
                            >
                                <img src={DashboardIcon} alt="Dashboard Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                Dashboard
                            </Link>
                        </li>

                        {/* Inventory Section */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <div
                                onClick={() => {
                                    setSelectedLink('inventory'); // Set active link
                                    toggleSection('inventory'); // Toggle the dropdown section
                                }}
                                className="nav-link"
                                style={{
                                    backgroundColor: selectedLink === 'inventory' ? '#009917' : '',
                                    color: '#f5f5f5',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '31px'
                                }}
                            >
                                <img src={InventoryIcon} alt="Inventory Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                Inventory
                                <span style={{ marginLeft: 'auto', transition: 'transform 0.3s', transform: expandedSections.inventory ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    <img src={DropdownIcon} alt="" style={{ width: '8px', height: '5px' }} />
                                </span>
                            </div>
                            {expandedSections.inventory && (
                                <ul className="nav flex-column" style={{ backgroundColor: selectedLink === 'inventoryList' ? '#009917' : '#183E2C' }}>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            style={{
                                                backgroundColor: selectedLink === 'inventoryList' ? '#009917' : '',
                                                color: '#f5f5f5',
                                                fontWeight: 'normal',
                                                display: 'flex',
                                                alignItems: 'center',
                                                height: '46px',
                                            }}
                                            onClick={() => setSelectedLink('inventoryList')} // Set active link
                                        >
                                            <img src={ListItemsIcon} alt="Inventory Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                            List of Items
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            style={{
                                                backgroundColor: selectedLink === 'inventoryTypes' ? '#009917' : '',
                                                color: '#f5f5f5',
                                                fontWeight: 'normal',
                                                display: 'flex',
                                                alignItems: 'center',
                                                height: '46px',
                                            }}
                                            onClick={() => setSelectedLink('inventoryTypes')} // Set active link
                                        >
                                            <img src={TypesIcon} alt="Inventory Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                            Types
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            style={{
                                                backgroundColor: selectedLink === 'inventoryCategory' ? '#009917' : '',
                                                color: '#f5f5f5',
                                                fontWeight: 'normal',
                                                display: 'flex',
                                                alignItems: 'center',
                                                height: '46px',
                                            }}
                                            onClick={() => setSelectedLink('inventoryCategory')} // Set active link
                                        >
                                            <img src={CategoryIcon} alt="Inventory Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                            Category
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Pharmacy Section */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <div
                                onClick={() => {
                                    setSelectedLink('pharmacy'); // Set active link
                                    toggleSection('pharmacy'); // Toggle the dropdown section
                                }}
                                className="nav-link"
                                style={{
                                    backgroundColor: selectedLink === 'pharmacy' ? '#009917' : '',
                                    color: '#f5f5f5',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '31px'
                                }}
                            >
                                <img src={PharmacyOperationIcon} alt="Pharmacy Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                Pharmacy
                                <span style={{ marginLeft: 'auto', transition: 'transform 0.3s', transform: expandedSections.pharmacy ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    <img src={DropdownIcon} alt="" style={{ width: '8px', height: '5px' }} />
                                </span>
                            </div>
                            {expandedSections.pharmacy && (
                                <ul className="nav flex-column" style={{ backgroundColor: selectedLink === 'pharmacyPending' ? '#009917' : '#183E2C' }}>
                                    {/* Pending dropdowns - Commented for now */}
                                </ul>
                            )}
                        </li>

                        {/* Reports Section */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <div
                                onClick={() => {
                                    setSelectedLink('reports'); // Set active link
                                    toggleSection('reports'); // Toggle the dropdown section
                                }}
                                className="nav-link"
                                style={{
                                    backgroundColor: selectedLink === 'reports' ? '#009917' : '',
                                    color: '#f5f5f5',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '31px'
                                }}
                            >
                                <img src={ReportsIcon} alt="Reports Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                Reports
                                <span style={{ marginLeft: 'auto', transition: 'transform 0.3s', transform: expandedSections.reports ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    <img src={DropdownIcon} alt="" style={{ width: '8px', height: '5px' }} />
                                </span>
                            </div>
                            {expandedSections.reports && (
                                <ul className="nav flex-column" style={{ backgroundColor: selectedLink === 'reportsPending' ? '#009917' : '#183E2C' }}>
                                    {/* Pending dropdowns - Commented for now */}
                                </ul>
                            )}
                        </li>

                        {/* Line between Employee & Staff and User Logs */}
                        <hr style={{ borderTop: '1px solid #FFFFFF', margin: '20px 0' }} />


                        {/* Employee & Staff Section */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <div
                                onClick={() => {
                                    setSelectedLink('employeeStaff'); // Set active link
                                    toggleSection('employeeStaff'); // Toggle the dropdown section
                                }}
                                className="nav-link"
                                style={{
                                    backgroundColor: selectedLink === 'employeeStaff' ? '#009917' : '',
                                    color: '#f5f5f5',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '31px'
                                }}
                            >
                                <img src={EmployeeStaffIcon} alt="Employee Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                Employee & Staff
                                <span style={{ marginLeft: 'auto', transition: 'transform 0.3s', transform: expandedSections.employeeStaff ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    <img src={DropdownIcon} alt="" style={{ width: '8px', height: '5px' }} />
                                </span>
                            </div>
                            {expandedSections.employeeStaff && (
                                <ul className="nav flex-column" style={{ backgroundColor: selectedLink === 'employeePending' ? '#009917' : '#183E2C' }}>
                                    {/* Pending dropdowns - Commented for now */}
                                </ul>
                            )}
                        </li>

                        {/* Customer Info Section */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <div
                                onClick={() => {
                                    setSelectedLink('customerInfo'); // Set active link
                                    toggleSection('customerInfo'); // Toggle the dropdown section
                                }}
                                className="nav-link"
                                style={{
                                    backgroundColor: selectedLink === 'customerInfo' ? '#009917' : '',
                                    color: '#f5f5f5',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '31px'
                                }}
                            >
                                <img src={CustomerInfo} alt="Customer Info Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                Customer Info
                                <span style={{ marginLeft: 'auto', transition: 'transform 0.3s', transform: expandedSections.customerInfo ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    <img src={DropdownIcon} alt="" style={{ width: '8px', height: '5px' }} />
                                </span>
                            </div>
                            {expandedSections.customerInfo && (
                                <ul className="nav flex-column" style={{ backgroundColor: selectedLink === 'customerPending' ? '#009917' : '#183E2C' }}>
                                    {/* Pending dropdowns - Commented for now */}
                                </ul>
                            )}
                        </li>

                        {/* User Logs Section */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <Link
                                className="nav-link text-white"
                                style={{
                                    backgroundColor: selectedLink === 'userLogs' ? '#009917' : '',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '31px'
                                }}
                                onClick={() => setSelectedLink('userLogs')} // Set active link
                            >
                                <img src={UserLogsIcon} alt="Dashboard Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                User Logs
                            </Link>
                        </li>

                        {/* Line between Employee & Staff and User Logs */}
                        <hr style={{ borderTop: '1px solid #FFFFFF', margin: '20px 0' }} />


                        {/* Settings Section */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <Link
                                className="nav-link text-white"
                                style={{
                                    backgroundColor: selectedLink === 'settings' ? '#009917' : '',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '31px'
                                }}
                                onClick={() => setSelectedLink('settings')} // Set active link
                            >
                                <img src={SettingsIcon} alt="Dashboard Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                Settings
                            </Link>
                        </li>

                        {/* Notifications Section */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <Link
                                className="nav-link text-white"
                                style={{
                                    backgroundColor: selectedLink === 'notifications' ? '#009917' : '',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '31px'
                                }}
                                onClick={() => setSelectedLink('notifications')} // Set active link
                            >
                                <img src={NotificationsIcon} alt="Dashboard Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                Notifications
                            </Link>
                        </li>
                        {/* Branches Section */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <Link
                                className="nav-link text-white"
                                style={{
                                    backgroundColor: selectedLink === 'branches' ? '#009917' : '',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '31px'
                                }}
                                onClick={() => setSelectedLink('branches')} // Set active link
                            >
                                <img src={BranchesIcon} alt="Dashboard Icon" style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                                Branches
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Footer */}
                <footer style={{
                    height: '135px',
                    backgroundColor: '#183E2C',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: '40px'
                }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
                        <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>J’5 Pharmacy © 2024</p>
                        <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>v1.0</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Sidebar;
