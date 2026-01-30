import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import cmrlLogo from '../assets/cmrl.png';
import './css/MarkAbsentScreen.css';

export default function MarkAbsentScreen() {
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (reason) {
      setSubmitted(true);
      setTimeout(() => navigate('/intern/dashboard'), 2000);
    }
  };

  return (
    <div className="absent-page">
      <img src={cmrlLogo} alt="CMRL" className="watermark-logo" />

      <header className="absent-header">
        <div className="header-left">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={20} />
          </button>
          <img src={cmrlLogo} alt="CMRL Logo" className="header-logo" />
          <h1>Mark Absent</h1>
        </div>
      </header>

      <div className="absent-container">
        {!submitted ? (
          <div className="glass-card">
            <div className="section-header">
              <h2>Absence Information</h2>
              <p>Please provide a reason for your absence</p>
            </div>

            <div className="form-group">
              <label>Reason for Absence *</label>
              <select value={reason} onChange={(e) => setReason(e.target.value)}>
                <option value="">Select a reason</option>
                <option value="sick">Sick Leave</option>
                <option value="leave">Personal Leave</option>
                <option value="emergency">Emergency</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Additional Notes (Optional)</label>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Provide additional details if needed..."
              />
            </div>

            <button onClick={handleSubmit} disabled={!reason} className="primary-btn">
              Submit Absence
            </button>

            <p className="info-text">
              Your absence will be recorded and sent for approval
            </p>
          </div>
        ) : (
          <div className="glass-card success-card">
            <div className="icon-circle success">
              <CheckCircle size={42} />
            </div>
            <h2>Absence Recorded!</h2>
            <p>Your absence has been submitted for approval</p>
          </div>
        )}
      </div>
    </div>
  );
}
