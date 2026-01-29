import { useNavigate } from 'react-router-dom';
import {
  Users, CheckCircle, XCircle, UserPlus,
  ClipboardCheck, FileText, Calendar,
  Settings, LogOut
} from 'lucide-react';
import { useAuth } from './AuthContext';
import './css/AdminDashboard.css';
import logo from '../assets/cmrl.png';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="admin-page">

      {/* 🔵 Header */}
      <div className="cmrl-header">
        <img src={logo} alt="CMRL Logo" className="header-logo" />
        <div className="header-info">
          <h1>Admin Dashboard</h1>
          <p>{user?.name}</p>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          <LogOut size={22} />
        </button>
      </div>

      <div className="admin-body">

        {/* Watermark */}
        <img src={logo} alt="CMRL Watermark" className="watermark-logo" />

        {/* 📊 Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <Users size={26} />
            <h2>45</h2>
            <p>Total Interns</p>
          </div>

          <div className="stat-card">
            <CheckCircle size={26} />
            <h2>38</h2>
            <p>Present Today</p>
          </div>

          <div className="stat-card">
            <XCircle size={26} />
            <h2>7</h2>
            <p>Absent Today</p>
          </div>
        </div>

        {/* ⚡ Quick Actions */}
        <div className="qa-section">
          <h3>Quick Actions</h3>

          <div className="qa-grid">
            <button
              onClick={() => navigate('/admin/add-intern')}
              className="qa-card qa-blue"
            >
              <div className="qa-icon blue">
                <UserPlus size={22} />
              </div>
              <span>Add Intern</span>
            </button>

            <button
              onClick={() => navigate('/admin/approval')}
              className="qa-card qa-green"
            >
              <div className="qa-icon green">
                <ClipboardCheck size={22} />
              </div>
              <span>Approvals</span>
            </button>
          </div>
        </div>

        {/* 📁 Sections */}
        <div className="section-list">
          <button onClick={() => navigate('/admin/interns')}>
            <Users /> Manage Interns
          </button>

          <button onClick={() => navigate('/admin/reports')}>
            <FileText /> Reports
          </button>

          <button onClick={() => navigate('/admin/holidays')}>
            <Calendar /> Holiday Management
          </button>

          <button onClick={() => navigate('/admin/settings')}>
            <Settings /> Settings
          </button>
        </div>

      </div>
    </div>
  );
}
