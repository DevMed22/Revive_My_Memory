import React, { Component } from 'react'
import neuralnwetwork1 from '../../images/neuralnwetwork1.jpg'
// export default class MemoAi extends Component {
//   render() {
//     return (
//       <div>MemoAi</div>
//     )
//   }
// }

export default function MemoAi() {
// Optional: Add a click event listener to the disease headings to toggle the visibility of the symptoms
const diseaseHeadings = document.querySelectorAll('.disease h3');

diseaseHeadings.forEach(heading => {
  heading.addEventListener('click', function() {
    const symptoms = this.nextElementSibling;
    symptoms.classList.toggle('visible');
  });
});
  return (
    <>
<div>
  <div className="container-memo">
    <div className="container_content">
      <div className="container_content_inner">
        <div className="title">
          <h1 className='text-dark slideup-text'>Hello it,s <span className='text-primary fw-bold'>Memo-Ai</span></h1>
        </div>
        <div className="par">
          <p className='text-dark'>
            Cupiditate alias odio omnis minima veritatis saepe porro, repellendus natus vitae, sequi exercitationem ipsam, qui possimus sit eveniet laborum sapiente quisquam quae neque velit? 
          </p>
        </div>
        {/* <div className="btns">
          <button className="btns_more"id="see-more-btn"> See more </button>
        </div> */}
        {/* <div id="additional-content" className='text-dark'>
    <p>This type of neural network architecture is particularly useful for tasks such as image generation or manipulation, where the goal is to produce realistic-looking images that are difficult to distinguish from real ones. GANs have been used to create everything from photorealistic portraits to abstract art.</p>
  </div> */}
      </div>
    </div>
    <div className="container_outer_img">
      <div className="img-inner">
        <img src={neuralnwetwork1} width="600px" />
      </div>
    </div>
  </div>
  <section className='sec-symptoms text-dark'>
  <h1>Memory Diseases Symptoms</h1>
  <div className="disease">
    <h3>Alzheimer's disease</h3>
    <ul>
      <li>Memory loss that disrupts daily life, especially recent events</li>
      <li>Difficulty planning or solving problems</li>
      <li>Difficulty completing familiar tasks</li>
      <li>Confusion with time or place</li>
      <li>Changes in mood or personality</li>
      <li>Poor judgment or decision-making</li>
    </ul>
  </div>
  <div className="disease">
    <h3>Vascular dementia</h3>
    <ul>
      <li>Problems with memory and thinking</li>
      <li>Difficulty with planning and decision-making</li>
      <li>Loss of interest in activities</li>
      <li>Mood swings or changes in personality</li>
      <li>Difficulty with walking or balance</li>
    </ul>
  </div>
  <div className="disease">
    <h3>Lewy body dementia</h3>
    <ul>
      <li>Fluctuations in alertness and attention</li>
      <li>Visual hallucinations{/*<li*/}Movement problems, such as tremors or stiffness</li>
      <li>Problems with thinking and memory</li>
      <li>Sleep disturbances, including acting out dreams</li>
      <li>Depression or anxiety</li>
    </ul>
  </div>
</section>
  <div className="overlay" />
</div>

    </>
  )
}
