import React, { useState } from 'react';

const CourseForm = () => {
  const [course, setCourse] = useState({
    The_title: '',
    Give_description: '',
    badge_text: '',
    badge_color: '',
    instructor_name: '',
    email: 'samitsaha99@gmail.com', // your hidden email here
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://react.microhost.one/api/course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course),
      });

      if (response.ok) {
        alert('Course submitted successfully');
      } else {
        alert('Error submitting course');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="course-form max-w-sm mx-auto">
      <div className="mb-5">
        <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
        <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="title" value={course.title} onChange={handleChange} />
      </div>
      <div className="mb-5">
        <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea type="textarea" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="description" value={course.description} onChange={handleChange} />
      </div>
      <div className="mb-5">
        <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Badge Text</label>
        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="badge_text" value={course.badge_text} onChange={handleChange} />
      </div>
      <div className="mb-5">
        <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Badge Color</label>
        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="badge_color" value={course.badge_color} onChange={handleChange} />
      </div>
      <div className="mb-5">
        <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor Name</label>
        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="instructor_name" value={course.instructor_name} onChange={handleChange} />
      </div>
      <input type="hidden" name="email" value={course.email} />
      <button type="submit">Submit Course</button>
    </form>
  );
};

export default CourseForm;
