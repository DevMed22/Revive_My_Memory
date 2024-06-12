// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import MemoAi from './Components/MemoAi/MemoAi'
import HowWorks from './Components/HowItWorks/HowItWorks'
import ChatMemory from './Components/ChatMemory/ChatMemory'
import Solution from './Components/Solution/Solution'
import Team from './Components/Team/Team'
import Contacts from './Components/Contact/Contact'
// import React, { useState, useEffect } from 'react';
// import Home from '../../graduation3/src/Components/Home/Home';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
import Masterlayout from './Components/MasterLayout/Masterlayout';
import NotFound from './Components/Notfound/NotFound';
import Login from './Components/Login/Login'
import PatientRegister from './Components/DoctortRegister/DoctorRegister'
import Doctorregister from './Components/Patientregister/Patientregister'
import Volunterregister from './Components/Volunterregister/Volunterregister'
import Contributerregister from './Components/Contributerregister/Contributerregister'
// import axios from 'axios';

function App() {
  {/*start routing */}
const routes=createBrowserRouter([
{path:'/',element:<Masterlayout/>,errorElement:<NotFound/> ,children:[
  {index:true,element:<Home/>},
  {path:'MemoAi',element:<MemoAi/>},
  {path:'HowWorks',element:<HowWorks/>},
  {path:'ChatMemory',element:<ChatMemory/>},
  {path:'Solution',element:<Solution/>},
  {path:'Team',element:<Team/>},
  {path:'Contacts',element:<Contacts/>},
  {path:'Login',element:<Login/>},
  {path:'PatientRegister',element:<PatientRegister/>},
  {path:'Doctorregister',element:<Doctorregister/>},
  {path:'Volunterregister',element:<Volunterregister/>},
  {path:'Contributerregister',element:<Contributerregister/>},
]}  
])
  {/*end routing */}
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/api/v1/posts/')
  //     .then(response => setData(response.data))
  //     .catch(error => console.log(error));
  // }, []);
  return (
    // <div>
    //   {data.map(item => (
    //     <p key={item.id}>{item.title}</p>
    //   ))}
    // </div>
    <>
<RouterProvider router={routes}/>
    </>
  )

}

export default App;
