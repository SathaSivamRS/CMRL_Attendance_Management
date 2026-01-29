import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Edit, TrendingUp } from 'lucide-react';
import './css/InternList.css';
import logo from '../assets/cmrl.png';

const mockInterns = [
  { id: 1, name: 'Rahul Singh', college: 'IIT Delhi', attendance: 92, status: 'Safe' },
  { id: 2, name: 'Priya Sharma', college: 'Delhi University', attendance: 87, status: 'Safe' },
  { id: 3, name: 'Amit Kumar', college: 'NSUT', attendance: 76, status: 'Warning' },
  { id: 4, name: 'Neha Gupta', college: 'Jamia Millia', attendance: 95, status: 'Safe' },
  { id: 5, name: 'Vikram Patel', college: 'DTU', attendance: 65, status: 'Critical' },
  { id: 6, name: 'Anjali Verma', college: 'Delhi University', attendance: 89, status: 'Safe' },
  { id: 7, name: 'Rohan Malhotra', college: 'IIT Delhi', attendance: 78, status: 'Warning' },
  { id: 8, name: 'Pooja Reddy', college: 'IGDTUW', attendance: 91, status: 'Safe' },
];

export default function InternList() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInterns = mockInterns.filter(intern =>
    intern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    intern.college.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="internlist-page">

      {/* Header */}
      <div className="cmrl-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={22} />
        </button>
        <img src={logo} alt="CMRL Logo" className="header-logo" />
        <h1>Intern List</h1>
      </div>

      <div className="internlist-body">

        {/* Watermark */}
        <img src={logo} alt="Watermark" className="watermark-logo" />

        {/* Search */}
        <div className="search-bar">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or college..."
          />
        </div>

        {/* Stats */}
        <div className="stats-card">
          Showing <strong>{filteredInterns.length}</strong> of{' '}
          <strong>{mockInterns.length}</strong> interns
        </div>

        {/* Intern Cards */}
        <div className="intern-cards">
          {filteredInterns.map((intern) => {
            const statusClass =
              intern.status === 'Safe'
                ? 'safe'
                : intern.status === 'Warning'
                ? 'warning'
                : 'critical';

            return (
              <div key={intern.id} className="intern-card">
                <div className="card-top">
                  <div>
                    <h3>{intern.name}</h3>
                    <p>{intern.college}</p>
                  </div>

                  {/* Edit */}
                  <button
                    onClick={() => navigate(`/admin/edit-intern/${intern.id}`)}
                  >
                    <Edit size={18} />
                  </button>
                </div>

                <div className="card-bottom">
                  {/* 🔥 CLICKABLE ATTENDANCE */}
                  <button
                    className="attendance-link"
                    onClick={() =>
                      navigate(`/admin/intern-attendance/${intern.id}`)
                    }
                  >
                    <TrendingUp size={14} />
                    Attendance
                  </button>

                  <div className="right">
                    <span className="percent">{intern.attendance}%</span>
                    <span className={`status ${statusClass}`}>
                      {intern.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredInterns.length === 0 && (
          <div className="no-results">
            <Search size={50} />
            <p>No interns found</p>
          </div>
        )}
      </div>
    </div>
  );
}
