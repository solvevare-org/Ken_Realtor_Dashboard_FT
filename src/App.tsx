import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Properties from './components/Properties';
import Clients from './components/Clients';
import Analytics from './components/Analytics';
import Leads from './components/Leads';
import Tasks from './components/Tasks';
import Documents from './components/Documents';
import Marketing from './components/Marketing';
import Calendar from './components/Calendar';
import FollowupTemplating from './components/FollowupTemplating';
import Followup from './components/Followup';
import LeadForm from './components/LeadForm';
import LeadFormTemplating from './components/LeadFormTemplating';
import Notifications from './components/Notifications';
import Messaging from './components/Messaging';
import { Property, Client } from './types';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'properties':
        return <Properties />;
      case 'clients':
        return <Clients />;
      case 'analytics':
        return <Analytics />;
      case 'leads':
        return <Leads />;
      case 'tasks':
        return <Tasks />;
      case 'documents':
        return <Documents />;
      case 'marketing':
        return <Marketing />;
      case 'calendar':
        return <Calendar />;
      case 'followup-templating':
        return <FollowupTemplating />;
      case 'followup':
        return <Followup />;
      case 'leadform':
        return <LeadForm />;
      case 'leadform-templating':
        return <LeadFormTemplating />;
      case 'notifications':
        return <Notifications onNavigate={setActiveSection} />;
      case 'messaging':
        return <Messaging />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="lg:ml-64">
        {/* Mobile header */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">R</span>
            </div>
            <span className="font-semibold text-gray-900">RealtyPro</span>
          </div>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;