//import './StudentCard.css';

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <img src={student.studentImage} alt={student.studentName} />
      <h4>{student.studentName}</h4>
      <p>{student.partingShot}</p>
    </div>
  );
}

export default StudentCard;
