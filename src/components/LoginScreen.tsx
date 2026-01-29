import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Train, Phone } from 'lucide-react';
import { useAuth } from './AuthContext';

export default function LoginScreen() {
  const navigate = useNavigate();
  const { setPhoneNumber } = useAuth();
  const [phone, setPhone] = useState('');

  const handleSendOTP = () => {
    if (phone.length === 10) {
      setPhoneNumber(phone);
      navigate('/otp');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-blue-600 rounded-b-3xl shadow-md">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Train className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-white text-center">Metro Internship</h1>
        <p className="text-blue-100 text-center mt-1">Attendance System</p>
      </div>

      <div className="flex-1 px-6 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6 max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Login</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 10-digit mobile number"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              onClick={handleSendOTP}
              disabled={phone.length !== 10}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Send OTP
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            By continuing, you agree to Metro's terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
}
