import React from 'react';
import './App.css';
import CourseInfo from './Components/CourseInfo';

function App() {
  return (
    <div className="container-fluid">
      <img src = "https://img.freepik.com/premium-vector/online-learning-logo_203111-7.jpg" className="text-center bg-info p-3 logo" alt="logo"></img>
      {/* <h1 className="text-center bg-info p-3">Online Courses</h1> */}
      <CourseInfo></CourseInfo>
    </div>
  );
}

export default App;
