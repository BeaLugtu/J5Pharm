import { useState } from 'react'; // <-- Add this line
import { Routes, Route } from 'react-router-dom'; // Other imports...
import Header from './Header';
import Sidebar from './Sidebar';
import OverviewHomeDashboard from './Content/HomeDashboardContent/OverviewHomeDashboard';
import OverviewInventory from './Content/InventoryContent/OverviewInventory';
import OverviewPharmacy from './Content/PharmacyContent/OverviewPharmacy';
import OverviewReport from './Content/ReportsContent/OverviewReport';
import OverviewEmployeeStaff from './Content/EmployeeStaffContent/OverviewEmployeeStaff';
import OverviewCustomerInfo from './Content/CustomerInfoContent/OverviewCustomerInfo';
import OverviewUserLogs from './Content/UserLogsContent/OverviewUserLogs';
import OverviewSettings from './Content/SettingsContent/OverviewSettings';
import OverviewNotification from './Content/NotificationContent/OverviewNotification';
import OverviewBranches from './Content/BranchesContent/OverviewBranches';

const MainDashboard = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <div className="main-container">
            {/* Sidebar and header */}
            <Header sidebarCollapsed={sidebarCollapsed} />
            <Sidebar
                sidebarCollapsed={sidebarCollapsed}
                toggleSidebar={toggleSidebar}
            />
            <div className="content-area" style={{
                marginLeft: sidebarCollapsed ? '286px' : '0px', // If sidebar is collapsed, no margin, else take the full sidebar width
                transition: 'margin-left 0.3s ease',  // Smooth transition when toggling sidebar
            }}>
                {/* Nested Routes */}
                <Routes>
                    <Route path="/overviewHomeDashboard" element={<OverviewHomeDashboard />} />
                    <Route path="/overviewInventory" element={<OverviewInventory />} />
                    <Route path="/overviewPharmacy" element={<OverviewPharmacy />} />
                    <Route path="/overviewReport" element={<OverviewReport />} />
                    <Route path="/overviewEmployeeStaff" element={<OverviewEmployeeStaff />} />
                    <Route path="/overviewCustomerInfo" element={<OverviewCustomerInfo />} />
                    <Route path="/overviewUserLogs" element={<OverviewUserLogs />} />
                    <Route path="/overviewSettings" element={<OverviewSettings />} />
                    <Route path="/overviewNotification" element={<OverviewNotification />} />
                    <Route path="/overviewBranches" element={<OverviewBranches />} />
                </Routes>
            </div>
        </div>
    );
};

export default MainDashboard;
