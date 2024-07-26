import React from 'react';
//import './HomePage.css';

function HomePage({
  getStudents,
  name,
  changeName,
  image,
  changeImage,
  partingShot,
  changePartingShot,
}) {
  return (
    <div className="homepage">
      <h1>Welcome to Students Magazine</h1>
      <p>Your one-stop portal for student achievements and stories.</p>
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
    </div>
  );
}

export default HomePage;
