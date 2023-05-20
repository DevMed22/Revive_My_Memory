import React, { Component } from 'react'
// import Doctor  from '../../images/Doctor.jpg'
// import Mem1 from '../../images/Ahmed Tarek.PNG'
// import Mem2 from '../../images/omar.PNG'
// import Mem3 from '../../images/t12.PNG'
// import Mem4 from '../../images/amr6.PNG'
// import Mem5 from '../../images/Esmael.PNG'
// import Mem6 from '../../images/Anas2.PNG'
import Picture5t from '../../images/Picture5t.png'
import Picture7t from '../../images/Picture7t.png'
import Picture8 from '../../images/Picture8.tpng.png'
import Picture2t from '../../images/Picture2t.png'
import Picture10t from '../../images/Picture10t.png'
import Picture3t from '../../images/Picture3t.png'
import Picture1t from '../../images/Picture1t.png'
import Picture4t from '../../images/Picture4t.png'
export default class Team extends Component {
  render() {
    return (
  <>
<div className='Team'>
  {/* <div className='container'>
    <div className='row d-flex justify-content-between align-items-center'>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem2} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem3} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem4} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem6} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div> */}
  <div class="responsive-container-block container">
  <p class="text-primary team-head-text">
    Our Team
  </p>
  <div className="responsive-container-block">
  <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
    <div className="card">
      <div className="team-image-wrapper">
        <img className="team-member-image" src={Picture5t} />
      </div>
      <p className="text-blk name">
Ahmed Tarek
      </p>
      <p className="text-blk position">
   Machine learning Engineer
      </p>
      <p className="text-blk feature-text">
     <p><i class="fa-solid fa-check text-success me-2"></i>AWS community builder</p>
     <p><i class="fa-solid fa-check text-success me-1"></i>Data science intern at sparks </p>
     <p><i class="fa-solid fa-check text-success me-2"></i>Mentor with GSSOC'22 </p>
      </p>
      <div className="social-icons text-center">
      {/* <i class="fa-solid fa-file text-primary me-2">
      <a className='text-decoration-none text-muted' href="https://drive.google.com/file/d/1VHZ885xqaex1BQ7avFit8Ysf2K6ZE3lD/view?usp=sharing">Resume</a>
        </i>  */}
     <i class="fa-brands fa-linkedin me-2 text-primary">
     <a className='text-decoration-none text-muted' href="https://www.linkedin.com/in/ahmed-tarek-4135251b3/">Linkedin</a>
     </i>
      <i class="fa-brands fa-github text-primary ">
      <a className='text-decoration-none text-muted' href="https://github.com/ahmedtarek26">GitHub</a>
      </i>
      </div>
    </div>
  </div>
  <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
    <div className="card">
      <div className="team-image-wrapper">
        <img className="team-member-image" src={Picture7t} />
      </div>
      <p className="text-blk name">
     Omar Elsherif
      </p>
      <p className="text-blk position">
     Machine learning Engineer
      </p>
      <p className="text-blk feature-text">
      <i class="fa-solid fa-check text-success me-1"></i> Beta Microsoft Learn
      </p>
      <p className="text-blk feature-text">
      <i class="fa-solid fa-check text-success me-1"></i> GitHub Campus Expert
      </p>
      <p className="text-blk feature-text">
      <i class="fa-solid fa-check text-success me-1"></i> internship at SBOL Industrial 
      </p>
      <div className="social-icons text-center mt-2">
      {/* <i class="fa-solid fa-file text-primary me-2">
      <a className='text-decoration-none text-muted' href="https://drive.google.com/file/d/1Y1dAbrrhQeUaI_ljJgdwdS4WcbfX7kg3/view?usp=sharing">Resume</a>
        </i>  */}
     <i class="fa-brands fa-linkedin me-2 text-primary">
     <a className='text-decoration-none text-muted' href="https://www.linkedin.com/in/omarelsherif010/">Linkedin</a>
     </i>
      <i class="fa-brands fa-github text-primary ">
      <a className='text-decoration-none text-muted' href="https://github.com/Omarelsherif010">GitHub</a>
      </i>
      </div>
    </div>
  </div>
  <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
    <div className="card">
      <div className="team-image-wrapper">
        <img className="team-member-image" src={Picture8} />
      </div>
      <p className="text-blk name">
      Dr. Sara Sweidan
      </p>
      <p className="text-blk position">
      Supervisor
      </p>
      <p className="text-blk feature-text">
      <i class="fa-solid fa-check text-success me-1"></i>   Machine Learning (teacher)
      </p>
      <p className="text-blk feature-text">
      <i class="fa-solid fa-check text-success me-1"></i> Teach at Benha University
      </p>
      <p className="text-blk feature-text">
      <i class="fa-solid fa-check text-success me-1"></i>Teach at is Department
      </p>
      <div className="social-icons text-center mt-2">
      {/* <i class="fa-brands fa-telegram text-primary">
      <a className='text-decoration-none text-muted' href="https://t.me/sweidan2020">Telegram</a>
        </i>  */}
    
      <i class="fa-brands fa-facebook text-primary ms-4 ">
      <a className='text-decoration-none text-muted' href="https://www.facebook.com/sara.sweidan.98?mibextid=ZbWKwL">Facebook</a>
      </i>
      </div>
    </div>
  </div>
  <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
    <div className="card">
      <div className="team-image-wrapper">
        <img className="team-member-image" src={Picture2t} />
      </div>
      <p className="text-blk name">
        Mohamed Wael
      </p>
      <p className="text-blk position">
      DevOps Engineer
      </p>
      <p className="text-blk feature-text ">
    <a href="https://github.com/tabana1/Clinic-Booking "className='text-decoration-none text-muted'>
    <i class="fa-solid fa-check text-success me-1"></i> Link to  Achievements
    </a>
      </p>
      <p className="text-blk feature-text ">
    <a href="https://github.com/DevMed22/Shark-Hacks-4"className='text-decoration-none text-muted'>
    <i class="fa-solid fa-check text-success me-1"></i> Link to  Achievements
    </a>
      </p>
      <p className="text-blk feature-text ">
    <a href="https://github.com/DevMed22/Summer-training-22"className='text-decoration-none text-muted'>
    <i class="fa-solid fa-check text-success me-1"></i> Link to  Achievements
    </a>
      </p>
      <div className="social-icons text-center mt-2">
      {/* <i class="fa-solid fa-file text-primary me-2">
      <a className='text-decoration-none text-muted' href="https://drive.google.com/file/d/146UF9HILYE_E8gl9NjAcQIRGzeD84BAm/view?usp=sharing">Resume</a>
        </i>  */}
     <i class="fa-brands fa-linkedin me-2 text-primary">
     <a className='text-decoration-none text-muted' href="https://www.linkedin.com/in/muhammed-tabana-67953319a/">Linkedin</a>
     </i>
      <i class="fa-brands fa-github text-primary ">
      <a className='text-decoration-none text-muted' href="https://github.com/tabana1">GitHub</a>
      </i>
      </div>
    </div>
  </div>
  <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
    <div className="card">
      <div className="team-image-wrapper">
        <img className="team-member-image" src={Picture10t} />
      </div>
      <p className="text-blk name">
      Eng. AbdulWahab Almestekawy
      </p>
      <p className="text-blk name">
      Supervisor
      </p>
      <p className="text-blk feature-text">
      <i class="fa-solid fa-check text-success me-1"></i> Teach at Benha University
      </p>
      <p className="text-blk feature-text">
      <i class="fa-solid fa-check text-success me-1 mb-2"></i> Assistant professor
      </p>
      <div className="social-icons text-center mt-3">
      <i class="fa-solid fa-file text-primary me-2">
      <a className='text-decoration-none text-muted' href="https://www.facebook.com/AbdulWahab.Almeskekawy?mibextid=ZbWKwL">Facebook</a>
        </i> 
     {/* <i class="fa-brands fa-linkedin me-2 text-primary">
     <a className='text-decoration-none text-muted' href="https://www.linkedin.com/in/muhammed-tabana-67953319a/">Linkedin</a>
     </i>
      <i class="fa-brands fa-github text-primary ">
      <a className='text-decoration-none text-muted' href="https://github.com/tabana1">GitHub</a>
      </i> */}
      </div>
    </div>
  </div>
  <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
    <div className="card">
      <div className="team-image-wrapper">
        <img className="team-member-image" src={Picture3t} />
      </div>
      <p className="text-blk name">
       Amr Atif
      </p>
      <p className="text-blk position">
      Back-End Developer
      </p>
      <p className="text-blk feature-text ">
    <a href="https://github.com/DevMed22/Summer-training-22"className='text-decoration-none text-muted'>
    <i class="fa-solid fa-check text-success me-1"></i> Link to  Achievements
    </a>
      </p>
      <p className="text-blk feature-text ">
    <a href="https://github.com/DevMed22/Hack-and-Welness2"className='text-decoration-none text-muted'>
    <i class="fa-solid fa-check text-success me-1"></i> Link to  Achievements
    </a>
      </p>
      <p className="text-blk feature-text ">
    <a href=""className='text-decoration-none text-muted'>
    <i class="fa-solid fa-check text-success me-1"></i> Link to  Achievements
    </a>
      </p>
      <div className="social-icons text-center mt-2">
      {/* <i class="fa-solid fa-file text-primary me-2">
      <a className='text-decoration-none text-muted' href="https://drive.google.com/file/d/1Uoy2ec2mJyTysKJuwCDAtjbs005dCQXO/view?usp=sharing">Resume</a>
        </i>  */}
     <i class="fa-brands fa-linkedin me-2 text-primary">
     <a className='text-decoration-none text-muted' href="https://www.linkedin.com/in/amr-atif-3b798a209/">Linkedin</a>
     </i>
      <i class="fa-brands fa-github text-primary ">
      <a className='text-decoration-none text-muted' href="https://github.com/amr-atif">GitHub</a>
      </i>
      </div>
    </div>
  </div>
  <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
    <div className="card">
      <div className="team-image-wrapper">
        <img className="team-member-image" src={Picture1t} />
      </div>
      <p className="text-blk name">
     Esmael Mosaad
      </p>
      <p className="text-blk position">
      Front end developer(react)
      </p>
      <p className="text-blk feature-text">
      <i class="fa-solid fa-check text-success me-1"></i> UI/Ux Designer
      </p>
      <p className="text-blk feature-text ">
    <a href="https://github.com/esmael889/final-react-project"className='text-decoration-none text-muted'>
    <i class="fa-solid fa-check text-success me-1"></i> Link to  Achievements
    </a>
      </p>
      <p className="text-blk feature-text ">
    <a href="https://github.com/esmael889/Hack-and-Welness2"className='text-decoration-none text-muted'>
    <i class="fa-solid fa-check text-success me-1"></i> Link to  Achievements
    </a>
      </p>
     
      <div className="social-icons text-center mt-2">
      {/* <i class="fa-solid fa-file text-primary me-2">
      <a className='text-decoration-none text-muted' href="https://drive.google.com/file/d/1qKlO04OhFxPfYvfH8HYESmIJ34AZvAIt/view?usp=sharing">Resume</a>
        </i>  */}
     <i class="fa-brands fa-linkedin me-2 text-primary">
     <a className='text-decoration-none text-muted' href="https://www.linkedin.com/in/esmael-mosaad-758a28247/d-tarek-4135251b3/">Linkedin</a>
     </i>
      <i class="fa-brands fa-github text-primary ">
      <a className='text-decoration-none text-muted' href="https://github.com/esmael889">GitHub</a>
      </i>
      </div>
    </div>
  </div>
  <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
    <div className="card">
      <div className="team-image-wrapper">
        <img className="team-member-image" src={Picture4t} />
      </div>
      <p className="text-blk name">
        Anas Osama
      </p>
      <p className="text-blk position">
      Back-End Developer
      </p>
      <p className="text-blk feature-text ">
    <a href="https://github.com/anasos20/Online_Medicine"className='text-decoration-none text-muted'>
    <i class="fa-solid fa-check text-success me-1"></i> Link to  Achievements
    </a>
      </p>
      <p className="text-blk feature-text ">
    <a href="https://github.com/anasos20/Health-Center"className='text-decoration-none text-muted'>
    <i class="fa-solid fa-check text-success me-1"></i> Link to  Achievements
    </a>
      </p>
      <p className="text-blk feature-text ">
    <a href="https://github.com/anasos20/Blog"className='text-decoration-none text-muted'>
    <i class="fa-solid fa-check text-success me-1"></i> Link to  Achievements
    </a>
      </p>
      <div className="social-icons text-center mt-2">
      {/* <i class="fa-solid fa-file text-primary me-2">
      <a className='text-decoration-none text-muted' href="https://drive.google.com/file/d/1n_jAdriSng2OsJsA1HK0LOV6__xQFFQy/view?usp=sharing">Resume</a>
        </i>  */}
     <i class="fa-brands fa-linkedin me-2 text-primary">
     <a className='text-decoration-none text-muted' href="https://www.linkedin.com/in/anas-osama-4245151a5/">Linkedin</a>
     </i>
      <i class="fa-brands fa-github text-primary ">
      <a className='text-decoration-none text-muted' href="https://github.com/anasos20">GitHub</a>
      </i>
      </div>
    </div>
  </div>
</div>

</div>
</div>

  </>
    )
  }
}
