import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, CheckCircle } from 'lucide-react';
import cmrlLogo from '../assets/cmrl.png';
import './css/MarkOutScreen.css';

export default function MarkOutScreen() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);

  const now = new Date();

  const currentTime = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const currentDate = now.toLocaleDateString('en-GB');

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => navigate('/intern/dashboard'), 2000);
  };

  return (
    <div className="markout-page">
      <img src={cmrlLogo} alt="CMRL" className="watermark-logo" />

      <header className="markout-header">
        <div className="header-left">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={20} />
          </button>
          <img src={cmrlLogo} alt="CMRL Logo" className="header-logo" />
          <h1>Mark OUT</h1>
        </div>
      </header>

      <div className="markout-container">
        {!confirmed ? (
          <>
            <div className="glass-card">

              {/* Time */}
              <div className="time-block">
                <div className="time-icon">
                  <Clock size={28} />
                </div>
                <div className="time-inline">
                  <p><span className="label">Current Time :</span> {currentTime}</p>
                  <p><span className="label">Date :</span> {currentDate}</p>
                </div>
              </div>

              <div className="divider" />

              {/* Location */}
              <div className="location-section">
                <div className="location-title">
                  <MapPin size={18} />
                  <h3>Detected Location</h3>
                </div>
                <p>Metro Office, Sector 29, Noida</p>
                <span className="status-ok">Within office radius ✓</span>
              </div>

              {/* Map */}
              <div className="map-preview">
                <MapPin size={36} />
                <p>Map Preview</p>
                <span>Your current location</span>
              </div>

            </div>

            <button className="primary-btn" onClick={handleConfirm}>
              Confirm OUT
            </button>
          </>
        ) : (
          <div className="glass-card success-card">
            <div className="icon-circle success">
              <CheckCircle size={40} />
            </div>
            <h2>Marked OUT Successfully!</h2>
            <p className="time-value small">Time: {currentTime}</p>
          </div>
        )}
      </div>
    </div>
  );
}
