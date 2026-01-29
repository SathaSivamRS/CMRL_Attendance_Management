import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import OTPScreen from './components/OTPScreen';
import InternDashboard from './components/InternDashboard';
import MarkInScreen from './components/MarkInScreen';
import MarkOutScreen from './components/MarkOutScreen';
import MarkAbsentScreen from './components/MarkAbsentScreen';
import AttendanceHistory from './components/AttendanceHistory';
import AttendanceSummary from './components/AttendanceSummary';
import DownloadReport from './components/DownloadReport';
import ProfilePage from './components/ProfilePage';
import AdminDashboard from './components/AdminDashboard';
import AddEditIntern from './components/AddEditIntern';
import AttendanceApproval from './components/AttendanceApproval';
import InternList from './components/InternList';
import ReportsPage from './components/ReportsPage';
import HolidayManagement from './components/HolidayManagement';
import SettingsPage from './components/SettingsPage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/otp" element={<OTPScreen />} />
            <Route path="/intern/dashboard" element={<ProtectedRoute><InternDashboard /></ProtectedRoute>} />
            <Route path="/intern/mark-in" element={<ProtectedRoute><MarkInScreen /></ProtectedRoute>} />
            <Route path="/intern/mark-out" element={<ProtectedRoute><MarkOutScreen /></ProtectedRoute>} />
            <Route path="/intern/mark-absent" element={<ProtectedRoute><MarkAbsentScreen /></ProtectedRoute>} />
            <Route path="/intern/history" element={<ProtectedRoute><AttendanceHistory /></ProtectedRoute>} />
            <Route path="/intern/summary" element={<ProtectedRoute><AttendanceSummary /></ProtectedRoute>} />
            <Route path="/intern/download" element={<ProtectedRoute><DownloadReport /></ProtectedRoute>} />
            <Route path="/intern/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/add-intern" element={<ProtectedRoute><AddEditIntern /></ProtectedRoute>} />
            <Route path="/admin/edit-intern/:id" element={<ProtectedRoute><AddEditIntern /></ProtectedRoute>} />
            <Route path="/admin/approval" element={<ProtectedRoute><AttendanceApproval /></ProtectedRoute>} />
            <Route path="/admin/interns" element={<ProtectedRoute><InternList /></ProtectedRoute>} />
            <Route path="/admin/reports" element={<ProtectedRoute><ReportsPage /></ProtectedRoute>} />
            <Route path="/admin/holidays" element={<ProtectedRoute><HolidayManagement /></ProtectedRoute>} />
            <Route path="/admin/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
