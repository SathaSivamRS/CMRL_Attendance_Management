import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function MarkAbsentScreen() {
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (reason) {
      setSubmitted(true);
      setTimeout(() => {
        navigate('/intern/dashboard');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 py-4 px-6 flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-white">Mark Absent</h1>
      </div>

      <div className="px-6 py-8">
        {!submitted ? (
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Absence Information</h2>
              <p className="text-sm text-gray-600">Please provide a reason for your absence</p>
            </div>

            {/* Reason Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Absence *
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select a reason</option>
                <option value="sick">Sick Leave</option>
                <option value="leave">Personal Leave</option>
                <option value="emergency">Emergency</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Provide additional details if needed..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!reason}
              className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-lg"
            >
              Submit Absence
            </button>

            <p className="text-xs text-gray-500 text-center">
              Your absence will be recorded and sent for approval
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Absence Recorded!</h2>
            <p className="text-gray-600">Your absence has been submitted for approval</p>
            <p className="text-sm text-gray-500 mt-4">Redirecting to dashboard...</p>
          </div>
        )}
      </div>
    </div>
  );
}
