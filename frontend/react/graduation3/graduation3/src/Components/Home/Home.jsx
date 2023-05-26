import React, { Component } from 'react'
import 'animate.css/animate.min.css';
import 'animate.css/animate.min.css';
// import logo from '../../images/logo.jpg'
// import Homepage3 from '../../images/Home page 1.png'
// import Homepage1 from '../../images/Home page 2.jpg'
// import Homepage4 from '../../images/Home page 3.jpeg'
// import lastpage from '../../images/Home page 4.jpg'
// import left2 from '../../images/patient.jpg'
// import Home3 from '../../images/Doctor.jpg'
// import Hom3 from '../../images/volunter.jpg'
// import newmod from '../../images/HealthCenter.jpg'
// import newprec from '../../images/'
import volunter2 from '../../images/volunter2.jpg'
import Doctor  from '../../images/Doctor.jpg'
import volunter from '../../images/volunter.jpg'
import HealthCenter from '../../images/HealthCenter.jpg'
import Homepage1 from'../../images/Home page 1.png'
import Homepage2 from'../../images/prec2-removebg-preview.png'
import newmod from '../../images/brain2-removebg-preview.png'
import newprec from'../../images/prec1-removebg-preview.png'
// import Hom3new from '../../images/Hom3-new.PNG'
import newlog from '../../images/newlog-removebg-preview.png'
import pic8 from '../../images/Picture8.png'
import pic9 from '../../images/Picture9.png'
import pic10 from '../../images/Picture10.png'
import pic11 from '../../images/Picture11.png'
import pic1 from '../../images/Picture1.png'
import pic2 from '../../images/Picture2.png'
import pict6 from '../../images/Picture6.jpg'
import pict12 from '../../images/Picture12.png'
import pict3 from '../../images/Picture3.png'
import pict7 from '../../images/Picture7.png'
import pict4 from '../../images/Picture4.png'
import Picture5 from '../../images/Picture5.png'
import lastModel from '../../images/lastmodel4 (2).jpg'
import lastprec from '../../images/lastprec2 (1).jpg'
import Picture5t from '../../images/Picture5t.png'
import Picture7t from '../../images/Picture7t.png'
import Picture8 from '../../images/Picture8.tpng.png'
import Picture2t from '../../images/Picture2t.png'
import Picture10t from '../../images/Picture10t.png'
import Picture3t from '../../images/Picture3t.png'
import Picture1t from '../../images/Picture1t.png'
import Picture4t from '../../images/Picture4t.png'
import TeamN from '../../images/TeamN3.jpg'
export default class Home extends Component {
  render() {
    return (
     <>
     {/* start Home Page */}
<div className='Home'>
  {/* start Home-content */}
  <div className='content mt-5'>
  <div className='container'>
    <div className='row d-flex justify-content-between'>
      <div className='col-md-6 col-sm-6 left-content mt-5'>
<h1 className=''>
  Revive My Memory<span aria-busy="true" aria-label="Loading" role="progressbar" class="container">
  <div class="swing">
    <div class="swing-l"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="swing-r"></div>
  </div>
 </span>
</h1>
<p className='mb-5 text-muted p-1'>
Memory Recovery is the goal we work to protect patients<br></br>
 aged 50 to 70. From Alzheimer's injury<br></br>
 The brain is always active, even during sleep<br></br>
  However, certain activities can engage the brain in new ways<br></br>
   potentially leading to improvements in memory, cognitive function, or creativity.
</p>
      </div>
      <div className='col-md-6 right-content'>
        <div className='gallary-parent row d-flex justify-content-between'>
            
        </div>
        <div className='gallary'>
          <p>
            <img src={Homepage1}></img>
            <span className='ms-5 mt-2'>
          <img src={Homepage2} height="130px"></img>
          </span>
          </p>
          <p>
            <img src={newmod}></img>
            <span className='ms-5 mt-2'>
          <img src={newprec}></img>
          </span>
          </p>
        </div>
        </div>
    </div>
  </div>
</div>

  {/* end Home-content */}
</div>
  {/*start Home part2 */}
   <div className='Home-part2 mt-5 mb-5'>
    <div className='container'>
    <div className='row d-flex justify-content-between'>
    <div className='left-part2 col-md-6 newlog'>
      <img src={newlog} alt="" className='mt-5 w-75'/>
    </div>
    <div className='right-part2 col-md-6 '>
      <h2 className='text-primary mb-2 ms-3'>Revive My Memory</h2>
      <p className='mb-2 mt-3 p-part2 text-muted ms-3'>
      Mild cognitive impairment (MCI) is the stage between<br></br> the expected decline in memory and thinking that happens<br></br> with age and the more serious decline of dementia.<br></br> MCI may include problems with memory, language<br></br>People with MCI may be aware that their memory<br></br> or mental function has "slipped."
      </p>
      <button className='btn btn-primary me-3 mt-3 ms-3'>Register</button>
      <a href='https://www.mayoclinic.org/diseases-conditions/alzheimers-disease/symptoms-causes/syc-20350447'>
      <button className='btn btn-primary me-3 mt-3'>Learn More</button>

      </a>
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
      {/* <img src={TeamN}className='me-5 w-100 mt-5 'height="500px"></img> */}
      <div>
      <img className="team-member-image w-25 animate__animated animate__fadeIn " src={Picture5t} />
      <img className="team-member-image w-25 animate__animated animate__fadeIn" src={Picture7t} />
      <img className="team-member-image w-25 animate__animated animate__fadeIn" src={Picture1t} />
      </div>
      <div>
      <img className="team-member-image w-25 animate__animated animate__fadeIn" src={Picture2t} />
      <img className="team-member-image w-25 animate__animated animate__fadeIn" src={Picture4t} />
      <img className="team-member-image w-25 animate__animated animate__fadeIn" src={Picture3t} />
      </div>
      </div>

      <div className='right-part3 col-md-6'>
        <p className='text-muted fs-4 mt-2 p-3'>
        We are Trying to assist The MCI Patient To commit to Daily Routine and Reminding Him of the Important Events. developing new skills and volunteering to the community to end Their difficultycoming up with words.Through The MRi and pet scans, We can classify whetherThe damaged Part Of The memory is MCI(Not Treatable) or other(Treatable),So We can Help The Doctor To diagones The Patient efficiently.
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
      <h2 className="text-center text-primary fw-bold Tec mb-5">Our Technologies</h2>
{/* <img src={Hom3new} className='w-100'></img> */}
<div className='row Main ms-auto img-box'>
  <div className='part1 col-md-4'>
<img src={pic10} className="w-25"id='flutter'></img>
<img src={pic9} className="w-25"id='flutter'></img>
<img src={pic8} className="w-25"id='flutter'></img>
<img src={pic11} className="reactp ms-5 mb-5 mt-5 "id='flutter'></img>
  </div>
  <div className='part2 col-md-4'>
  <img src={pic1} className="w-75"id='Github'></img>
  </div>
  

  <div className='part3 col-md-4'>
  <img src={pic2} className="w-75"id='flutter'></img>
  </div>
  <div className='part3 col-md-4'>
  <img src={pict12} className="w-50 ms-5"id='flutter'></img>
  </div>
  <div className='part3 col-md-4 '>
  <img src={pict6} className="mt-5 ms-5"id='anim3'></img>
  </div>
  <div className='part3 col-md-4'>
  <img src={pict3} className="w-75 mt-5 ms-5"id='flutter'></img>
  </div>
  <div className='part4 col-md-4'>
  <img src={pict7} className="w-50 mt-5 ms-5"id='flutter'></img>
  </div>
  <div className='part4 col-md-4'>
  <img src={pict4} className="w-50 ms-5"id='python'></img>
  </div>
  <div className='part4 col-md-4'>
  <img src={Picture5} className="w-75 ms-5 "id='flutter'></img>
  </div>
</div>
    </div>
  </div>
</div>
    {/*end Home part4 */}

    {/*start part 5*/}
<div className='Home-part5 mb-5 mt-5'>
  <div className='container'>
  <h2 className="text-center text-primary text-center fw-bold mb-5">Model & Breclete</h2>
  <div className='row d-flex justify-content-around align-items-center mt-5 mb-5'>
<div className='lef-card col-md-6 gy-5'>
<div className="card p-3" >
  <img src={lastModel} className="card-img-top w-100" alt="..."></img>
  <h2 className='text-center fw-bold mt-4'>Classification Model</h2>
  <p>is a machine learning Algorithm Help us To Know More About The type of data</p>
  <div className="card-body">
    <h5 className="card-title fw-bold">Model Details</h5>
    <p className="card-text">AI systems work by combining large sets of data with intelligent, iterative processing algorithms</p>
    <span>for more information go to</span><a href="#" className="btn btn-primary ms-3">MemoAi</a>
  </div>
</div>
</div>
<div className='right-card col-md-6 gy-5'>
<div className="card p-3" >
  <img src={lastprec} className="card-img-top w-100" alt="..."></img>
  <h2 className='text-center fw-bold mt-4'>How Memory Works</h2>
  <p>
  the bracelet uses biometric sensors that measure the wearer’s heart rate, heart rate variability
  </p>
  <div className="card-body">
    <h5 className="card-title fw-bold">Breclete</h5>
    <p className="card-text">there are some senarios for How Breclete Works And deal with Patient.</p>
   <span> for more information go to</span> 
   <a href="#" className="btn btn-primary ms-3">Breclete Details</a>
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
    <h2 className='text-center text-primary fw-bold mt-5 mb-5'><i class="fa-solid fa-arrows-rotate text-black"></i>Be A part of Revive Memory 2023<i class="fa-solid fa-arrows-rotate text-black"></i></h2>
    {/* <div className='row d-flex justify-content-between'>
      <div className='last-left1 col-md-6 gy-5'>
      <div className="card p-3" >
      <a href="#"className="btn btn-primary m-auto p-2
            mt-3 mb-4">Doctor Name <i className="fa-solid fa-plus ms-2"></i></a>
  <img src={Doctor} className="card-img-top" alt="..."></img>
  <div className="card-body">

    <p className="card-text">
    Hello my name,s Mark I,m a doctor of al zahaimer<br></br> I can Treat More than Patient
    </p>
   <p>
   <span>You can connect Dirctly to Doctor</span> 
   <a href="#" className="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i className="fa-brands fa-facebook text-primary "></i>
                <i className="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i className="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
      </div>
      <div className='last-right1 col-md-6 gy-5'>
      <div className="card p-3" >
      <a href="#"className="btn btn-primary m-auto p-2
            mt-3 mb-4">Patient Name <i className="fa-solid fa-plus ms-2"></i></a>
  <img src={volunter2} className="card-img-top" alt="..."></img>
  <div className="card-body">

    <p className="card-text">Hello my name,s Adam I,m a patient of al zahaimer I need Aperson for ito interested to what I do</p>
   <p>
   <span>You can connect Dirctly to Patient</span> 
   <a href="#" className="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i className="fa-brands fa-facebook text-primary "></i>
                <i className="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i className="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
        </div>
        <div className='last-left2 col-md-6 gy-5'>
      <div className="card p-3" >
      <a href="#"className="btn btn-primary m-auto p-2
            mt-3 mb-4">Volunter Name <i className="fa-solid fa-plus ms-2"></i></a>
  <img src={volunter} className="card-img-top" alt="..."></img>
  <div className="card-body">

    <p className="card-text">
    Hello my name,s William I,m a Volunter of al zahaimer<br></br> I can help patient for 8 Hours EveryDaY
    </p>
   <p>
   <span>You can connect Dirctly to Volunter</span> 
   <a href="#" className="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i className="fa-brands fa-facebook text-primary "></i>
                <i className="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i className="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
        </div>
        <div className='last-left2 col-md-6 gy-5'>
      <div className="card p-3" >
      <a href="#"className="btn btn-primary m-auto p-2
            mt-3 mb-4">Health center <i className="fa-solid fa-plus ms-2"></i></a>
  <img src={HealthCenter} className="card-img-top" alt="..."></img>
  <div className="card-body">

    <p className="card-text">
    Hello my name,s William I,m a Volunter of al zahaimer<br></br> I can help patient for 8 Hours EveryDaY
    </p>
   <p>
   <span>You can connect Dirctly to Volunter</span> 
   <a href="#" className="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i className="fa-brands fa-facebook text-primary "></i>
                <i className="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i className="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
        </div>
    </div> */}
    <div className='row d-flex justify-content-between'>
      <div className='col-md-3 gy-5'>
      <div class="card">
  <div class="card-body p-2">
    <h5 class="card-title text-center text-primary">part of Dotor</h5>
    <p class="card-text">
    Alzheimer’s disease (AD) is an irreversible brain disease. It slowly destroys a person’s mind and their ability to complete everyday tasks. There is currently no cure for AD.
Doctors diagnose AD by performing physical examinations, conducting tests, noting behavior changes, and assessing memory impairment. There are many types of doctors who can diagnose and treat AD.
If you’re worried a loved one might have AD, read on to see which doctors might be involved in treating the disease and how to find the right specialists.
    </p>
    <button className='btn btn-primary btn-patient p-2 mt-2'>Connect to Doctor</button>
  </div>
</div>
      </div>
      <div className='col-md-3 gy-5'>
      <div class="card">
  <div class="card-body p-2 test-7">
    <h5 class="card-title text-center text-primary">part of patient</h5>
    <p class="card-text ">
    During the later stages of Alzheimer’s disease, a person may lose the ability to move and spend much of his or her time in a bed or chair. This lack of movement can cause problems such as pressure sores or bedsores, and stiffness of the arms, hands, and legs.
If the person with Alzheimer’s cannot move around on his or her own, contact a home health aide, physical therapist, or nurse for help. These professionals can show you how to move the person safely physical therapist can also show In the UK, the National Institute for Health and Care Excellence (NICE)
    </p>
 <a href='#'>
  <button className='btn btn-primary btn-patient p-2 mt-2'>Connect to Patient</button>
 </a>
  </div>
</div>
      </div>
      <div className='col-md-3 gy-5'>
      <div class="card">
  <div class="card-body test-7">
    <h5 class="card-title text-center text-primary">part of volunter</h5>
    <p class="card-text">
    Alzheimer's Association volunteers deliver support and education, raise funds, advocate for Alzheimer’s and more to help achieve our vision of a world without Alzheimer’s and all other dementia®. Whatever your skills and whatever time you have available, we have in-person and virtual opportunities to provide vital support for people living with Alzheimer's and their families.
    At the Alzheimer's Association, we believe that diverse perspectives are critical to achieving health equity And More than others 
    </p>
    <button className='btn btn-primary btn-patient py-2 mt-3'>Connect to Volunter</button>
  </div>
</div>
      </div>
      <div className='col-md-3 gy-5'>
      <div class="card">
  <div class="card-body test-7">
    <h5 class="card-title text-center text-primary">part of contributers</h5>
    <p class="card-text">
    Aim and objective: This study aimed to identify the variables that contributed to Quality of Life (QoL) of Alzheimer’s Disease (AD) caregivers, taking into consideration the caregiving context, stressors, role strains, and resources. Methods: The sample included 102 caregivers of AD patients who answered the following instruments: Depression, Anxiety and Stress Scale-21; Satisfaction with Social Support Scale; Revised Memory and Behavioral Problems Checklist; Family Communication
    </p>
    <button className='btn btn-primary btn-patient p-2 mt-3'>Connect with conributers</button>
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
