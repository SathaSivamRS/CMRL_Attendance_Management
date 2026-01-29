import { useNavigate } from 'react-router-dom';
import { LogIn, LogOut, XCircle, Calendar, TrendingUp, User, FileText, BarChart3 } from 'lucide-react';
import { useAuth } from './AuthContext';

export default function InternDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const attendancePercentage = 87;
  const status =
    attendancePercentage >= 80 ? 'Safe' :
    attendancePercentage >= 70 ? 'Warning' : 'Critical';

  const statusColor =
    status === 'Safe'
      ? 'text-green-600 bg-green-100'
      : status === 'Warning'
      ? 'text-yellow-600 bg-yellow-100'
      : 'text-red-600 bg-red-100';

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-blue-600 py-6 px-6 rounded-b-3xl shadow-md">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-semibold text-white">Welcome,</h1>
            <p className="text-xl text-white mt-1">{user?.name}</p>
          </div>
          <button onClick={() => navigate('/intern/profile')} className="text-white">
            <User className="w-6 h-6" />
          </button>
        </div>
        <p className="text-blue-100 text-sm">{today}</p>
      </div>

      <div className="px-6 py-6 space-y-4">

        {/* Today's Attendance */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Today's Attendance</h3>
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-700">Not Marked</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => navigate('/intern/mark-in')}
            className="bg-green-600 text-white rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:bg-green-700 transition-colors shadow-md"
          >
            <LogIn className="w-8 h-8" />
            <span className="text-sm font-medium">Mark IN</span>
          </button>

          <button
            onClick={() => navigate('/intern/mark-out')}
            className="bg-blue-600 text-white rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:bg-blue-700 transition-colors shadow-md"
          >
            <LogOut className="w-8 h-8" />
            <span className="text-sm font-medium">Mark OUT</span>
          </button>

          <button
            onClick={() => navigate('/intern/mark-absent')}
            className="bg-red-600 text-white rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:bg-red-700 transition-colors shadow-md"
          >
            <XCircle className="w-8 h-8" />
            <span className="text-sm font-medium">Mark Absent</span>
          </button>
        </div>

        {/* 🔥 Clickable Attendance Summary */}
        <div
          onClick={() => navigate('/intern/history')}
          className="bg-white rounded-2xl shadow-md p-5 cursor-pointer hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Attendance Summary
            </h3>
            <span className="text-xs text-blue-600 font-medium">View Details →</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-4xl font-bold text-blue-600">
                {attendancePercentage}%
              </div>
              <p className="text-sm text-gray-600 mt-1">Overall Attendance</p>
            </div>
            <div className={`px-4 py-2 rounded-full ${statusColor} font-medium`}>
              {status}
            </div>
          </div>

          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${
                status === 'Safe'
                  ? 'bg-green-600'
                  : status === 'Warning'
                  ? 'bg-yellow-600'
                  : 'bg-red-600'
              }`}
              style={{ width: `${attendancePercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/intern/history')}
            className="bg-white rounded-xl p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors shadow-md"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">History</p>
              <p className="text-xs text-gray-500">View records</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/intern/summary')}
            className="bg-white rounded-xl p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors shadow-md"
          >
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Summary</p>
              <p className="text-xs text-gray-500">View stats</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/intern/download')}
            className="bg-white rounded-xl p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors shadow-md"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Reports</p>
              <p className="text-xs text-gray-500">Download</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/intern/profile')}
            className="bg-white rounded-xl p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors shadow-md"
          >
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Profile</p>
              <p className="text-xs text-gray-500">View details</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
