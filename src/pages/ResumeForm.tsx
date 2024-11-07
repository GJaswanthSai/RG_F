import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';

const formSteps = [
  {
    id: 'personal',
    title: 'Personal Details',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'phone', label: 'Phone', type: 'tel' },
      { name: 'summary', label: 'Professional Summary', type: 'textarea' }
    ]
  },
  {
    id: 'address',
    title: 'Address',
    fields: [
      { name: 'street', label: 'Street Address', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'state', label: 'State', type: 'text' },
      { name: 'zipCode', label: 'ZIP Code', type: 'text' }
    ]
  },
  {
    id: 'experience',
    title: 'Work Experience',
    fields: [
      { name: 'company', label: 'Company Name', type: 'text' },
      { name: 'position', label: 'Position', type: 'text' },
      { name: 'startDate', label: 'Start Date', type: 'date' },
      { name: 'endDate', label: 'End Date', type: 'date' },
      { name: 'description', label: 'Job Description', type: 'textarea' }
    ]
  },
  {
    id: 'education',
    title: 'Education',
    fields: [
      { name: 'school', label: 'School/University', type: 'text' },
      { name: 'degree', label: 'Degree', type: 'text' },
      { name: 'graduationDate', label: 'Graduation Date', type: 'date' },
      { name: 'gpa', label: 'GPA', type: 'text' }
    ]
  },
  {
    id: 'skills',
    title: 'Skills',
    fields: [
      { name: 'skills', label: 'Skills (comma separated)', type: 'textarea' }
    ]
  }
];

export default function ResumeForm() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Navigate to preview page with form data
      navigate('/resume/preview', { state: { formData } });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const currentFields = formSteps[currentStep].fields;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {type === 'new' ? 'Create New Resume' : 'Update Resume'}
            </h2>
            <p className="text-gray-600">Step {currentStep + 1} of {formSteps.length}</p>
          </div>

          <div className="space-y-6">
            {currentFields.map((field) => (
              field.type === 'textarea' ? (
                <TextArea
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData] || ''}
                  onChange={handleInputChange}
                />
              ) : (
                <Input
                  key={field.name}
                  type={field.type}
                  label={field.label}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData] || ''}
                  onChange={handleInputChange}
                />
              )
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <Button
              variant="secondary"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>
            <Button onClick={handleNext}>
              {currentStep === formSteps.length - 1 ? 'Preview Resume' : 'Next'}
              {currentStep !== formSteps.length - 1 && <ChevronRight className="w-5 h-5 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}