import { useState } from 'react';
import './App.css';
import Students from './StudentList';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [partingShot, setPartingShot] = useState("");

  function getStudents(e) {
    e.preventDefault();
    let student = {
      studentName: name,
      studentImage: image,
      partingShot: partingShot,
    };
    console.log(student);
    let newArray = [...students, student];
    setStudents(newArray);
    // Reset form fields
    setName("");
    setImage("");
    setPartingShot("");
  }
  console.log(students);

  function changeName(event) {
    setName(event.target.value);
  }

  function changeImage(event) {
    setImage(event.target.value);
  }

  function changePartingShot(event) {
    setPartingShot(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={getStudents}>
        <input
          placeholder="Add student name"
          value={name}
          onChange={changeName}
        />
        <input
          placeholder="Add student photo link"
          value={image}
          onChange={changeImage}
        />
        <input
          placeholder="Add student parting shot"
          value={partingShot}
          onChange={changePartingShot}
        />
        <button>Submit</button>
      </form>
      <Students students={students} />
    </div>
  );
}

export default App;
