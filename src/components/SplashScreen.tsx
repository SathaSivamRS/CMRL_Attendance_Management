import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Train } from 'lucide-react';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center space-y-8">
        <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <Train className="w-16 h-16 text-white" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">Metro Internship</h1>
          <h2 className="text-xl text-gray-700">Attendance System</h2>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-8">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    </div>
  );
}
