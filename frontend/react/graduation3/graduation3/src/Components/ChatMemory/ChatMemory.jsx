import React, { Component, useState } from 'react'
import patient from '../../../src/images/patient-docror-call.jpg'
import call1 from '../../../src/images/call1.png'

// export default class ChatMemory extends Component {
//   render() {
//     return (
//   <>
  


//   </>
//     )
//   }
// }

export default function ChatMemory() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleStartClick = () => {
  //   if (isLoggedIn) {
  //     // User is signed in, proceed with start action
  //     // ...
  //   } else {
  //     // User is not signed in, display sign-in message
  //     alert('Please sign in to start.');
  //   }
  // }

  // const handleSignIn = () => {
  //   // Call your sign-in function here
  //   signIn();
  //   setIsLoggedIn(true);
  // }
  return (
    <div className='Chatmemory'>
    <div className="container py-5">
      <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
          {/* <h1 className="display-4">Chat Memory</h1> */}
          <div className='text-anim'>
    <span>C</span>
    <span>h</span>
    <span>a</span>
    <span>t</span>
    <span>M</span>
    <span>e</span>
    <span>m</span>
    <span>o</span>
    <span>r</span>
    <span>y</span>
  </div>
          <p className="lead mb-0">Chatting can help improve communication between patients, doctors, and volunteers, especially in cases where language or accessibility is a barrier.</p>
         
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row text-center">
        <div className="col-xl-6 col-sm-3 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img src={patient} alt width={350} className="img-fluid  mb-3 img-thumbnail shadow-sm" />
            <h5 className="mb-0">patient vs Doctor</h5><span className="small text-uppercase text-danger fw-bold">video call</span>
            <p className='mt-3'>Video calls make it easier for patients to access medical care, especially those who live in remote or underserved areas. With video calls, patients can connect with doctors from the comfort of their own home</p>
            <p> as a patient to get help from Doctor  
            </p>
            <p>
            This is <span className='fw-bold'>personal information of Doctor :</span>
            </p>
            <button className='btn btn-primary'>start Call</button>
            {/* <ul className="social mb-0 list-inline mt-5">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-facebook fs-3"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-twitter fs-3"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-instagram fs-3"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-linkedin fs-3"></i></a></li>
            </ul> */}
          </div>
        </div>
        <div className="col-xl-6 col-sm-3 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img src={call1} alt width={438} className="img-fluid mb-3 img-thumbnail shadow-sm" />
            <h5 className="mb-0">patient vs volunter </h5><span className="small text-uppercase text-danger fw-bold">video call</span>
            <p className='mt-3'>Video calls can help stimulate patients' memories and provide a sense of familiarity. Volunteers can show patients photos or videos of familiar people or places, which can help trigger memories and improve cognitive function.</p>
            <p className='mt-2'>As A Patient To contact with Volunter </p>
            <p>
            This is <span className='fw-bold'>personal information of volunter :</span>
            </p>
            <button className='btn btn-primary'>start Call</button>
            {/* <ul className="social mb-0 list-inline mt-5">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-facebook fs-3"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-twitter fs-3"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-instagram fs-3"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa-brands fa-linkedin fs-3"></i></a></li>
            </ul> */}
          </div>
        </div>
        {/* <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg" alt width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
            <h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f" /></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter" /></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram" /></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>
        </div> */}
        {/* <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
            <h5 className="mb-0">John Tarly</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f" /></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter" /></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram" /></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  )
}
