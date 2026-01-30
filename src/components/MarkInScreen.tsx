import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, CheckCircle } from 'lucide-react';
import cmrlLogo from '../assets/cmrl.png';
import './css/MarkInScreen.css';

export default function MarkInScreen() {
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
    <div className="markin-page">
      <img src={cmrlLogo} alt="CMRL" className="watermark-logo" />

      <header className="markin-header">
        <div className="header-left">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={22} />
          </button>
          <img src={cmrlLogo} alt="CMRL Logo" className="header-logo" />
          <h1>Mark IN</h1>
        </div>
      </header>

      <div className="markin-container">
        {!confirmed ? (
          <>
            <div className="glass-card unified-card">

              {/* COMPACT TIME SECTION */}
              <div className="time-block">
                <div className="time-icon">
                  <Clock size={30} />
                </div>

                <div className="time-inline">
                  <p><span className="label">Current Time :</span> {currentTime}</p>
                  <p><span className="label">Date :</span> {currentDate}</p>
                </div>
              </div>

              <div className="divider" />

              {/* LOCATION */}
              <div className="location-section">
                <div className="location-title">
                  <MapPin size={18} />
                  <h3>Detected Location</h3>
                </div>
                <p>Metro Office, Sector 29, Noida</p>
                <span className="status-ok">Within office radius ✓</span>
              </div>

              {/* MAP */}
              <div className="map-preview">
                <MapPin size={38} />
                <p>Map Preview</p>
                <span>Your current location</span>
              </div>
            </div>

            <button className="primary-btn" onClick={handleConfirm}>
              Confirm IN
            </button>
          </>
        ) : (
          <div className="glass-card success-card">
            <div className="icon-circle success">
              <CheckCircle size={42} />
            </div>
            <h2>Marked IN Successfully! <br /> Redirecting to the Dashboard</h2>
            <p className="time-value small">Time: {currentTime}</p>
          </div>
        )}
      </div>
    </div>
  );
}
