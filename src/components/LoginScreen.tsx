import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useAuth } from './AuthContext';
import './css/LoginScreen.css';
import logo from '../assets/cmrl.png';

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
    <div className="login-page">

      {/* 🔵 Header */}
      <div className="cmrl-header">
        <img src={logo} alt="CMRL Logo" className="header-logo" />
        <h1>CMRL Attendance Tracker</h1>
      </div>

      {/* 🟤 Body */}
      <div className="login-body">
        <div className="glass-card">

          {/* 🔷 Watermark Logo */}
          <img src={logo} alt="CMRL Watermark" className="watermark-logo" />

          <h2 className="login-title">Intern Login</h2>

          <div className="input-group">
            <label>Phone Number</label>
            <div className="input-wrapper">
              <Phone className="input-icon" size={18} />
              <input
                type="tel"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 10-digit mobile number"
              />
            </div>
          </div>

          <button
            onClick={handleSendOTP}
            disabled={phone.length !== 10}
            className="cmrl-btn"
          >
            Send OTP
          </button>

          <p className="terms-text">
            By continuing, you agree to CMRL terms and conditions
          </p>

        </div>
      </div>
    </div>
  );
}
