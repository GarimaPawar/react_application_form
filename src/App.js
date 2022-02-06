import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true); 
  }

  const handleChange = event => {
   const isCheckbox = event.target.type === 'checkbox';
   setFormData({
     name: event.target.name,
     value: isCheckbox ? event.target.checked : event.target.value,
   })
 }

  

  return(
    <div className="wrapper">
      
      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      
      <form onSubmit={handleSubmit}>
       
        <fieldset>
        <legend>Application Form </legend>
          <label>
            <p>First Name</p>
            <input className="input" name="first name" onChange={handleChange}/>
          </label>
          <label>
            <p>Last Name</p>
            <input className="input"  name="last name" onChange={handleChange}/>
          </label>
          <label>
            <p>Phone Number</p>
            <input className="input"  name="phone number" onChange={handleChange}/>
          </label>
          <label>
            <p>Email-id</p>
            <input className="input"  name="email" onChange={handleChange}/>
          </label>
         <label>
           <p>Courses</p>
           <select className="input" name="courses" onChange={handleChange}>
               <option value="">--Please choose an option--</option>
               <option value="Fullstack">Fullstack</option>
               <option value="Frontend">Frontend</option>
               <option value="Backend">Backend</option>
           </select>
         </label>
         <label>
           <p>Highest Degree</p>
           <select className="input" name="highest degree" onChange={handleChange}>
               <option value="">--Please choose an option--</option>
               <option value="B.E./B.Tech">B.E./B.Tech</option>
               <option value="M.S./M.Tech">M.S./M.Tech</option>
               <option value="Others">Others</option>
           </select>
         </label>
         <label>
            <p>Year of Completion</p>
            <input className="input" name="yoe" onChange={handleChange}/>
          </label>
          <br/>
          <br/>
          <label>
           <input type="checkbox" name="signup" onChange={handleChange} />By signing up, you agree to the Terms and conditions
         </label>
         <br/>
          <br/>
        <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App;