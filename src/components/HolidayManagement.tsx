import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Calendar, Trash2 } from 'lucide-react';

/* 🔹 SHARED HOLIDAY DATA */
export let sharedHolidays = [
  { id: 1, name: 'Republic Day', date: '2025-01-26' },
  { id: 2, name: 'Holi', date: '2025-03-14' },
  { id: 3, name: 'Independence Day', date: '2025-08-15' },
  { id: 4, name: 'Gandhi Jayanti', date: '2025-10-02' },
  { id: 5, name: 'Diwali', date: '2025-10-20' },
];

export const updateSharedHolidays = (list: typeof sharedHolidays) => {
  sharedHolidays = list;
};

export default function HolidayManagement() {
  const navigate = useNavigate();
  const [holidays, setHolidays] = useState(sharedHolidays);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newHoliday, setNewHoliday] = useState({ name: '', date: '' });

  const handleAddHoliday = () => {
    if (newHoliday.name && newHoliday.date) {
      const updated = [...holidays, { id: Date.now(), ...newHoliday }];
      setHolidays(updated);
      updateSharedHolidays(updated);
      setNewHoliday({ name: '', date: '' });
      setShowAddForm(false);
    }
  };

  const handleDeleteHoliday = (id: number) => {
    if (confirm('Are you sure you want to delete this holiday?')) {
      const updated = holidays.filter(h => h.id !== id);
      setHolidays(updated);
      updateSharedHolidays(updated);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate(-1)} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-white">Holiday Management</h1>
        </div>
        <button onClick={() => setShowAddForm(!showAddForm)} className="text-white">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      <div className="px-6 py-6 space-y-4">
        {showAddForm && (
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <h3 className="font-semibold text-gray-900">Add New Holiday</h3>
            <input
              type="text"
              value={newHoliday.name}
              onChange={(e) => setNewHoliday({ ...newHoliday, name: e.target.value })}
              placeholder="Holiday Name"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              type="date"
              value={newHoliday.date}
              onChange={(e) => setNewHoliday({ ...newHoliday, date: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg"
            />
            <button onClick={handleAddHoliday} className="bg-blue-600 text-white py-2 px-4 rounded">
              Add Holiday
            </button>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-md p-5">
          {holidays.map((holiday) => (
            <div key={holiday.id} className="flex justify-between p-2">
              <span>{holiday.name} - {holiday.date}</span>
              <Trash2 onClick={() => handleDeleteHoliday(holiday.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}