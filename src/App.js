import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Home from './Pages/Home';
import Course from './Pages/Course';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import ApplyMasterPage from './Pages/ApplyMasterPage';
import ApplyBachelorPage from './Pages/ApplyBachelorPage';
import EventPage from './Pages/EventPage';
import EventDetailPage from './Pages/EventDetailPage';
import EventTwoDetail from './Components/EventTwoDetail';
import EventThreeDetail from './Components/EventThreeDetail';



function App() {
  return (
    <>

      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/applymaster" element={<ApplyMasterPage />} />
          <Route path="/applybachelor" element={<ApplyBachelorPage />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/eventdetail" element={<EventDetailPage />} />
          <Route path="/eventtwodetail" element={<EventTwoDetail />} />
          <Route path="/eventthreedetail" element={<EventThreeDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
