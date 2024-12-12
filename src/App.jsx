import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { Routes, Route } from 'react-router-dom';
import StudentCard from "./components/StudentCard.jsx";


function App() {

  return (
    <div className="App relative z-20 pt-20">

      <div className="pages">
      <Navbar />

        <Routes>
        <Route path="/" element={<HomePage />} /> 

        <Route path="/profile" element={<UserProfilePage />} /> 
        <Route path="/students" element={<StudentCard />} />


        <Route 
          path="/students/:studentId"
          element={<StudentDetailsPage/>}
        />
         </Routes>

      </div>

    </div>
  );
}

export default App;
