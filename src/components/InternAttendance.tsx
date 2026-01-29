import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import './css/InternAttendance.css';
import logo from '../assets/cmrl.png';

export default function InternAttendance() {
  const { id } = useParams();
  const navigate = useNavigate();

  const mockHistory = [
    { date: '01 Jan 2025', status: 'Present' },
    { date: '02 Jan 2025', status: 'Absent' },
    { date: '03 Jan 2025', status: 'Present' },
    { date: '04 Jan 2025', status: 'Present' },
  ];

  return (
    <div className="attendance-page">

      {/* Header */}
      <div className="cmrl-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={22} />
        </button>
        <img src={logo} alt="CMRL Logo" className="header-logo" />
        <h1>Attendance History</h1>
      </div>

      <div className="attendance-body">
        <div className="glass-card">

          <img src={logo} alt="Watermark" className="watermark-logo" />

          <h2 className="attendance-title">
            <TrendingUp size={18} /> Intern ID: {id}
          </h2>

          <div className="history-list">
            {mockHistory.map((entry, i) => (
              <div key={i} className={`history-row ${entry.status.toLowerCase()}`}>
                <span>{entry.date}</span>
                <span>{entry.status}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
