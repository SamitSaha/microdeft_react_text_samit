import React, { useEffect, useState } from 'react';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://react.microhost.one/api/course?email=youremail@example.com');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="course-list">
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.title} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span style={{ backgroundColor: course.badge_color }}>
              {course.badge_text}
            </span>
            <p>Instructor: {course.instructor_name}</p>
          </div>
        ))
      ) : (
        <p>No courses found</p>
      )}
    </div>
  );
};

export default CourseList;
