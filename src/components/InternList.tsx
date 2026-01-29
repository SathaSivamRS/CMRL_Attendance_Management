import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Edit, TrendingUp } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-4 px-6 flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-white">Intern List</h1>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or college..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md"
          />
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-600">
            Showing <strong className="text-gray-900">{filteredInterns.length}</strong> of <strong className="text-gray-900">{mockInterns.length}</strong> interns
          </p>
        </div>

        {/* Intern Cards */}
        <div className="space-y-3">
          {filteredInterns.map((intern) => {
            const statusColor = intern.status === 'Safe' ? 'bg-green-100 text-green-700' :
                               intern.status === 'Warning' ? 'bg-yellow-100 text-yellow-700' :
                               'bg-red-100 text-red-700';

            return (
              <div key={intern.id} className="bg-white rounded-xl shadow-md p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{intern.name}</h3>
                    <p className="text-sm text-gray-600">{intern.college}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/admin/edit-intern/${intern.id}`)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Attendance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-gray-900">{intern.attendance}%</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                      {intern.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredInterns.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">No interns found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
