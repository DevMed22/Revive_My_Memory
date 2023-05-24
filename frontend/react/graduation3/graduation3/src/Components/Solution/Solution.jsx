import React, { Component } from 'react'
import logo3 from '../../images/logo3.png'
import video from '../../images/video.mp4'
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider3.jpg'
import slider4 from '../../images/slider4.jpeg'
import donation1 from '../../images/donation1.jfif'
import donation from '../../images/donation.mp4'
import Beta from '../../images/Beta.png'
import MRI2 from '../../images/MRI2.png'
import asociation from '../../images/asociation.jpg'
import Tauprotein from '../../images/Tauprotein.jfif'
import Amyloid_Scans from '../../images/Amyloid_Scans.jpg'
import national from '../../images/national.png'
import inhibitors from '../../images/inhibitors.jpg'
import functionalMRI from '../../images/functionalMRI.jpg'
import drugs from '../../images/drugs.jpg'
import contributer from '../../images/contributer.jpg'
import test from '../test'
import contributer2 from '../../images/contributer2.jpg'
export default class Solution extends Component {

  
  render() 
  {
    return (
    <>
    
    <div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h3 className="animate-charcter fs-1">  Solutions <span>
        <img src={logo3} alt="logo"width="200px" srcset=""  className="animated-image"/></span> </h3>
    </div>
   <div className='titles'>
    <ul className='anim-ul'>
      <li> <a href="#">patient</a></li>
      <li><a href="#">Doctor</a></li>
      <li><a href="#">Volunter</a></li>
    </ul>
   </div>
  </div>
</div>

<div className='patient-part1 mb-5 mt-5'>

  <div className='container'>
    <div className='row d-flex justify-content-evenly align-items-center'>
      <div className='left-part3 col-md-6'>
      <p className='patient-p'>
        <span className='text-primary fw-bold me-2 '>Patient</span>
     We are committed to providing comprehensive and compassionate care to help our patients achieve optimal health and wellness. Our team of experienced healthcare professionals is dedicated to working closely with patients to develop personalized treatment plans that address their unique needs and concerns. We offer a wide range of medical services, including preventative care, diagnostics, and treatment for acute and chronic conditions. We also provide support and resources for patients and their families to help them navigate the healthcare system and make informed decisions about their care.
        </p>
      </div>

      <div className='right-part3 col-md-6'>
        <h2 className='text-dark fs-4'>How can Alzhimer,s Affect on patient life</h2>
      <video controls width="640" height="360">
  <source src={video} type="video/mp4" />
</video>
      </div>

    </div>
  </div>
</div>
    
     {/* start Doctor section  */}
     <header>
		<nav className='text-center'>
			<ul className='text-center'>
				<li className='text-center'><a href="#eligibility">Eligibility Criteria</a></li>
				<li><a href="#program-details">Program Details</a></li>
				<li><a href="#mci-recognition">MCI Recognition</a></li>
				<li><a href="#career-prospects">Career Prospects</a></li>
			</ul>
		</nav>
	</header>
	<main>
		<section id="eligibility">
			<h2 className='text-dark'>Eligibility Criteria for MD Degree</h2>
			<p>Academic qualifications required for admission to MD program:</p>
			<ul>
				<li>Bachelor of Medicine andBachelor of Surgery (MBBS) degree or equivalent qualification recognized by MCI</li>
				<li>Minimum aggregate marks of50% in MBBS</li>
				<li>Completion of 1-year internship</li>
			</ul>
			<p>Entrance exams and minimum scores required for admission:</p>
			<ul>
				<li>NEET PG (National Eligibility cum Entrance Test for Postgraduate) or other state-level PG medical entrance exams</li>
				<li>Minimum qualifying marks as per the respective exam's cutoff</li>
			</ul>
			<p>Additional eligibility criteria (if any):</p>
			<ul>
				<li>Minimum age limit of 21 years</li>
				<li>Good standing certificate from the previous medical college</li>
			</ul>
		</section>
		<section id="program-details">
			<h2 className='text-dark'>MD Program Details</h2>
			<p>Duration of the program: 3 years</p>
			<p>Specializations offered:</p>
			<ul>
				<li>Internal Medicine</li>
				<li>Pediatrics</li>
				<li>Anesthesiology</li>
				<li>Pathology</li>
				<li>Obstetrics and Gynecology</li>
				<li>Psychiatry</li>
				<li>and more</li>
			</ul>
			<p>Course structure and curriculum:</p>
			<ul>
				<li>Basic and advanced medicalsciences</li>
				<li>Clinical rotations and practical experience in various departments</li>
				<li>Research methodologyand thesis submission</li>
				<li>Elective courses in specialty areas</li>
			</ul>
			<p>Clinical rotations and practical experience:</p>
			<ul>
				<li>1 year of compulsory rotating internship in various departments</li>
				<li>2 years of clinical postings in the chosen specialty area</li>
			</ul>
			<p>Research opportunities and requirements:</p>
			<ul>
				<li>Compulsory research methodology course and thesis submission</li>
				<li>Opportunities for research projects and publications</li>
			</ul>
		</section>
		<section id="mci-recognition">
			<h2 className='text-dark'>MCI Recognition and Importance</h2>
			<p>Overview of MCI and its role in regulating medical education in India:</p>
			<ul>
				<li>Medical Council of India (MCI) is a statutory body established under the Indian Medical Council Act, 1956</li>
				<li>Its main functions include regulating medical education and practice in India, maintaining medical ethics, and ensuring quality healthcare for the public</li>
			</ul>
			<p>Importance of MCI recognition for MD graduates in terms of career prospects and eligibility for medical licensure:</p>			<ul>
				<li>MCI recognition is mandatory for MD graduates to practice medicine in India</li>
				<li>It also ensures that the MD program meets the standards and guidelines set by MCI, which in turn enhances the quality and credibility of the degree</li>
				<li>MD graduates from MCI-recognized programs have better job prospects and higher salaries compared to those from non-recognized programs</li>
			</ul>
			<p>Steps involved in obtaining MCI recognition for MD degree:</p>
			<ul>
				<li>MD program must be affiliated with a university or institution approved by MCI</li>
				<li>The program must comply with the MCI regulations and guidelines related to faculty, infrastructure, curriculum, and assessments</li>
				<li>Application for MCI recognition must be submitted along with the required documents and fees</li>
				<li>Inspection and assessment of the program by MCI officials</li>
				<li>Approval and recognition of the program by MCI</li>
			</ul>
		</section>
		<section id="career-prospects">
			<h2 className='text-dark'>Career Prospects for MD Graduates</h2>
			<p>Overview of job opportunities for MD graduates in India:</p>
			<ul>
				<li>MD graduates can work as specialists in various healthcare settings, including hospitals, clinics, and private practice</li>
				<li>They can also pursue academic and research careers in medical colleges and institutions</li>
				<li>Some of the popular job roles for MD graduates include physician, consultant, professor, researcher, and medical officer</li>
			</ul>
			<p>Salary range for MD graduates in India:</p>
			<ul>
				<li>The starting salary for MD graduates in India can range from Rs. 50,000 to Rs. 1 lakh per month, depending on the specialty area and the employer</li>
				<li>Experienced MD graduates and those with additional qualifications can earn higher salaries, up to Rs. 2-3 lakhs per month</li>
			</ul>
			<p>Future prospects and trends in the field:</p>
			<ul>
				<li>The demand for qualified and skilled medical professionals, including MD graduates, is expected to increase in the coming years due to factors such as the growing population, aging population, and increasing healthcare needs</li>
				<li>Emerging areas of specialization and research in the field of medicine, such as genomics, personalized medicine, and digital health, offer new opportunities for MD graduates to explore and contribute to</li>
			</ul>
		</section>
	</main>

     {/* end Doctor section */}

     {/**start volunter section */}

    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Health Center</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Doctors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
 
 <div id="carouselExampleIndicators" class="carousel slide carousel-container ">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
     <div>
     <img src={slider1}  class="d-block w-100" alt="..."/>
     <div class="carousel-caption d-none d-md-block">
     <h2 className='text-white fw-bold'>Doct <span className='text-danger'>or</span></h2>
        <p className='text-dark fw-bold fs-3'>A doctor is a license<span className='text- fw-bold'>d</span> medical professional who diagnoses and treats patients for vario<span className='text-danger'>u</span>s illnesses and injuries. .</p>
      </div>
     </div>
    </div>
    <div class="carousel-item">
    <img src={slider2}  class="d-block w-100"width="800px"height="500px" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
    <h2 className='text-white fw-bold'>patie<span className='text-danger'>nt</span></h2>
        <p className='fs-5'>A patient is an individual who seeks medical care from a healthcare provider, such as a doctor or nurse. </p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={slider3}  class="d-block w-100"alt="..."/>
    <div class="carousel-caption d-none d-md-block">
        <h2>Healthcenter </h2>
        <p className='text-white fw-bold'>A health center is a facility that provides medical, dental, and/or behavioral health services to patients in a particular community</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={slider4}  class="d-block w-100"alt="..."/>
    <div class="carousel-caption d-none d-md-block">
        <h2>Volunter</h2>
        <p className='text-white fw-bold'>A volunteer is an individual who donates their time and skills to support a cause or organization without receiving monetary compensation.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/**start Donation section */}
<div className='container'>
    <div className='row d-flex justify-content-evenly align-items-center'>
<section id="alzheimers-donation"className='mt-5'>
  <div className='col-lg-10 col-md-6 col-sm-6 m-auto'>
  <h3 className='text-center'>Donating to Patients with Alzheimer's Disease</h3>
  <p className='text-center fs-5'>Alzheimer's disease is a debilitating neurological condition that affects millions of people worldwide. Patients with Alzheimer's may experience memory loss, confusion, difficulty with language and communication, and other cognitive impairments.</p>
  </div>
  
  <h3>Ways to Donate</h3>
  <div className='row d-flex justify-content-evenly align-items-center'>
  <div className='left-d col-md-6 '>
  <ol>
    <li className="fade-in">
    {/* <img src={donation1}alt="Alzheimer's disease"/> */}
      <h4 className='fw-bold'>Donate to Alzheimer's research organizations</h4>
      <p>There are many non-profit organizations dedicated to funding research to better understand the causes and potential treatments for Alzheimer's disease. These organizations include the <a href="https://www.alz.org/" target="_blank">Alzheimer's Association</a>, the <a href="https://curealz.org/" target="_blank">Cure Alzheimer's Fund</a>, and the <a href="https://www.alzdiscovery.org/" target="_blank">Alzheimer's Drug Discovery Foundation</a>.</p>
    </li>
    <li className="fade-in">
      <h4 className='fw-bold'>Support Alzheimer's patient care organizations</h4>
      <p>There are also many non-profit organizations that provide support services and resources to Alzheimer's patients and their families. These organizations include the <a href="https://alzfdn.org/" target="_blank">Alzheimer's Foundation of America</a>, the <a href="https://www.alzheimers.org.uk/" target="_blank">Alzheimer's Society</a>, and the <a href="https://www.lbda.org/" target="_blank">Lewy Body Dementia Association</a>.</p>
    </li>
    <li className="fade-in">
      <h4 className='fw-bold'>Participate in Alzheimer's fundraising events</h4>
      <p>Many organizations host fundraising events, such as walks or runs, to raise money for Alzheimer's research and patient care. Participating in these events or donating to a friend or family member who is participating can be a great way to contribute to the cause.</p>
    </li>
    <li className="fade-in">
      <h4 className='fw-bold'>Consider donating to local care facilities</h4>
      <p>You can also consider donating to local care facilities that provide specialized care for Alzheimer's patients. These facilities may need funding for programs and activities that can help improve the quality of life for patients and their families.</p>
    </li>
  </ol>
  </div>
  <div className='right-d col-6 '>
    <img src={donation1} alt="" srcset="" />
    <video controls width="500" height="360">
  <source src={donation} type="video/mp4" />
</video>
    </div>
    </div>
  <p className='text-center fw-bold mt-4'>By donating to organizations that support Alzheimer's research and patient care, you can help improve the lives of those affected bythis disease. Every donation, no matter how small, can make a difference in the fight against Alzheimer's.</p>
</section>
</div>
</div>
{/**End Donation section */}

{/**start of contributers section  */}
<div className='contributers'>
  <div className='container'>
<div className='row d-flex justify-content-between'>
  <h2 className='text-center text-dark mt-5 mb-5'>Welcome To Contributers Examinations</h2>
  <div className='l1 col-md-4'>
  <div class="card">
    <img src={Beta} width="300px" alt="" />
          <h4 class="card-title fw-bold">Beta-Amyloid Plaque Inhibitors</h4>
          <p class="card-text">These drugs work by blocking the buildup of beta-amyloid plaques in the brain, which are a hallmark of Alzheimer's disease. Examples include Aducanumab and Solanezumab.</p>
          </div>
          <div class="card">
          <img src={Tauprotein} width="300px"height="277px" alt="" />
          <h4 class="card-title fw-bold">Tau Protein Inhibitors</h4>
          <p class="card-text">These drugs work by blocking the accumulation of tau proteins in the brain, which are also associated with Alzheimer's disease. Examples include LMTX and TRx0237.</p>
        </div>
        <div class="card">
        <img src={inhibitors} width="300px"height="277px" alt="" />
          <h4 class="card-title fw-bold">Cholinesterase Inhibitors</h4>
          <p class="card-text">These drugs work by increasing the levels of acetylcholine, a chemical messenger that is important for memoryand learning. Examples include Donepezil, Galantamine, and Rivastigmine.</p>
        </div>
  </div>
  <div className='l1 col-md-4'>
  <div class="card">
  <img src={MRI2} width="300px"height="278px" alt="" /> 
          <h4 class="card-title fw-bold">Structural MRI</h4>
          <p class="card-text">This type of scan uses magnetic fields and radio waves to create detailed images of the brain's structure, which can help detect changes associated with Alzheimer's disease.</p>
        </div>
        <div class="card">
        <img src={Amyloid_Scans} width="300px"height="278px" alt="" /> 
          <h4 class="card-title fw-bold">PET Scan with Amyloid Tracers</h4>
          <p class="card-text">This type of scan uses a special dye that binds to beta-amyloid plaques in the brain, which can help detect their presence and location and impact of it if it occurs.</p>
        </div>
        <div class="card">
        <img src={functionalMRI} width="300px"height="275px" alt="" /> 
          <h4 class="card-title fw-bold">Functional MRI</h4>
          <p class="card-text">This type of scan measures changes in blood flow to different areas of the brain, which can help identify regions that are affected by Alzheimer's disease and monitor changes over time.</p>
        </div>
  </div>
  <div className='l1 col-md-4'>
  <div class="card">
  <img src={asociation} width="300px"height="278px" alt="" /> 
          <h4 class="card-title fw-bold">Alzheimer's Association</h4>
          <p class="card-text">A non-profit organization dedicated to advancing research, providing support and resources to those affected by Alzheimer's disease, and promoting brain health.</p>
        </div>
        <div class="card">
        <img src={national} width="300px"height="278px" alt="" /> 
          <h4 class="card-title fw-bold">National Institute on Aging</h4>
          <p class="card-text">A federal agency that supports and conducts research on aging and age-related diseases, including Alzheimer's disease and a lot of other dieases.</p>
        </div>
        <div class="card">
        <img src={drugs} width="300px"height="278px" alt="" /> 
          <h4 class="card-title fw-bold">Pharmaceutical Companies</h4>
          <p class="card-text">Numerous pharmaceutical companies are involved in developing drugs and treatments for Alzheimer's disease, including Biogen, Eli Lilly, and Pfizer, and a lot of others.</p>
        </div>
  </div>
</div>
  </div>
</div>
<h2 className='text-center text-dark mt-5 mb-5'>Contributers Form</h2>
<div className='container'>
<div className='row d-flex justify-content-between '>
  {/* <div className='conributer-photo col-md-6'>
  <img src={contributer} className='w-100' alt="" srcset="" />
  </div> */}

  <div className='contributer-form col-lg-12 m-auto col-md-6'>
  <div class="formbold-main-wrapper">

  <div class="formbold-form-wrapper">
    
  <img src={contributer2} className='w-100' alt="" srcset="" />

    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="formbold-form-title">
        <h3 className="text-dark fw-bold">Register now</h3>
        <p>
        Thank you for your interest in contributing to our project. Please fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div class="formbold-input-flex">
        <div>
          <label for="firstname" class="formbold-form-label">
            First name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            class="formbold-form-input"
          />
        </div>
        <div>
          <label for="lastname" class="formbold-form-label"> Last name </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            class="formbold-form-input"
          />
        </div>
      </div>

      <div class="formbold-input-flex">
        <div>
          <label for="email" class="formbold-form-label"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            class="formbold-form-input"
          />
        </div>
        <div>
          <label for="phone" class="formbold-form-label"> Phone number </label>
          <input
            type="text"
            name="phone"
            id="phone"
            class="formbold-form-input"
          />
        </div>
      </div>

      <div class="formbold-mb-3">
        <label for="address" class="formbold-form-label">
          Street Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          class="formbold-form-input"
        />
      </div>

      <div class="formbold-mb-3">
        <label for="address2" class="formbold-form-label">
          Street Address Line 2
        </label>
        <input
          type="text"
          name="address2"
          id="address2"
          class="formbold-form-input"
        />
      </div>

      <div class="formbold-input-flex">
        <div>
          <label for="state" class="formbold-form-label"> State/Prvince </label>
          <input
            type="text"
            name="state"
            id="state"
            class="formbold-form-input"
          />
        </div>
        <div>
          <label for="country" class="formbold-form-label"> Country </label>
          <input
            type="text"
            name="country"
            id="country"
            class="formbold-form-input"
          />
        </div>
      </div>

      <div class="formbold-input-flex">
        <div>
          <label for="post" class="formbold-form-label"> Post/Zip code </label>
          <input
            type="text"
            name="post"
            id="post"
            class="formbold-form-input"
          />
        </div>
        <div>
          <label for="area" class="formbold-form-label"> Area Code </label>
          <input
            type="text"
            name="area"
            id="area"
            class="formbold-form-input"
          />
        </div>
      </div>

      <div class="formbold-checkbox-wrapper">
        <label for="supportCheckbox" class="formbold-checkbox-label">
          <div class="formbold-relative">
            <input
              type="checkbox"
              id="supportCheckbox"
              class="formbold-input-checkbox"
            />
            <div class="formbold-checkbox-inner">
              <span class="formbold-opacity-0">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  class="formbold-stroke-current"
                >
                  <path
                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                    stroke-width="0.4"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          I agree to the defined
          <a href="#"> terms, conditions, and policies</a>
        </label>
      </div>

      <button class="formbold-btn">Register Now</button>
    </form>
  </div>
</div>
  </div>
</div>
</div>
{/**end of contributers */}

    </>
    )
  }
}
