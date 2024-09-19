import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseForm from './components/courseForm';
import CourseList from './components/courseList';

function App() {
  return (
    <div className="App">
      <h1>Course Management</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
