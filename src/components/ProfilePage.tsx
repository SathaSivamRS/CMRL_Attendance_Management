import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, Building2, Calendar, LogOut } from 'lucide-react';
import { useAuth } from './AuthContext';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-4 px-6 flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-white">Profile</h1>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Profile Photo Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">{user?.name}</h2>
          <p className="text-gray-600 mt-1">Intern</p>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <User className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium text-gray-900">{user?.name}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-medium text-gray-900">+91 {user?.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Building2 className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-500">College</p>
                <p className="font-medium text-gray-900">{user?.college || 'Delhi University'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Internship Details */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Internship Details</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Start Date</p>
                <p className="font-medium text-gray-900">
                  {user?.internshipStart ? new Date(user.internshipStart).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : '1 January 2025'}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-500">End Date</p>
                <p className="font-medium text-gray-900">
                  {user?.internshipEnd ? new Date(user.internshipEnd).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : '30 June 2025'}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Building2 className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="font-medium text-gray-900">Metro Operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-red-700 transition-colors shadow-lg"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
