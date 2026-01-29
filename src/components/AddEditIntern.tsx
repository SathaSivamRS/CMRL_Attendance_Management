import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import './css/AddEditIntern.css';
import logo from '../assets/cmrl.png';

export default function AddEditIntern() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: isEdit ? 'Priya Sharma' : '',
    phone: isEdit ? '9876543210' : '',
    college: isEdit ? 'Delhi University' : '',
    startDate: isEdit ? '2025-01-01' : '',
    endDate: isEdit ? '2025-06-30' : '',
  });

  const handleSubmit = () => {
    alert(isEdit ? 'Intern updated successfully!' : 'Intern added successfully!');
    navigate('/admin/interns');
  };

  return (
    <div className="intern-page">

      {/* Header */}
      <div className="cmrl-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={22} />
        </button>
        <img src={logo} alt="CMRL Logo" className="header-logo" />
        <h1>{isEdit ? 'Edit Intern' : 'Add New Intern'}</h1>
      </div>

      <div className="intern-body">
        <div className="glass-card">

          <img src={logo} alt="CMRL Watermark" className="watermark-logo" />

          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter full name"
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              value={formData.phone}
              maxLength={10}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
              placeholder="10-digit mobile number"
            />
          </div>

          <div className="form-group">
            <label>College/University *</label>
            <input
              type="text"
              value={formData.college}
              onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              placeholder="Enter college name"
            />
          </div>

          <div className="form-group">
            <label>Internship Start Date *</label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Internship End Date *</label>
            <input
              type="date"
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            />
          </div>

          <button onClick={handleSubmit} className="cmrl-btn">
            <Save size={18} /> {isEdit ? 'Update Intern' : 'Save Intern'}
          </button>

        </div>
      </div>
    </div>
  );
}
