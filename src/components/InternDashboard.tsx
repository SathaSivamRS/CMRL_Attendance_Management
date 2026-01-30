import { useNavigate } from 'react-router-dom';
import {
  LogIn,
  LogOut,
  XCircle,
  Calendar,
  TrendingUp,
  User,
  FileText,
  BarChart3,
} from 'lucide-react';
import { useAuth } from './AuthContext';
import '../components/css/InternDashboard.css';
import cmrlLogo from '../assets/cmrl.png';

export default function InternDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const attendancePercentage = 87;

  const status =
    attendancePercentage >= 80
      ? 'Safe'
      : attendancePercentage >= 70
      ? 'Warning'
      : 'Critical';

  return (
    <div className="dashboard-container">
      {/* Watermark */}
      <img src={cmrlLogo} className="watermark-logo" alt="watermark" />

      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <img src={cmrlLogo} alt="CMRL" className="header-logo" />
          <h1 className="header-title">Intern Dashboard</h1>
        </div>

        <div className="header-right">
          <div className="header-user-info">
            <span className="welcome-text">Welcome, {user?.name}</span>
            <span className="header-date">{today}</span>
          </div>

          <button
            className="profile-btn"
            onClick={() => navigate('/intern/profile')}
          >
            <User size={22} />
          </button>
        </div>
      </header>

      <div className="dashboard-content">
        {/* 🔥 SIDE-BY-SIDE TOP CARDS */}
        <div className="top-cards-row">
          {/* Today's Attendance */}
          <div className="glass-card hero-card">
            <div className="card-header">
              <h3>Today's Attendance</h3>
              <Calendar size={20} />
            </div>
            <div className="status-row">
              <span className="dot"></span>
              <span>Not Marked</span>
            </div>
          </div>

          {/* Attendance Summary */}
          <div className="glass-card hero-card">
            <div className="card-header">
              <h3>Attendance Summary</h3>
              <TrendingUp size={20} />
            </div>

            <div className="summary-row">
              <div>
                <div className="percentage">{attendancePercentage}%</div>
                <p>Overall Attendance</p>
              </div>
              <div className={`status-badge ${status.toLowerCase()}`}>
                {status}
              </div>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${attendancePercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="action-grid">
          <button
            className="action-btn"
            onClick={() => navigate('/intern/mark-in')}
          >
            <LogIn size={30} />
            <span>Mark IN</span>
          </button>

          <button
            className="action-btn"
            onClick={() => navigate('/intern/mark-out')}
          >
            <LogOut size={30} />
            <span>Mark OUT</span>
          </button>

          <button
            className="action-btn"
            onClick={() => navigate('/intern/mark-absent')}
          >
            <XCircle size={30} />
            <span>Absent</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="links-grid">
          <button
            className="link-card"
            onClick={() => navigate('/intern/history')}
          >
            <Calendar size={22} />
            <div>
              <p>History</p>
              <span>View records</span>
            </div>
          </button>

          <button
            className="link-card"
            onClick={() => navigate('/intern/summary')}
          >
            <BarChart3 size={22} />
            <div>
              <p>Summary</p>
              <span>View stats</span>
            </div>
          </button>

          <button
            className="link-card"
            onClick={() => navigate('/intern/download')}
          >
            <FileText size={22} />
            <div>
              <p>Reports</p>
              <span>Download</span>
            </div>
          </button>

          <button
            className="link-card"
            onClick={() => navigate('/intern/profile')}
          >
            <User size={22} />
            <div>
              <p>Profile</p>
              <span>View details</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}