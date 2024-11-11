import { Home, FileText } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="w-1/3">
            <Button
              variant="secondary"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Button>
          </div>

          {/* Center - Logo */}
          <div 
            className="w-1/3 flex justify-center items-center space-x-2 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <FileText className="w-7 h-7 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
            <span className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              Resume Generator
            </span>
          </div>

          {/* Right side */}
          <div className="w-1/3 flex justify-end">
            {!isHomePage && (
              <Button
                variant="secondary"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}