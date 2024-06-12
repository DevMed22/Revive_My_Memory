import React, { Component } from 'react'

// export default class Footer extends Component {
//   render() {
//     return (
// <>
//   {/*Start Footer */}
// <footer className="footer">
//   <div className="waves">
//     <div className="wave" id="wave1" />
//     <div className="wave" id="wave2" />
//     <div className="wave" id="wave3" />
//     <div className="wave" id="wave4" />
//   </div>
//   <ul className="social-icon">
//     <li className="social-icon__item"><a className="social-icon__link" href="#">
//     <i className="fa-brands fa-facebook text-white icon" />
//       </a></li>
//     <li className="social-icon__item"><a className="social-icon__link" href="#">
//     <i className="fa-brands fa-twitter text-white ms-2 icon" />
//       </a></li>
//     <li className="social-icon__item"><a className="social-icon__link" href="#">
//     <i class="fa-brands fa-linkedin text-white ms-2 icon"></i>
//       </a></li>
//     <li className="social-icon__item"><a className="social-icon__link" href="#">
//     <i class="fa-brands fa-instagram text-white ms-2 icon"></i>
//       </a></li>
//       <li className="social-icon__item"><a className="social-icon__link" href="#">
//       <i class="fa-brands fa-github text-white ms-2 icon"></i>
//       </a></li>
//   </ul>
//   {/* <ul className="menu">
//     <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
//     <li className="menu__item"><a className="menu__link" href="#">About</a></li>
//     <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
//     <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
//     <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
//   </ul> */}
//   <p>©2023 SkipTimes | All Rights Reserved</p>
// </footer>

//   <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
//   <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
//     {/*End Footer */}
// </>
//     )
//   }
// }

export default function Footer() {
  return (
 <>
 <footer className="footer ">
  {/* <div className="waves">
    <div className="wave" id="wave1" />
    <div className="wave" id="wave2" />
    <div className="wave" id="wave3" />
    <div className="wave" id="wave4" />
  </div> */}
  <ul className="social-icon">
    <li className="social-icon__item"><a className="social-icon__link" href="#">
    <i className="fa-brands fa-facebook text-white icon" />
      </a></li>
    <li className="social-icon__item"><a className="social-icon__link" href="#">
    <i className="fa-brands fa-twitter text-white ms-2 icon" />
      </a></li>
    <li className="social-icon__item"><a className="social-icon__link" href="#">
    <i class="fa-brands fa-linkedin text-white ms-2 icon"></i>
      </a></li>
    <li className="social-icon__item"><a className="social-icon__link" href="#">
    <i class="fa-brands fa-instagram text-white ms-2 icon"></i>
      </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <i class="fa-brands fa-github text-white ms-2 icon"></i>
      </a></li>
  </ul>
  {/* <ul className="menu">
    <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
    <li className="menu__item"><a className="menu__link" href="#">About</a></li>
    <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
    <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
    <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
  </ul> */}
  <p>©2023 SkipTimes | All Rights Reserved</p>
</footer>
 </>
  )
}
