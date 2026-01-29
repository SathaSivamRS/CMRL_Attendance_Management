import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function AttendanceSummary() {
  const navigate = useNavigate();
  
  const totalDays = 30;
  const presentDays = 26;
  const absentDays = 4;
  const percentage = Math.round((presentDays / totalDays) * 100);
  
  const status = percentage >= 80 ? 'Safe' : percentage >= 70 ? 'Warning' : 'Critical';
  const statusColor = status === 'Safe' ? 'bg-green-100 text-green-700' : 
                      status === 'Warning' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700';

  const data = [
    { name: 'Present', value: presentDays, color: '#10b981' },
    { name: 'Absent', value: absentDays, color: '#ef4444' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-4 px-6 flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-white">Attendance Summary</h1>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Main Stats Card */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Overall Performance</h2>
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>

          <div className="text-center mb-6">
            <div className="text-6xl font-bold text-blue-600 mb-2">{percentage}%</div>
            <p className="text-gray-600">Attendance Rate</p>
            <div className={`inline-block mt-3 px-4 py-2 rounded-full font-medium ${statusColor}`}>
              {status}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full ${status === 'Safe' ? 'bg-green-600' : status === 'Warning' ? 'bg-yellow-600' : 'bg-red-600'}`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{totalDays}</div>
            <p className="text-xs text-gray-600 mt-1">Total Days</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{presentDays}</div>
            <p className="text-xs text-gray-600 mt-1">Present</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{absentDays}</div>
            <p className="text-xs text-gray-600 mt-1">Absent</p>
          </div>
        </div>

        {/* Chart Card */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Attendance Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-600 rounded"></div>
              <span className="text-sm text-gray-700">Present ({presentDays})</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              <span className="text-sm text-gray-700">Absent ({absentDays})</span>
            </div>
          </div>
        </div>

        {/* Monthly Breakdown */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-900 mb-3">This Month</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Working Days</span>
              <span className="font-semibold text-gray-900">{totalDays}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Days Present</span>
              <span className="font-semibold text-green-600">{presentDays}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Days Absent</span>
              <span className="font-semibold text-red-600">{absentDays}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
              <span className="font-medium text-gray-900">Attendance %</span>
              <span className="font-bold text-blue-600">{percentage}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
