import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Save } from 'lucide-react';

export default function SettingsPage() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    radius: '200',
    minAttendance: '75',
    officeLocation: 'Metro Office, Sector 29, Noida',
  });

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-4 px-6 flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-white">Settings</h1>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Office Location */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>Office Location</span>
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Office Address
            </label>
            <input
              type="text"
              value={settings.officeLocation}
              onChange={(e) => setSettings({ ...settings, officeLocation: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Map Preview */}
          <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Office Location Map</p>
              <p className="text-xs text-gray-500">Metro Office, Sector 29</p>
            </div>
          </div>
        </div>

        {/* Attendance Settings */}
        <div className="bg-white rounded-xl shadow-md p-5 space-y-4">
          <h3 className="font-semibold text-gray-900">Attendance Settings</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check-in Radius (meters)
            </label>
            <input
              type="number"
              value={settings.radius}
              onChange={(e) => setSettings({ ...settings, radius: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Interns must be within this radius to mark attendance
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Attendance Percentage (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={settings.minAttendance}
              onChange={(e) => setSettings({ ...settings, minAttendance: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Minimum required attendance for interns
            </p>
          </div>
        </div>

        {/* Status Thresholds */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-900 mb-3">Status Indicators</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <span className="text-sm text-gray-700">Safe</span>
              </div>
              <span className="text-sm font-medium text-gray-900">≥ 80%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                <span className="text-sm text-gray-700">Warning</span>
              </div>
              <span className="text-sm font-medium text-gray-900">70% - 79%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-600 rounded"></div>
                <span className="text-sm text-gray-700">Critical</span>
              </div>
              <span className="text-sm font-medium text-gray-900">&lt; 70%</span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-blue-700 transition-colors shadow-lg"
        >
          <Save className="w-5 h-5" />
          <span>Save Settings</span>
        </button>
      </div>
    </div>
  );
}
