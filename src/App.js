import {Navigate,BrowserRouter as Router, Route,Link ,Routes} from 'react-router-dom';
import './App.css';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import EmployeeFeedbackForm from './components/EmployeeFeedbackForm';

function App(){
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/student/"/>}></Route>
          <Route path="/student" element={<StudentRegistrationForm/>}></Route>
          <Route path="/employee" element={<EmployeeFeedbackForm/>}></Route>
        </Routes>

        <div>
          <center>
            <Link to="/student">Student Registration  | </Link>
            <Link to="/employee"> Employee Feedback</Link></center>
        </div>
      </Router>
    </div>
  )
}

export default App;