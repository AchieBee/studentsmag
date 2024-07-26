import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Students from './Components/StudentList';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

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
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              getStudents={getStudents}
              name={name}
              changeName={changeName}
              image={image}
              changeImage={changeImage}
              partingShot={partingShot}
              changePartingShot={changePartingShot}
            />
          }
        />
        <Route path="/students" element={<Students students={students} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
