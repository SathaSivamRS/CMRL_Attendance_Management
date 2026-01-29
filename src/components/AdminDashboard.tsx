import { useNavigate } from 'react-router-dom';
import { Users, CheckCircle, XCircle, UserPlus, ClipboardCheck, FileText, Calendar, Settings, LogOut } from 'lucide-react';
import { useAuth } from './AuthContext';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-6 px-6 rounded-b-3xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold text-white">Admin Dashboard</h1>
            <p className="text-blue-100 mt-1">{user?.name}</p>
          </div>
          <button onClick={handleLogout} className="text-white">
            <LogOut className="w-6 h-6" />
          </button>
        </div>
        <p className="text-blue-100 text-sm">
          {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">45</div>
            <p className="text-xs text-gray-600 mt-1">Total Interns</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">38</div>
            <p className="text-xs text-gray-600 mt-1">Present Today</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">7</div>
            <p className="text-xs text-gray-600 mt-1">Absent Today</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/admin/add-intern')}
              className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-blue-100 transition-colors"
            >
              <UserPlus className="w-8 h-8 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Add Intern</span>
            </button>

            <button
              onClick={() => navigate('/admin/approval')}
              className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-green-100 transition-colors"
            >
              <ClipboardCheck className="w-8 h-8 text-green-600" />
              <span className="text-sm font-medium text-green-900">Approvals</span>
            </button>
          </div>
        </div>

        {/* Management Sections */}
        <div className="space-y-3">
          <button
            onClick={() => navigate('/admin/interns')}
            className="w-full bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-gray-900">Manage Interns</p>
              <p className="text-sm text-gray-500">View and edit intern details</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/admin/reports')}
            className="w-full bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-gray-900">Reports</p>
              <p className="text-sm text-gray-500">Generate and export reports</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/admin/holidays')}
            className="w-full bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-gray-900">Holiday Management</p>
              <p className="text-sm text-gray-500">Manage holidays and leaves</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/admin/settings')}
            className="w-full bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-gray-900">Settings</p>
              <p className="text-sm text-gray-500">Configure system settings</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
