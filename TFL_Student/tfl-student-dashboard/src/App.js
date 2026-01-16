import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar.jsx';
import StudentDashboard from './pages/StudentDashboard';
import Projects from './pages/Projects';
import Assessments from './pages/Assessments';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10 p-4">
            <Routes>
              <Route path='/' element={<StudentDashboard />} />
              <Route path='/dashboard' element={<StudentDashboard />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/assessments' element={<Assessments />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}