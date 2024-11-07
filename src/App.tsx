import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ResumeForm from './pages/ResumeForm';
import ResumePreview from './pages/ResumePreview';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resume/:type" element={<ResumeForm />} />
          <Route path="/resume/preview" element={<ResumePreview />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;