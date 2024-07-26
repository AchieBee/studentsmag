import React from 'react';
import StudentCard from './StudentCard';
// import './StudentList.css';

function Students({ students }) {
  return (
    <div className="students-container">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
}

export default Students;
