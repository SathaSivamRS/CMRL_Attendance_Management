import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, CheckCircle } from 'lucide-react';

export default function MarkInScreen() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const currentTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      navigate('/intern/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 py-4 px-6 flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-white">Mark IN</h1>
      </div>

      <div className="px-6 py-8 space-y-6">
        {!confirmed ? (
          <>
            {/* Time Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Current Time</h2>
              <p className="text-4xl font-bold text-green-600">{currentTime}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Detected Location</h3>
                  <p className="text-sm text-gray-600 mt-1">Metro Office, Sector 29, Noida</p>
                  <p className="text-xs text-green-600 mt-1">Within office radius ✓</p>
                </div>
              </div>

              {/* Map Preview */}
              <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Map Preview</p>
                  <p className="text-xs text-gray-500">Your current location</p>
                </div>
              </div>
            </div>

            {/* Confirm Button */}
            <button
              onClick={handleConfirm}
              className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              Confirm IN
            </button>
          </>
        ) : (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Marked IN Successfully!</h2>
            <p className="text-gray-600">Time: {currentTime}</p>
            <p className="text-sm text-gray-500 mt-4">Redirecting to dashboard...</p>
          </div>
        )}
      </div>
    </div>
  );
}
