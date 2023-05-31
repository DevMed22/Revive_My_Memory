import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from'../../images/logo.jpg'
// export default class Navbar extends Component {
//   render() {
//     return (
//   <>
//    {/* start Navbar */}
//    <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//      <img src={logo} className='logo ms-3'></img>
//     </a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto  mb-lg-0 me-4">
//         <li className="nav-item">
//           <Link className="nav-link active text-primary fw-bold" aria-current="page" to=''>Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-primary" to='MemoAi'>Memo-AI</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-primary" to='HowWorks'>How It Works</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-primary"to='ChatMemory' >Chat Memory</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-primary" to='Solution'>Solution</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-primary" to='Team'>Team</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-primary" to='Contacts'>Contact</Link>
//         </li>
//       </ul>
//       <button className='btn btn-primary me-4 mt-5 mb-5'>Login</button>
// <button className='btn btn-light mt-5 mb-5'>LogOut</button>
//     </div>
//   </div>
// </nav>
//  {/* end Navbar */}
//   </>
//     )
//   }
// }

export default function Navbar() {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
     <img src={logo} className='logo ms-3'></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-lg-0 me-4">
        <li className="nav-item">
          <Link className="nav-link active text-primary fw-bold" aria-current="page" to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to='MemoAi'>Memo-AI</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to='HowWorks'>How It Works</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary"to='ChatMemory' >Chat Memory</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to='Solution'>Solution</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to='Team'>Team</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to='Contacts'>Contact</Link>
        </li>
      </ul>
      <button className='btn btn-primary me-4 mt-5 mb-5'>Login</button>
<button className='btn btn-light mt-5 mb-5'>LogOut</button>
    </div>
  </div>
</nav>
    </>
  )
}
