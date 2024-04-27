'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the form data to send
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      message: formData.message
    };
  
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: ''
      });
      console.log('Form submitted successfully');
      console.log('response---->', response)
      toast.success('Submitted Sucessfully')
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
  };
  

  return (
    <section id='contactus' className="appointment">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Reach Us</h2>
              <img className='inline' src="img/section-img.png" alt="#" />
              <p>We are ready to help you.</p>
            </div>
          </div>
        </div>
        <div className="mb-5">
          {/* <div className="col-lg-6 col-md-12 col-12">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input name="phone" type="text" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input type="text" placeholder="Date" id="datepicker" value={formData.date} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="form-group">
                    <textarea name="message" placeholder="Write Your Message Here....." value={formData.message} onChange={handleChange}></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-4 col-12">
                  <div className="form-group">
                    <div className="button">
                      <button type="submit" className="btn">Book An Appointment</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-8 col-12">
                  <p>( We will confirm via text message )</p>
                </div>
              </div>
            </form>
          </div> */}
          <div className="col-lg-12 col-md-12 ">
            <div className="">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.1244320573498!2d77.083447346615!3d28.434408805851888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d198ebdc7659b%3A0x9af47251f7cfd2eb!2s(Homeopathic)%20Divine%20Health%20Care!5e0!3m2!1sen!2sbd!4v1669225073317!5m2!1sen!2sbd" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" style={{width:"100%",height:"100%",border:"0px"}}></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
