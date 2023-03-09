import React, { Component } from 'react'
import logo from '../../images/logo.jpg'
import Homepage3 from '../../images/Home page 3.jpg'
import Homepage1 from '../../images/Home page1.jpg'
import Homepage4 from '../../images/Home page 4.jpg'
import lastpage from '../../images/lastpage.jpg'
import left2 from '../../images/left2.png'
import Home3 from '../../images/Home-part3.jpg'
import Hom3 from '../../images/Hom3-new.PNG'
import newmod from '../../images/new-model.jpg'
import newprec from '../../images/new-pracelete.jpg'
import volunter2 from '../../images/volunter2.jpg'
import Doctor  from '../../images/Doctor.jpg'
import volunter from '../../images/volunter.jpg'
import HealthCenter from '../../images/HealthCenter.jpg'
export default class Home extends Component {
//   state={
//     name:'esmael',
//     count:0,
//   }
//   ChangeCount=()=>{
//     this.state.count=10;
// this.setState({count:this.state.count});
//   }
  render() {
    return (
<>
{/* start Home Page */}
<div className='Home'>
 {/* start Navbar */}
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
     <img src={logo} className='logo ms-4'></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Memo-AI</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">How It Works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Chat Memory</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Solution</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 {/* end Navbar */}

  {/* start Home-content */}
  <div className='content mt-5'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-6 left-content mt-5'>
<h1>
  Revive My Memory 
</h1>
<p className='mb-5 text-muted'>
Memory Recovery is the goal we work to protect patients<br></br>
 aged 50 to 70. From Alzheimer's injury<br></br>
 The brain is always active, even during sleep<br></br>
  However, certain activities can engage the brain in new ways<br></br>
   potentially leading to improvements in memory, cognitive function, or creativity.
</p>
<button className='btn btn-primary me-4 mt-5'>Login</button>
<button className='btn btn-light mt-5'>SignUp</button>
      </div>
      <div className='col-md-6 right-content'>
        <div className='gallary'>
          <p>
            <img src={Homepage3}></img>
            <span className='ms-5 mt-2'>
          <img src={Homepage4}></img>
          </span>
          </p>
          <p>
            <img src={Homepage1}></img>
            <span className='ms-5 mt-2'>
          <img src={lastpage}></img>
          </span>
          </p>
        </div>
        </div>
    </div>
  </div>
</div>

  {/* end Home-content */}
</div>
  {/* start Home part2 */}
  <div className='Home-part2 mt-5 mb-5'>
    <div className='container'>
    <div className='row d-flex justify-content-between'>
    <div className='left-part2 col-md-6'>
<img src={left2}className='me-5'></img>
    </div>
    <div className='right-part2 col-md-6 '>
      <h2 className='text-primary mb-2 mt-5'>Revive My Memory</h2>
      <p className='text-primary mb-2 mt-3 p-part2'>
      Mild cognitive impairment (MCI) is the stage between<br></br> the expected decline in memory and thinking that happens<br></br> with age and the more serious decline of dementia.<br></br> MCI may include problems with memory, language<br></br>People with MCI may be aware that their memory<br></br> or mental function has "slipped."
      </p>
      <button className='btn btn-primary me-3 mt-3'>Register</button>
      <button className='btn btn-secondary mt-3'>Learn More</button>
      </div>
  </div>
    </div>
</div>
    {/* end Home part2 */}

    {/*start Home part3 */}
<div className='Home-part3 mb-5 '>
  <div className='container'>
    <div className='row d-flex justify-content-evenly align-items-center'>
<h2 className='text-center mb-5 fw-bold text-primary'>Our Team</h2>
      <div className='left-part3 col-md-6'>
        <img src={Home3}></img>
      </div>

      <div className='right-part3 col-md-6'>
        <p className='text-muted fs-4 mt-2'>
        We Are Trying to assist The Mci Patient To commit to daily routine<br></br> and reminding him of the important events. developing new skills<br></br> and volunteering to the community to end Their difficulty<br></br> coming up with words.Through The MRi and pet scans, We can classify<br></br> whetherThe damaged Part Of The memory is MCI(Not Treatable)<br></br> or other(Treatable),So We can Help The Doctor To diagones The Patient efficiently.
        </p>
      </div>

    </div>
  </div>
</div>
    {/*End Home part3 */}

    {/*start Home part4 */}
<div className='Home-part4 mb-5'>
  <div className='container'>
    <div className='row d-flex justify-content-evenly align-items-center'>
      <h2 class="text-center text-danger fw-bold Tec mb-5">Our Technologies</h2>
<img src={Hom3} className='w-100'></img>
    </div>
  </div>
</div>
    {/*end Home part4 */}

    {/*start part 5*/}
<div className='Home-part5 mb-5 mt-5'>
  <div className='container'>
  <h2 class="text-center text-primary text-center fw-bold mb-5">Model & Breclete</h2>
  <div className='row d-flex justify-content-around align-items-center mt-5 mb-5'>
<div className='lef-card col-md-6'>
<div class="card p-3" >
  <h2 className='text-center fw-bold'>Classification Model</h2>
  <p className='text-muted'>is a machine learning Algorithm Help us To Know More About The type of data</p>
  <img src={newmod} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Model Details</h5>
    <p class="card-text">AI systems work by combining large sets of data with intelligent, iterative processing algorithms</p>
    <span>for more information go to</span><a href="#" class="btn btn-primary ms-3">MemoAi</a>
  </div>
</div>
</div>
<div className='right-card col-md-6'>
<div class="card p-3" >
  <h2 className='text-center fw-bold'>How Memory Works</h2>
  <p>
  the bracelet uses biometric sensors that measure the wearer’s heart rate, heart rate variability
  </p>
  <img src={newprec} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Breclete</h5>
    <p class="card-text">there are some senarios for How Breclete Works And deal with Patient.</p>
   <span> for more information go to</span> 
   <a href="#" class="btn btn-primary ms-3">Breclete Details</a>
  </div>
</div>
</div>
  </div>
  </div>
</div>
    {/*End part5*/}
    {/*start Home part 6 */}
<div className='last-part mb-5'>
  <div className='container'>
    <h2 className='text-center text-primary fw-bold mt-5 mb-5'>Whole system</h2>
    <div className='row d-flex justify-content-between'>
      <div className='last-left1 col-md-6 gy-5'>
      <div class="card p-3" >
      <a href="#"class="btn btn-primary m-auto p-2
            mt-3 mb-4">Doctor Name <i class="fa-solid fa-plus ms-2"></i></a>
  <img src={Doctor} class="card-img-top" alt="..."></img>
  <div class="card-body">

    <p class="card-text">
    Hello my name,s Mark I,m a doctor of al zahaimer<br></br> I can Treat More than Patient
    </p>
   <p>
   <span>You can connect Dirctly to Doctor</span> 
   <a href="#" class="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i class="fa-brands fa-facebook text-primary "></i>
                <i class="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i class="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
      </div>
      <div className='last-right1 col-md-6 gy-5'>
      <div class="card p-3" >
      <a href="#"class="btn btn-primary m-auto p-2
            mt-3 mb-4">Patient Name <i class="fa-solid fa-plus ms-2"></i></a>
  <img src={volunter2} class="card-img-top" alt="..."></img>
  <div class="card-body">

    <p class="card-text">Hello my name,s Adam I,m a patient of al zahaimer I need Aperson for ito interested to what I do</p>
   <p>
   <span>You can connect Dirctly to Patient</span> 
   <a href="#" class="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i class="fa-brands fa-facebook text-primary "></i>
                <i class="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i class="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
        </div>
        <div className='last-left2 col-md-6 gy-5'>
      <div class="card p-3" >
      <a href="#"class="btn btn-primary m-auto p-2
            mt-3 mb-4">Volunter Name <i class="fa-solid fa-plus ms-2"></i></a>
  <img src={volunter} class="card-img-top" alt="..."></img>
  <div class="card-body">

    <p class="card-text">
    Hello my name,s William I,m a Volunter of al zahaimer<br></br> I can help patient for 8 Hours EveryDaY
    </p>
   <p>
   <span>You can connect Dirctly to Volunter</span> 
   <a href="#" class="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i class="fa-brands fa-facebook text-primary "></i>
                <i class="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i class="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
        </div>
        <div className='last-left2 col-md-6 gy-5'>
      <div class="card p-3" >
      <a href="#"class="btn btn-primary m-auto p-2
            mt-3 mb-4">Health center <i class="fa-solid fa-plus ms-2"></i></a>
  <img src={HealthCenter} class="card-img-top" alt="..."></img>
  <div class="card-body">

    <p class="card-text">
    Hello my name,s William I,m a Volunter of al zahaimer<br></br> I can help patient for 8 Hours EveryDaY
    </p>
   <p>
   <span>You can connect Dirctly to Volunter</span> 
   <a href="#" class="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i class="fa-brands fa-facebook text-primary "></i>
                <i class="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i class="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
        </div>
    </div>
  </div>
</div>
    {/*End Home part 6 */}

    {/*start footer*/}
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Our Center</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online Call</h4>
  	 			<ul>
  	 				<li><a href="#">Admin</a></li>
  	 				<li><a href="#">Doctor</a></li>
  	 				<li><a href="#">Patient</a></li>
  	 				<li><a href="#">Volunter</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    {/*end footer */}
</>
    )
  }
}
