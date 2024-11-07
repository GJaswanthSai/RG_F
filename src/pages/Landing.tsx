import { FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create Your Perfect
              <span className="text-indigo-600 block">Professional Resume</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Stand out from the crowd with a beautifully designed resume. Our intuitive builder helps you create a professional resume in minutes.
            </p>
            <Button 
              onClick={() => navigate('/dashboard')}
              className="transform hover:scale-105 transition-all duration-200"
            >
              <FileText className="w-5 h-5 mr-2" />
              Get Started Now
            </Button>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2070"
              alt="Resume Builder"
              className="relative rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Easy to Use',
              description: 'Simple step-by-step process to create your perfect resume',
              icon: '📝',
            },
            {
              title: 'Professional Templates',
              description: 'Choose from beautiful, pre-designed templates',
              icon: '🎨',
            },
            {
              title: 'Instant Preview',
              description: 'See your changes in real-time as you build your resume',
              icon: '👀',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}