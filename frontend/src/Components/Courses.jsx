// import './Academy.css';
// import { useState } from 'react';
// import logoo from '../pics/logoo.png';

// const Academy = () => {
//   const [academyData, setAcademyData] = useState({
//     name: '',
//     email: '',
//     location: '',
//     description: '',
//     phoneNumber: ''
//   });

//   const [selectedAcademy, setSelectedAcademy] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAcademyData({
//       ...academyData,
//       [name]: value
//     });
//   };

//   const handleAdd = () => {
//     // Perform validation before adding the academy
//     if (!academyData.name || !academyData.email || !academyData.location) {
//       console.log('Please fill in all required fields.');
//       return;
//     }

//     // Logic to add the academy
//     console.log('Academy added:', academyData);

//     // Reset the form fields after adding the academy
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });
//   };

//   const handleUpdate = () => {
//     // Perform validation before updating the academy
//     if (!selectedAcademy) {
//       console.log('Please select an academy to update.');
//       return;
//     }

//     // Logic to update the academy
//     console.log('Academy updated:', selectedAcademy);
//     console.log('Updated details:', academyData);

//     // Reset the form fields after updating the academy
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });

//     setSelectedAcademy(null);
//   };

//   const handleDelete = () => {
//     // Perform validation before deleting the academy (if needed)
//     if (!selectedAcademy) {
//       console.log('Please select an academy to delete.');
//       return;
//     }

//     // Logic to delete the academy
//     console.log('Academy deleted:', selectedAcademy);

//     // Reset the form fields after deleting the academy
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });

//     setSelectedAcademy(null);
//   };

//   // Function to handle selecting an academy
//   // const handleSelectAcademy = (academy) => {
//   //   setSelectedAcademy(academy);
//   // };

//   return (
//     <div className="dash-container">
//     <header>
//       <div className="logo">
//         <img src={logoo}></img>
//       </div>
//       <nav>
//         <div className='home-book'> 
//         <div className="dropdown">
//             <button id="menuButton" className="dropbtn">Menu</button>
//             <div className="dropdown-content">
//                 <a href="http://localhost:5173/dash">Home</a>
//                 <a href=" http://localhost:5173/academy">Academy</a>
//                 <a href=" http://localhost:5173/courses">Courses</a>
//                 <a href="http://localhost:5173/people">Enrollments</a>
//             </div>
//           </div>
//          </div>
//       </nav>
//     </header>
//     <div className="addcourse-background"></div>
//     <div className="container">
//       <h2>Courses Form</h2>
//       <div className="button-container">
//           <button type="button" className="btn btn-primary" onClick={handleAdd}>
//             Add
//           </button>
//           <button type="button" className="btn btn-success" onClick={handleUpdate}>
//             Update
//           </button>
//           <button type="button" className="btn btn-danger" onClick={handleDelete}>
//             Delete
//           </button>
//         </div>
//       <form>
//         <div className="form-field">
//           <label htmlFor="name" className="field-label">Academy ID:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={academyData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="name" className="field-label">Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={academyData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="email" className="field-label">Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={academyData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="location" className="field-label">Location:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="location"
//             name="location"
//             value={academyData.location}
//             onChange={handleChange}
//           />
//         </div>
//         {/* <div className="form-field">
//           <label htmlFor="description" className="field-label">Description:</label>
//           <textarea
//             className="form-control"
//             id="description"
//             name="description"
//             value={academyData.description}
//             onChange={handleChange}
//           />
//         </div> */}
//         <div className="form-field">
//           <label htmlFor="phoneNumber" className="field-label">Phone Number:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={academyData.phoneNumber}
//             onChange={handleChange}
//           />
//         </div>  
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Academy;
//backup guys
// import './Academy.css';
// import { useState } from 'react';
// import logoo from '../pics/logoo.png';
// import axios from 'axios';

// const Academy = () => {
//   const [academyData, setAcademyData] = useState({
//     academyId: '',
//     name: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAcademyData({
//       ...academyData,
//       [name]: value
//     });
//   };

//   const handleAdd = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/academies', academyData);
//       console.log('Academy added:', response.data);
//       setAcademyData({
//         academyId: '',
//         name: '',
//         description: ''
//       });
//     } catch (error) {
//       console.error('Error adding academy:', error);
//     }
//   };

