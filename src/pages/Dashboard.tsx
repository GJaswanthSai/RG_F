import { useNavigate } from 'react-router-dom';
import { Plus, Edit } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume Dashboard</h1>
            <p className="text-lg text-gray-600">Choose an option to get started</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div 
              onClick={() => navigate('/resume/new')}
              className="group cursor-pointer p-8 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="p-4 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors duration-300">
                  <Plus className="w-10 h-10 text-indigo-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Create New Resume</h3>
                  <p className="text-gray-600">Start fresh with a new professional resume</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => navigate('/resume/edit')}
              className="group cursor-pointer p-8 bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="p-4 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                  <Edit className="w-10 h-10 text-purple-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Update Resume</h3>
                  <p className="text-gray-600">Modify and improve your existing resume</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}