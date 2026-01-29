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
  const [error, setError] = useState('');

  const validatePhone = (num: string) => /^[6-9]\d{9}$/.test(num);

  const handleSendOTP = () => {
    if (!phone) {
      setError('Phone number is required');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Enter a valid 10-digit mobile number');
      return;
    }

    setError('');
    setPhoneNumber(phone);
    navigate('/otp');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhone(value);
    if (error) setError('');
  };

  return (
    <div className="login-page">

      <div className="cmrl-header">
        <img src={logo} alt="CMRL Logo" className="header-logo" />
        <h1>CMRL Attendance Tracker</h1>
      </div>

      <div className="login-body">
        <div className="glass-card">

          <img src={logo} alt="CMRL Watermark" className="watermark-logo" />

          <h2 className="login-title">CMRL Attendance Tracker</h2>

          <div className="input-group">
            <label>Phone Number</label>
            <div className="input-wrapper">
              <Phone className="input-icon" size={18} />
              <input
                type="tel"
                maxLength={10}
                value={phone}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                className={error ? 'input-error' : ''}
              />
            </div>
            {error && <p className="error-text">{error}</p>}
          </div>

          <button
            onClick={handleSendOTP}
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
