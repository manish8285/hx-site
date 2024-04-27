'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Appointment = () => {
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
    <section id='appointment' className="appointment">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Are Always Ready to Help You. Book An Appointment</h2>
              <img className='inline' src="img/section-img.png" alt="#" />
              <p>Book an appointment or visit us {'-'} we're always here to assist you.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
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
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="appointment-image">
              <img src="img/contact-img.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
