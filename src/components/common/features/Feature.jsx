import { whatWeDo } from '@/assets/constants/about/info'
import React from 'react'

const Feature = () => {
  return (
    <section className="Feautes section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title text-center">
          <h2>We Are Always Ready to Help You & Your Family</h2>
          <img className='inline' src="img/section-img.png" alt="#" />
          <p className='text-justify'>{whatWeDo}</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-12">
        {/* <!-- Start Single features --> */}
        <div className="single-features">
          <div className="signle-icon">
            <i className="icofont icofont-ambulance-cross"></i>
          </div>
          <h3>Diagnostic Tests</h3>
          <p>Free pickup and drop facility available for all types of diagnostic tests including ultrasounds, X-rays etc.</p>
        </div>
        {/* <!-- End Single features --> */}
      </div>
      <div className="col-lg-4 col-12">
        {/* <!-- Start Single features --> */}
        <div className="single-features">
          <div className="signle-icon">
            <i className="icofont icofont-medical-sign-alt"></i>
          </div>
          <h3>Lab Tests</h3>
          <p>We conduct a variety of lab tests, such as blood tests, to analyze blood samples for indicators of health or illness.</p>
        </div>
        {/* <!-- End Single features --> */}
      </div>
      <div className="col-lg-4 col-12">
        {/* <!-- Start Single features --> */}
        <div className="single-features last">
          <div className="signle-icon">
            <i className="icofont icofont-stethoscope"></i>
          </div>
          <h3>Doctor Checkup</h3>
          <p>Our doctors conduct thorough checkups, including physical exams and medical history assessments, to ensure comprehensive care. </p>
        </div>
        {/* <!-- End Single features --> */}
      </div>
    </div>
  </div>
</section>
  )
}

export default Feature
