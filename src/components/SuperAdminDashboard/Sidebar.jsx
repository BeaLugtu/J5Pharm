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

const Sidebar = ({sidebarCollapsed, toggleSidebar}) => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [selectedLink, setSelectedLink] = useState('dashboard'); // Track selected link
    const [expandedSections, setExpandedSections] = useState({
        inventory: false
    });

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
        <div className="font-all d-none d-md-block" style={{ backgroundColor: '#FFFFFF', width: '310px', height: '100vh' }}>

            {/* Sidebar */}
            <div
                id="sidebar"
                className={sidebarCollapsed ? "sidebar collapsed" : "sidebar"}
                style={{
                    width: sidebarCollapsed ? '100px' : '286px',
                    backgroundColor: '#224E39',
                    paddingTop: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#f5f5f5',
                    height: '100vh',
                    position: 'relative',
                    transition: 'width 0.3s ease',

                }}
            >
                {/* Collapsed Navbar */}
                <div
                    className="child-container"
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                        bottom: '110px',
                        right: '-22px',
                        width: '22px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        paddingRight: '5px',
                        borderRadius: '0 50px 50px 0',
                        backgroundColor: '#455162',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                    onClick={toggleSidebar} // Link the toggle function here
                >
                    <img
                        src={CollapseNavbar}
                        alt=""
                        style={{
                            width: '8px',
                            height: '7.71px',
                            transform: sidebarCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',  // Rotate back to normal when collapsed
                            transition: 'transform 0.3s ease',  // Smooth transition for rotation
                        }}
                    />
                </div>



                {/* Profile Section */}
                <div
                    style={{
                        paddingBottom: sidebarCollapsed ? '0' : '30px',
                        paddingLeft: sidebarCollapsed ? '0' : '40px',
                        paddingTop: '25px',
                        paddingRight: sidebarCollapsed ? '0' : '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: sidebarCollapsed ? 'center' : 'space-between',
                        fontWeight: 'normal'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={GenericAvatar}
                            alt="Profile"
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                            }}
                        />

                        {/* Only show these elements when sidebar is expanded */}
                        <div style={{ marginLeft: '16px', textAlign: 'left', display: sidebarCollapsed ? 'none' : 'block' }}>
                            <h5 className="fw-medium" style={{ color: '#f5f5f5', margin: 0, fontSize: '17px' }}>Janeth</h5>
                            <p style={{ color: '#FED600', fontSize: '13px', marginTop: '4px', fontWeight: 'normal', margin: 0 }}>Owner</p>
                        </div>
                    </div>

                    <div style={{ color: '#f5f5f5', fontSize: '20px', cursor: 'pointer', display: sidebarCollapsed ? 'none' : 'block' }}>
                        <img src={DotsMore} alt="" style={{ width: '3.8px', height: '17px' }} />
                    </div>
                </div>


                {/* Navigation Links */}
                <nav
                    className="flex-grow-1"
                    style={{
                        // Conditional scroll behavior based on sidebarCollapsed state
                        overflowY: sidebarCollapsed ? 'hidden' : 'auto',  // No vertical scroll in collapsed mode
                        overflowX: 'hidden',                               // No horizontal scroll
                        height: '100%',
                        scrollbarWidth: 'thin',
                        marginTop: sidebarCollapsed ? '30px' : '0px',      // Adjust margin for collapsed state
                    }}
                >
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
                                    paddingLeft: '39px',
                                    whiteSpace: 'nowrap', // Prevent text wrapping
                                }}
                                onClick={() => setSelectedLink('dashboard')}
                            >
                                <img
                                    src={DashboardIcon}
                                    alt="Dashboard Icon"
                                    style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                />
                                {/* Only show text if expanded */}
                                <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>Dashboard</span>
                                </Link>
                        </li>

                        {/* Inventory Section */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <div
                                onClick={() => {
                                    setSelectedLink('inventory');
                                    toggleSection('inventory');
                                }}
                                className="nav-link"
                                style={{
                                    backgroundColor: selectedLink === 'inventory' ? '#009917' : '',
                                    color: '#f5f5f5',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '39px'
                                }}
                            >
                                <img
                                    src={InventoryIcon}
                                    alt="Inventory Icon"
                                    style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                />
                                {/* Only show text if expanded */}
                                <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>Inventory</span>
                                <span
                                    style={{
                                        marginLeft: 'auto',
                                        transition: 'transform 0.3s',
                                        transform: expandedSections.inventory ? 'rotate(180deg)' : 'rotate(0deg)',
                                        display: sidebarCollapsed ? 'none' : 'block'  // Hide icon in collapsed mode
                                    }}
                                >
                                    <img src={DropdownIcon} alt="" style={{ width: '8px', height: '5px' }} />
                                </span>
                            </div>
                            {expandedSections.inventory && (
                                <ul
                                    className="nav flex-column"
                                    style={{ backgroundColor: selectedLink === 'inventoryList' ? '#009917' : '#183E2C' }}
                                >
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
                                                paddingLeft: '23px'
                                            }}
                                            onClick={() => setSelectedLink('inventoryList')}
                                        >
                                            <img
                                                src={ListItemsIcon}
                                                alt="Inventory Icon"
                                                style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                            />
                                            {/* Only show text if expanded */}
                                            <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>List of Items</span>
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
                                                paddingLeft: '23px'

                                            }}
                                            onClick={() => setSelectedLink('inventoryTypes')}
                                        >
                                            <img
                                                src={TypesIcon}
                                                alt="Inventory Icon"
                                                style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                            />
                                            {/* Only show text if expanded */}
                                            <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>Types</span>
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
                                                paddingLeft: '23px'
                                            }}
                                            onClick={() => setSelectedLink('inventoryCategory')}
                                        >
                                            <img
                                                src={CategoryIcon}
                                                alt="Inventory Icon"
                                                style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                            />
                                            {/* Only show text if expanded */}
                                            <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>Category</span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* Pharmacy Link */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <div
                                className="nav-link text-white"
                                style={{
                                    backgroundColor: selectedLink === 'pharmacy' ? '#009917' : '',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '39px'
                                }}
                                onClick={() => {
                                    setSelectedLink('pharmacy');
                                    toggleSection('pharmacy');
                                }}
                            >
                                <img
                                    src={PharmacyOperationIcon}
                                    alt="Pharmacy Icon"
                                    style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                />
                                {/* Only show text if expanded */}
                                <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>Pharmacy</span>
                                <span
                                    style={{
                                        marginLeft: 'auto',
                                        transition: 'transform 0.3s',
                                        transform: expandedSections.pharmacy ? 'rotate(180deg)' : 'rotate(0deg)',
                                        display: sidebarCollapsed ? 'none' : 'block'
                                    }}
                                >
                                    <img src={DropdownIcon} alt="" style={{ width: '8px', height: '5px' }} />
                                </span>
                            </div>
                            {expandedSections.pharmacy && (
                                <ul className="nav flex-column" style={{ backgroundColor: selectedLink === 'pharmacyPending' ? '#009917' : '#183E2C' }}>
                                    {/* Pending dropdowns - Commented for now */}
                                </ul>
                            )}
                        </li>

                        {/* Reports Link */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <div
                                className="nav-link text-white"
                                style={{
                                    backgroundColor: selectedLink === 'reports' ? '#009917' : '',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '39px'
                                }}
                                onClick={() => {
                                    setSelectedLink('reports');
                                    toggleSection('reports');
                                }}
                            >
                                <img
                                    src={ReportsIcon}
                                    alt="Reports Icon"
                                    style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                />
                                {/* Only show text if expanded */}
                                <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>Reports</span>
                                <span
                                    style={{
                                        marginLeft: 'auto',
                                        transition: 'transform 0.3s',
                                        transform: expandedSections.reports ? 'rotate(180deg)' : 'rotate(0deg)',
                                        display: sidebarCollapsed ? 'none' : 'block'
                                    }}
                                >
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
                                    setSelectedLink('employeeStaff');
                                    toggleSection('employeeStaff');
                                }}
                                className="nav-link"
                                style={{
                                    backgroundColor: selectedLink === 'employeeStaff' ? '#009917' : '',
                                    color: '#f5f5f5',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '39px'
                                }}
                            >
                                <img
                                    src={EmployeeStaffIcon}
                                    alt="Employee Icon"
                                    style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                />
                                {/* Only show text if expanded */}
                                <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>Employee & Staff</span>
                            </div>
                        </li>

                        {/* Customer Info Section */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <div
                                onClick={() => {
                                    setSelectedLink('customerInfo');
                                    toggleSection('customerInfo');
                                }}
                                className="nav-link"
                                style={{
                                    backgroundColor: selectedLink === 'customerInfo' ? '#009917' : '',
                                    color: '#f5f5f5',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '39px'
                                }}
                            >
                                <img
                                    src={CustomerInfo}
                                    alt="Customer Icon"
                                    style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                />
                                {/* Only show text if expanded */}
                                <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>Customer Info</span>
                            </div>
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
                                    paddingLeft: '39px'
                                }}
                                onClick={() => setSelectedLink('userLogs')}
                            >
                                <img
                                    src={UserLogsIcon}
                                    alt="User Logs Icon"
                                    style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                />
                                {/* Only show text if expanded */}
                                <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>User Logs</span>
                            </Link>
                        </li>

                        {/* Line between Employee & Staff and User Logs */}
                        <hr style={{ borderTop: '1px solid #FFFFFF', margin: '20px 0' }} />


                        {/* Settings Link */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <Link
                                className="nav-link text-white"
                                style={{
                                    backgroundColor: selectedLink === 'settings' ? '#009917' : '',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '39px'
                                }}
                                onClick={() => setSelectedLink('settings')}
                            >
                                <img
                                    src={SettingsIcon}
                                    alt="Settings Icon"
                                    style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                />
                                {/* Only show text if expanded */}
                                <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap'}}>Settings</span>
                            </Link>
                        </li>

                        {/* Notifications Link */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <Link
                                className="nav-link text-white"
                                style={{
                                    backgroundColor: selectedLink === 'notifications' ? '#009917' : '',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '39px'
                                }}
                                onClick={() => setSelectedLink('notifications')}
                            >
                                <img
                                    src={NotificationsIcon}
                                    alt="Notifications Icon"
                                    style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                />
                                {/* Only show text if expanded */}
                                <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>Notifications</span>
                            </Link>
                        </li>

                        {/* Branches Link */}
                        <li className="nav-item" style={{ padding: '0px' }}>
                            <Link
                                className="nav-link text-white"
                                style={{
                                    backgroundColor: selectedLink === 'branches' ? '#009917' : '',
                                    fontWeight: 'normal',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '46px',
                                    paddingLeft: '39px'
                                }}
                                onClick={() => setSelectedLink('branches')}
                            >
                                <img
                                    src={BranchesIcon}
                                    alt="Branches Icon"
                                    style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                />
                                {/* Only show text if expanded */}
                                <span className={sidebarCollapsed ? 'd-none' : ''} style={{ whiteSpace: 'nowrap' }}>Branches</span>
                            </Link>
                        </li>
                    </ul>
                </nav>


                {/* Footer */}
                <footer style={{
                    height: '100px',
                    backgroundColor: '#183E2C',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    paddingBottom: '50px',
                    marginTop: 'auto',
                    marginBottom: '-10px'
                }}>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: sidebarCollapsed ? 'center' : 'space-between',
                        padding: '0 20px',
                        transition: 'justify-content 0.3s ease'
                    }}>
                        {/* Only show this element when sidebar is expanded */}
                        {!sidebarCollapsed && (
                            <p style={{
                                fontSize: '12px',
                                color: 'rgba(255, 255, 255, 0.7)',
                                whiteSpace: 'nowrap', // Prevents wrapping
                            }}>
                                J’5 Pharmacy © 2024
                            </p>
                        )}

                        {/* Always show this element, centered when sidebar is collapsed */}
                        <p style={{
                            fontSize: '12px',
                            color: 'rgba(255, 255, 255, 0.7)',
                            textAlign: sidebarCollapsed ? 'center' : 'left',
                            whiteSpace: 'nowrap', // Prevents wrapping
                            transition: 'text-align 0.3s ease' // Smooth transition for alignment
                        }}>
                            v1.0
                        </p>
                    </div>
                </footer>



            </div>
        </div>
    );
};

export default Sidebar;
