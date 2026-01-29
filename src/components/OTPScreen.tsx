import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { useAuth } from './AuthContext';

export default function OTPScreen() {
  const navigate = useNavigate();
  const { phoneNumber, login } = useAuth();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      // Mock login - in real app, verify with backend
      if (phoneNumber.startsWith('9')) {
        login({
          id: '1',
          name: 'Rahul Kumar',
          phone: phoneNumber,
          role: 'admin'
        });
        navigate('/admin/dashboard');
      } else {
        login({
          id: '2',
          name: 'Priya Sharma',
          phone: phoneNumber,
          role: 'intern',
          college: 'Delhi University',
          internshipStart: '2025-01-01',
          internshipEnd: '2025-06-30'
        });
        navigate('/intern/dashboard');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-4 px-6">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="px-6 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6 max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
            Verify OTP
          </h2>
          <p className="text-sm text-gray-600 text-center mb-8">
            Enter the 6-digit code sent to<br />
            <span className="font-medium text-gray-900">+91 {phoneNumber}</span>
          </p>

          <div className="flex justify-center space-x-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="tel"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              />
            ))}
          </div>

          <button
            onClick={handleVerify}
            disabled={otp.join('').length !== 6}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Verify OTP
          </button>

          <button className="w-full text-blue-600 text-sm font-medium mt-4">
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
}
