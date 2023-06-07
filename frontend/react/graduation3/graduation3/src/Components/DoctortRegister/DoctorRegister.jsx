// import axios from 'axios';
import React, { useState } from 'react'
import 'animate.css/animate.min.css';
import 'animate.css/animate.min.css';
import { useNavigate } from 'react-router-dom';
// import Joi from 'joi';
export default function PatientRegister() {
  const[user,setUser]=useState({
    "username":"",
    "name":"",
    "email":"",
    "usertype":"DR",
    "profilePic":null,
    "birthdate":"2023-09-09",
    "major":"NR",
    "password":""
  })
  // const [errorMessage, seterrorMessage] = useState('');
  // const [errorslist, seterrorslist] = useState([]);
  let navigate=useNavigate();
  let GoToLogin=()=>{
    navigate('/login')
  }
  let submitFormData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/doctor/register/', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      const data = await response.json();
      if (data.message === 'success') {
        GoToLogin();
      } else {
        GoToLogin();
      }
    } catch (error) {
      console.log(error);
      GoToLogin();
    }
  };

  //validate form data



  
// let submitFormData = async (e) => {
//   e.preventDefault();
//   const response = await fetch('http://127.0.0.1:8000/api/v1/doctor/register/', {
//       method: 'POST',
//       body: JSON.stringify(user),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const data = await response.json();
//     if (data.message==='success'){
//       GoToLogin();

//     }
//     else{
//       alert(data.message)
//     }
//   // try {
//   //   let { data } = await axios.post('http://127.0.0.1:8000/api/v1/doctor/register/', user);
//   //   if (data.message == 'success') {
//   //     alert('login');
//   //   } else {
//   //     alert(data.message);
//   //   }
//   // } catch (error) {
//   //   console.log(error);
//   //   alert('An error occurred while submitting the form. Please try again later.');
//   // }
// };

