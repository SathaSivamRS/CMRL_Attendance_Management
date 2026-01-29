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
    email: '',
    collegeId: '',
    college: isEdit ? 'Delhi University' : '',
    startDate: isEdit ? '2025-01-01' : '',
    endDate: isEdit ? '2025-06-30' : '',
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";

    if (!/^[6-9]\d{9}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10-digit mobile number";

    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter valid email address";

    if (!formData.collegeId.trim())
      newErrors.collegeId = "College ID is required";

    if (!formData.college.trim())
      newErrors.college = "College name is required";

    if (!formData.startDate) newErrors.startDate = "Start date required";

    if (!formData.endDate) newErrors.endDate = "End date required";

    if (formData.startDate && formData.endDate &&
        new Date(formData.endDate) < new Date(formData.startDate)) {
      newErrors.endDate = "End date must be after start date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    alert(isEdit ? 'Intern updated successfully!' : 'Intern added successfully!');
    navigate('/admin/interns');
  };

  return (
    <div className="intern-page">
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

          {/* Name */}
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" maxLength={10}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email ID *</label>
            <input type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          {/* College ID */}
          <div className="form-group">
            <label>College ID *</label>
            <input type="text"
              value={formData.collegeId}
              onChange={(e) => setFormData({ ...formData, collegeId: e.target.value })}
            />
            {errors.collegeId && <p className="error-text">{errors.collegeId}</p>}
          </div>

          {/* College Name */}
          <div className="form-group">
            <label>College/University *</label>
            <input type="text"
              value={formData.college}
              onChange={(e) => setFormData({ ...formData, college: e.target.value })}
            />
            {errors.college && <p className="error-text">{errors.college}</p>}
          </div>

          {/* Dates */}
          <div className="form-group">
            <label>Internship Start Date *</label>
            <input type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
            {errors.startDate && <p className="error-text">{errors.startDate}</p>}
          </div>

          <div className="form-group">
            <label>Internship End Date *</label>
            <input type="date"
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            />
            {errors.endDate && <p className="error-text">{errors.endDate}</p>}
          </div>

          <button onClick={handleSubmit} className="cmrl-btn">
            <Save size={18} /> {isEdit ? 'Update Intern' : 'Save Intern'}
          </button>

        </div>
      </div>
    </div>
  );
}
