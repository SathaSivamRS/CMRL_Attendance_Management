import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Calendar, Trash2 } from 'lucide-react';

const mockHolidays = [
  { id: 1, name: 'Republic Day', date: '2025-01-26' },
  { id: 2, name: 'Holi', date: '2025-03-14' },
  { id: 3, name: 'Independence Day', date: '2025-08-15' },
  { id: 4, name: 'Gandhi Jayanti', date: '2025-10-02' },
  { id: 5, name: 'Diwali', date: '2025-10-20' },
];

export default function HolidayManagement() {
  const navigate = useNavigate();
  const [holidays, setHolidays] = useState(mockHolidays);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newHoliday, setNewHoliday] = useState({ name: '', date: '' });

  const handleAddHoliday = () => {
    if (newHoliday.name && newHoliday.date) {
      setHolidays([...holidays, { id: Date.now(), ...newHoliday }]);
      setNewHoliday({ name: '', date: '' });
      setShowAddForm(false);
    }
  };

  const handleDeleteHoliday = (id: number) => {
    if (confirm('Are you sure you want to delete this holiday?')) {
      setHolidays(holidays.filter(h => h.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate(-1)} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-white">Holiday Management</h1>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="text-white"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Add Holiday Form */}
        {showAddForm && (
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <h3 className="font-semibold text-gray-900">Add New Holiday</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Holiday Name *
              </label>
              <input
                type="text"
                value={newHoliday.name}
                onChange={(e) => setNewHoliday({ ...newHoliday, name: e.target.value })}
                placeholder="e.g., Diwali"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                value={newHoliday.date}
                onChange={(e) => setNewHoliday({ ...newHoliday, date: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleAddHoliday}
                className="bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Add Holiday
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Holiday List */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Upcoming Holidays</h3>
          <div className="space-y-3">
            {holidays
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .map((holiday) => (
                <div key={holiday.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{holiday.name}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(holiday.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteHoliday(holiday.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-900">
            <strong>{holidays.length}</strong> holidays configured for this year
          </p>
        </div>
      </div>
    </div>
  );
}
