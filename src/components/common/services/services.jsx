import { treatmentList } from '@/assets/constants/treatments/treatments';
import React from 'react';

const Services = () => {
 treatmentList;
 return (
  <section id="treatments" className="services section">
   <div className="container">
    <div className="row">
     <div className="col-lg-12">
      <div className="section-title">
       <h2>Our Best Treatments</h2>
                         <img
                             className="inline"
        src="img/section-img.png"
        alt="#"
       />
       <p>Get best treatment with homeopathy - a natural way to treat with no side effect.
       
       </p>
      </div>
     </div>
    </div>
    <div className="row">
     {treatmentList.map((treatment, index) => (
      <div
       key={index}
       className="col-lg-4 col-md-6 col-12">
       <div className="single-service">
        <i class="icofont icofont-leaf"></i>
        <h4>
         <a href="service-details.html">{treatment}</a>
        </h4>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default Services;
