import { useLocation, useNavigate } from 'react-router-dom';
import { Download, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function ResumePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};

  const skills = formData.skills?.split(',').map((skill: string) => skill.trim()) || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-between items-center">
          <Button variant="secondary" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Button>
          <Button>
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header Section */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{formData.fullName}</h1>
            <div className="text-gray-600 space-y-1">
              <p>{formData.email}</p>
              <p>{formData.phone}</p>
              <p>{`${formData.street}, ${formData.city}, ${formData.state} ${formData.zipCode}`}</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Summary</h2>
            <p className="text-gray-700">{formData.summary}</p>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Work Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{formData.position}</h3>
                <p className="text-gray-700 font-medium">{formData.company}</p>
                <p className="text-gray-600">
                  {formData.startDate} - {formData.endDate}
                </p>
                <p className="text-gray-700 mt-2">{formData.description}</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Education</h2>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{formData.school}</h3>
              <p className="text-gray-700">{formData.degree}</p>
              <p className="text-gray-600">Graduated: {formData.graduationDate}</p>
              {formData.gpa && <p className="text-gray-600">GPA: {formData.gpa}</p>}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}