import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Clock } from 'lucide-react';

const mockInterns = [
  { id: 1, name: 'Rahul Singh', inTime: '09:15 AM', outTime: '05:30 PM', status: 'pending' },
  { id: 2, name: 'Priya Sharma', inTime: '09:10 AM', outTime: '05:25 PM', status: 'pending' },
  { id: 3, name: 'Amit Kumar', inTime: '09:25 AM', outTime: '-', status: 'pending' },
  { id: 4, name: 'Neha Gupta', inTime: '-', outTime: '-', status: 'absent-request' },
  { id: 5, name: 'Vikram Patel', inTime: '09:05 AM', outTime: '05:20 PM', status: 'pending' },
];

export default function AttendanceApproval() {
  const navigate = useNavigate();
  const [interns, setInterns] = useState(mockInterns);

  const handleApprove = (id: number) => {
    setInterns(interns.filter(intern => intern.id !== id));
    alert('Attendance approved');
  };

  const handleReject = (id: number) => {
    setInterns(interns.filter(intern => intern.id !== id));
    alert('Marked as absent');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-4 px-6 flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-white">Attendance Approval</h1>
      </div>

      <div className="px-6 py-6 space-y-3">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-900">
            <strong>{interns.length}</strong> attendance records pending approval
          </p>
        </div>

        {interns.map((intern) => (
          <div key={intern.id} className="bg-white rounded-xl shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">{intern.name}</h3>
              {intern.status === 'absent-request' && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                  Absence Request
                </span>
              )}
            </div>

            {intern.status !== 'absent-request' ? (
              <div className="flex items-center space-x-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="text-gray-600">IN: {intern.inTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-600">OUT: {intern.outTime}</span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-600 mb-4">Reason: Sick Leave</p>
            )}

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleApprove(intern.id)}
                className="bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Approve</span>
              </button>
              <button
                onClick={() => handleReject(intern.id)}
                className="bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
              >
                <XCircle className="w-4 h-4" />
                <span>Reject</span>
              </button>
            </div>
          </div>
        ))}

        {interns.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">All Caught Up!</h3>
            <p className="text-gray-600">No pending approvals at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
}
