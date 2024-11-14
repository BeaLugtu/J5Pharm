import { useState } from 'react';
import Header from './Header'
import Sidebar from './Sidebar';

const MainDashboard = () => {

    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed)
    }

    return (
        <div>
            <Header sidebarCollapsed={sidebarCollapsed} />
            <Sidebar 
                sidebarCollapsed={sidebarCollapsed}
                toggleSidebar={toggleSidebar}
            />
        </div>
    );
};

export default MainDashboard;
