import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Filter, CheckCircle, XCircle, Clock } from 'lucide-react';

const mockHistory = [
  { date: '2025-01-29', inTime: '09:15 AM', outTime: '05:30 PM', status: 'Present' },
  { date: '2025-01-28', inTime: '09:10 AM', outTime: '05:25 PM', status: 'Present' },
  { date: '2025-01-27', inTime: '09:20 AM', outTime: '05:35 PM', status: 'Present' },
  { date: '2025-01-24', inTime: '-', outTime: '-', status: 'Absent' },
  { date: '2025-01-23', inTime: '09:05 AM', outTime: '05:20 PM', status: 'Present' },
  { date: '2025-01-22', inTime: '09:25 AM', outTime: '05:40 PM', status: 'Present' },
  { date: '2025-01-21', inTime: '09:30 AM', outTime: '05:15 PM', status: 'Present' },
  { date: '2025-01-20', inTime: '09:15 AM', outTime: '05:30 PM', status: 'Present' },
];

export default function AttendanceHistory() {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState('2025-01');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-4 px-6 flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-white">Attendance History</h1>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Filter */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">Filter by Month</span>
            </div>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="2025-01">January 2025</option>
              <option value="2024-12">December 2024</option>
              <option value="2024-11">November 2024</option>
            </select>
          </div>
        </div>

        {/* History List */}
        <div className="space-y-3">
          {mockHistory.map((record, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    record.status === 'Present' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {record.status === 'Present' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {new Date(record.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(record.date).toLocaleDateString('en-IN', { weekday: 'long' })}
                    </p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  record.status === 'Present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {record.status}
                </div>
              </div>
              
              {record.status === 'Present' && (
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">IN: {record.inTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">OUT: {record.outTime}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
