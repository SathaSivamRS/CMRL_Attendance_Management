import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';

export default function ReportsPage() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('2025-01-01');
  const [endDate, setEndDate] = useState('2025-01-29');
  const [reportType, setReportType] = useState('all');

  const handleDownloadPDF = () => {
    alert('Comprehensive PDF report will be downloaded');
  };

  const handleDownloadExcel = () => {
    alert('Excel report with all data will be downloaded');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-4 px-6 flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-white">Reports</h1>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Report Configuration */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div className="flex items-center space-x-3 mb-2">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Generate Report</h2>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Type
            </label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Interns</option>
              <option value="present">Present Only</option>
              <option value="absent">Absent Only</option>
              <option value="low-attendance">Low Attendance (&lt;80%)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Report Summary */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-900 mb-3">Report Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Period</span>
              <span className="font-medium text-gray-900">
                {new Date(startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} - {new Date(endDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Interns</span>
              <span className="font-medium text-gray-900">45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Working Days</span>
              <span className="font-medium text-gray-900">29</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Average Attendance</span>
              <span className="font-medium text-green-600">84%</span>
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="space-y-3">
          <button
            onClick={handleDownloadPDF}
            className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-red-700 transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF Report</span>
          </button>

          <button
            onClick={handleDownloadExcel}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-green-700 transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            <span>Download Excel Report</span>
          </button>
        </div>

        {/* Report Details */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-900">
            Reports will include detailed attendance records, IN/OUT times, leave reasons, and individual statistics for all selected interns.
          </p>
        </div>
      </div>
    </div>
  );
}