//   return (
//     <div className="dash-container">
//       <header>
//         <div className="logo">
//           <img src={logoo} alt="Logo"></img>
//         </div>
//         <nav>
//           <div className='home-book'>
//             <div className="dropdown">
//               <button id="menuButton" className="dropbtn">Menu</button>
//               <div className="dropdown-content">
//                 <a href="http://localhost:5173/dash">Home</a>
//                 <a href="http://localhost:5173/academy">Academy</a>
//                 <a href="http://localhost:5173/courses">Courses</a>
//                 <a href="http://localhost:5173/people">Enrollments</a>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <div className="addcourse-background"></div>
//       <div className="container">
//         <h2>Academy Form</h2>
//         <div className="button-container">
//           <button type="button" className="btn btn-primary" onClick={handleAdd}>
//             Add
//           </button>
//         </div>
//         <form>
//           <div className="form-field">
//             <label htmlFor="academyId" className="field-label">Academy ID:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="academyId"
//               name="academyId"
//               value={academyData.academyId}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-field">
//             <label htmlFor="name" className="field-label">Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               value={academyData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-field">
//             <label htmlFor="description" className="field-label">Description:</label>
//             <textarea
//               className="form-control"
//               id="description"
//               name="description"
//               value={academyData.description}
//               onChange={handleChange}
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Academy;


import './Academy.css';
import { useState } from 'react';
import logoo from '../pics/logoo.png';
import axios from 'axios';

const Academy = () => {
  const [academyData, setAcademyData] = useState({
    academyId: '',
    name: '',
    description: ''
  });

  const [updateData, setUpdateData] = useState({
    courseId: '',
    courseName: '',
    courseDescription: ''
  });

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAcademyData({
      ...academyData,
      [name]: value
    });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value
    });
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/academies', academyData);
      console.log('Academy added:', response.data);
      setAcademyData({
        academyId: '',
        name: '',
        description: ''
      });
    } catch (error) {
      console.error('Error adding academy:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/courses/${updateData.courseId}`, updateData);
      console.log('Course updated:', response.data);
      setUpdateData({
        courseId: '',
        courseName: '',
        courseDescription: ''
      });
      setShowUpdateForm(false);
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  return (
    <div className="dash-container">
      <header>
        <div className="logo">
          <img src={logoo} alt="Logo"></img>
        </div>
        <nav>
          <div className='home-book'>
            <div className="dropdown">
              <button id="menuButton" className="dropbtn">Menu</button>
              <div className="dropdown-content">
                <a href="http://localhost:5173/dash">Home</a>
                <a href="http://localhost:5173/academy">Academy</a>
                <a href="http://localhost:5173/courses">Courses</a>
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
            Add Academy
          </button>
        </div>
        <form>
          <div className="form-field">
            <label htmlFor="academyId" className="field-label">Academy ID:</label>
            <input
              type="text"
              className="form-control"
              id="academyId"
              name="academyId"
              value={academyData.academyId}
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
            <label htmlFor="description" className="field-label">Description:</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={academyData.description}
              onChange={handleChange}
            />
          </div>
        </form>

        <div className="button-container">
          <button type="button" className="btn btn-success" onClick={() => setShowUpdateForm(!showUpdateForm)}>
            {showUpdateForm ? 'Hide Update Form' : 'Show Update Form'}
          </button>
        </div>

        {showUpdateForm && (
          <>
            <h2>Update Course Form</h2>
            <form>
              <div className="form-field">
                <label htmlFor="courseId" className="field-label">Course ID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="courseId"
                  name="courseId"
                  value={updateData.courseId}
                  onChange={handleUpdateChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="courseName" className="field-label">Course Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="courseName"
                  name="courseName"
                  value={updateData.courseName}
                  onChange={handleUpdateChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="courseDescription" className="field-label">Course Description:</label>
                <textarea
                  className="form-control"
                  id="courseDescription"
                  name="courseDescription"
                  value={updateData.courseDescription}
                  onChange={handleUpdateChange}
                />
              </div>
              <div className="button-container">
                <button type="button" className="btn btn-success" onClick={handleUpdate}>
                  Update Course
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Academy;
