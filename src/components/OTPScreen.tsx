import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from './AuthContext';
import './css/OTPScreen.css';
import logo from '../assets/cmrl.png';

export default function OTPScreen() {
  const navigate = useNavigate();
  const { phoneNumber, login } = useAuth();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(0);
  const [resendMsg, setResendMsg] = useState('');

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

    if (otpValue.length !== 6) {
      setError('Enter the 6-digit OTP');
      return;
    }

    setError('');

    if (phoneNumber.startsWith('9')) {
      login({ id: '1', name: 'Admin User', phone: phoneNumber, role: 'admin' });
      navigate('/admin/dashboard');
    } else {
      login({
        id: '2',
        name: 'Intern User',
        phone: phoneNumber,
        role: 'intern',
        college: 'Sample College',
        internshipStart: '2025-01-01',
        internshipEnd: '2025-06-30'
      });
      navigate('/intern/dashboard');
    }
  };

  const handleResend = () => {
    if (timer > 0) return;

    setResendMsg('OTP resent successfully');
    setTimer(30);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) clearInterval(interval);
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="otp-page">

      <div className="cmrl-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={24} />
        </button>
        <img src={logo} alt="CMRL Logo" className="header-logo" />
        <h1>CMRL Attendance Tracker</h1>
      </div>

      <div className="otp-body">
        <div className="glass-card">

          <img src={logo} alt="CMRL Watermark" className="watermark-logo" />

          <h2 className="otp-title">Verify OTP</h2>
          <p className="otp-subtitle">
            Enter the 6-digit code sent to<br />
            <strong>+91 {phoneNumber}</strong>
          </p>

          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="tel"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="otp-box"
              />
            ))}
          </div>

          {error && <p className="error-text">{error}</p>}

          <button onClick={handleVerify} className="cmrl-btn">
            Verify OTP
          </button>

          <button
            className="resend-btn"
            onClick={handleResend}
            disabled={timer > 0}
          >
            {timer > 0 ? `Resend OTP in ${timer}s` : 'Resend OTP'}
          </button>

          {resendMsg && <p className="success-text">{resendMsg}</p>}

        </div>
      </div>
    </div>
  );
}
