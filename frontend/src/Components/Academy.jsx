import './Academy.css';
import { useState } from 'react';
import logoo from '../pics/logoo.png';

const Academy = () => {
  const [academyData, setAcademyData] = useState({
    name: '',
    email: '',
    location: '',
    description: '',
    phoneNumber: ''
  });

  const [selectedAcademy, setSelectedAcademy] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAcademyData({
      ...academyData,
      [name]: value
    });
  };

  const handleAdd = () => {
    // Perform validation before adding the academy
    if (!academyData.name || !academyData.email || !academyData.location) {
      console.log('Please fill in all required fields.');
      return;
    }

    // Logic to add the academy
    console.log('Academy added:', academyData);

    // Reset the form fields after adding the academy
    setAcademyData({
      name: '',
      email: '',
      location: '',
      description: '',
      phoneNumber: ''
    });
  };

  const handleUpdate = () => {
    // Perform validation before updating the academy
    if (!selectedAcademy) {
      console.log('Please select an academy to update.');
      return;
    }

    // Logic to update the academy
    console.log('Academy updated:', selectedAcademy);
    console.log('Updated details:', academyData);

    // Reset the form fields after updating the academy
    setAcademyData({
      name: '',
      email: '',
      location: '',
      description: '',
      phoneNumber: ''
    });

    setSelectedAcademy(null);
  };

  const handleDelete = () => {
    // Perform validation before deleting the academy (if needed)
    if (!selectedAcademy) {
      console.log('Please select an academy to delete.');
      return;
    }

    // Logic to delete the academy
    console.log('Academy deleted:', selectedAcademy);

    // Reset the form fields after deleting the academy
    setAcademyData({
      name: '',
      email: '',
      location: '',
      description: '',
      phoneNumber: ''
    });

    setSelectedAcademy(null);
  };

  // Function to handle selecting an academy
  // const handleSelectAcademy = (academy) => {
  //   setSelectedAcademy(academy);
  // };

  return (
    <div className="dash-container">
    <header>
      <div className="logo">
        <img src={logoo}></img>
      </div>
      <nav>
        <div className='home-book'> 
        <div className="dropdown">
            <button id="menuButton" className="dropbtn">Menu</button>
            <div className="dropdown-content">
                <a href="http://localhost:5173/dash">Home</a>
                <a href=" http://localhost:5173/academy">Academy</a>
                <a href=" http://localhost:5173/courses">Courses</a>
                <a href="http://localhost:5173/people">Enrollments</a>
            </div>
          </div>
         </div>
      </nav>
    </header>
    <div className="addcourse-background"></div>
    <div className="container">
      <h2>Academy Form</h2>
      <div className="button-container">
          <button type="button" className="btn btn-primary" onClick={handleAdd}>
            Add
          </button>
          <button type="button" className="btn btn-success" onClick={handleUpdate}>
            Update
          </button>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      <form>
        <div className="form-field">
          <label htmlFor="name" className="field-label">Academy ID:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={academyData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="name" className="field-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={academyData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="field-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={academyData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="location" className="field-label">Location:</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={academyData.location}
            onChange={handleChange}
          />
        </div>
        {/* <div className="form-field">
          <label htmlFor="description" className="field-label">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={academyData.description}
            onChange={handleChange}
          />
        </div> */}
        <div className="form-field">
          <label htmlFor="phoneNumber" className="field-label">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={academyData.phoneNumber}
            onChange={handleChange}
          />
        </div>  
      </form>
    </div>
    </div>
  );
}

export default Academy;