// let submitFormData = async (e) => {
//   e.preventDefault();
//   try {
//     const { data } = await axios.post('http://127.0.0.1:8000/api/v1/doctor/register/', user);
//     console.log('API response:', data);
//     if (data.message === 'success') {
//       alert('login');
//     } else {
//       alert(data.message);
//     }
//   } catch (error) {
//     console.error('Error sending API request:', error);
//     console.log('Response data:', error.response.data);
//   }
// };
// let submitFormData = async (e) => {
//   e.preventDefault();
//   try {
//     const { data } = await axios.post('http://127.0.0.1:8000/api/v1/doctor/register/', user);
//     console.log('API response:', data);
//   } catch (error) {
//     console.error('Error sending API request:', error);
//   }
// };
// let submitFormData = async (e) => {
//   e.preventDefault();
//   try {
//     const { data } = await axios.post('http://127.0.0.1:8000/api/v1/doctor/register/', user);
//     console.log('API response:', data);
//   } catch (error) {
//     console.error('Error sending API request:', error);
//     console.log('Response data:', error.response.data);
//   }
// };
// let submitFormData = async (e) => {
//   e.preventDefault();
//   try {
//     const { data } = await axios.post('http://127.0.0.1:8000/api/v1/doctor/register/', user);
//     console.log('API response:', data);
//   } catch (error) {
//     console.error('Error sending API request:', error);
//     console.log('Response data:', error.response.data);
//   }
// };
  let getInputValue=(e)=>{
    let myUser={...user};   //deep copy
   myUser[e.target.name]=e.target.value;
  setUser(myUser);
  console.log(myUser);
  }
  return (
   <>
  <section className="h-100 bg-primary">
  <form onSubmit={submitFormData}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" />
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase">Doctor registration form</h3>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-outline">
                        <label className="form-label float-md-start fw-bold" htmlFor="form3Example1m">User Name</label>
                        <input onchange="{getInputValue}" type="text" name="username" id="form3Example1m" className="form-control form-control-lg"value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-outline">
                        <label className="form-label float-md-start fw-bold" htmlFor="form3Example1m1">Name</label>
                        <input onchange="{getInputValue}" type="text" name="name" id="form3Example1m1" className="form-control form-control-lg"value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label float-md-start fw-bold" htmlFor="form3Example8">Email</label>
                    <input onchange="{getInputValue}" type="email" name="email" id="form3Example8" className="form-control form-control-lg" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                  </div>
                  {/* <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                    <h6 className="mb-0 me-4">User Type: </h6>
                    <div className="form-check form-check-inline mb-0 me-4">
                      <input onchange="{getInputValue}" className="form-check-input" type="radio" name="usertype" id="Patient" defaultValue="option1"value={user.usertype} onChange={(e) => setUser({...user, usertype: e.target.value})} />
                      <label className="form-check-label " htmlFor="Patient">Patient</label>
                    </div>
                    <div className="form-check form-check-inline mb-0 me-4">
                      <input onchange="{getInputValue}" className="form-check-input" type="radio" name="inlineRadioOptions" id="Doctor" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="Doctor">Doctor</label>
                    </div>
                    <div className="form-check form-check-inline mb-0">
                      <input onchange="{getInputValue}" className="form-check-input" name="usertype" id="volunteer" value="volunteer" onChange={(e) => setUser({...user, usertype: e.target.value})} defaultValue="option3" />
                      <label className="form-check-label" htmlFor="Volunter">Volunter</label>
                    </div>
                    <div className="form-check form-check-inline mb-0">
                      <input onchange="{getInputValue}" className="form-check-input" name="usertype" id="other" value="other" onChange={(e) => setUser({...user, usertype: e.target.value})}defaultValue="option3" />
                      <label className="form-check-label" htmlFor="otherGender">other</label>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="form-outline mb-4">
                      <label className="form-label float-md-start fw-bold" htmlFor="form3Example8">Profile Picture</label>
                      <input onchange="{getInputValue}" type="file" alt="Patient Picture" id="form3Example8" className="form-control form-control-lg" name="profilePic"value={user.profilePic} onChange={(e) => setUser({...user, profilePic: e.target.value})} />
                    </div>
                  </div>
                 <div className="row">
                    <div className="col-md-6 mb-4">
                    {/* <select className="select">
                        <option value={1}>State</option>
                        <option value={2}>Option 1</option>
                        <option value={3}>Option 2</option>
                        <option value={4}>Option 3</option>
                      </select>   */}
                      {/* <select name="state" className="select" value={user.state} onChange={(e) => setUser({...user, state: e.target.value})}>
  <option value="">State</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select> */}
                    </div>
                    {/* <div className="col-md-6 mb-4">
                      <select className="select">
                        <option value={1}>City</option>
                        <option value={2}>Option 1</option>
                        <option value={3}>Option 2</option>
                        <option value={4}>Option 3</option>
                      </select>
                    </div> */}
                    
                  </div> 
                  <div className="row">
                    <div className="form-outline mb-4">
                      <label className="form-label float-md-start fw-bold" htmlFor="form3Example8">Birth Date</label>
                      <input onchange="{getInputValue}" type="date" alt="Patient Picture" id="form3Example8" className="form-control form-control-lg" name="birthdate"value={user.date} onChange={(e) => setUser({...user, date: e.target.value})} />
                    </div>
                  </div>
                  {/* <div className="row">
                    <label htmlFor="Major" classname="majorlabel">Major</label>
                    <select name="major" classname="majorselect" id="Major">
                      <option value={1}>Neurologist</option>
                      <option value={2}>scientest</option>
                      <option value={3}>experiment</option>
                    </select>
                  </div> */}
                        <div className='row'>
                          <label htmlFor="Major"className='form-label float-md-start fw-bold'>Major</label>
                        <select className="custom-select p-2 mb-5" id="Major">
                          {/* <option selected>Choose...</option> */}
                          <option value="1">Neurologist</option>
                          <option value="2">Scientest</option>
                          <option value="3">dermatology</option>
                        </select>
                        </div>
                  <div className="row">
                    <div className="form-outline mb-4">
                      <label className="form-label float-md-start fw-bold" htmlFor="form3Example8">Password</label>
                      <input onchange="{getInputValue}" type="password" name="password" alt="Patient Picture" id="form3Example8" className="form-control form-control-lg"value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
                    </div>
                  </div>

                  <div className="d-flex justify-content-end pt-3">
                    <button type="reset" className="btn btn-danger">Reset</button>
                    <button type="submit" className="btn btn-warning btn-lg ms-2">Submit form</button>
                    <div classname="clear-fix" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</section>

   </>
  )
}
