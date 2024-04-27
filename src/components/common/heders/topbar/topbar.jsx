import React from 'react'

const Topbar = () => {
  return (
    <div className="topbar">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-5 col-12">
        {/* <!-- Contact --> */}
        <ul className="top-link">
          <li><a href="#">About</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        {/* <!-- End Contact --> */}
      </div>
      <div className="col-lg-6 col-md-7 col-12">
        {/* <!-- Top Contact --> */}
        <ul className="top-contact">
          <li><i className="fa fa-phone"></i>+91 8587823264</li>
          <li><i className="fa fa-envelope"></i><a href="mailto:support@yourmail.com">info@homeorx.in</a></li>
        </ul>
        {/* <!-- End Top Contact --> */}
      </div>
    </div>
  </div>
</div>

  )
}

export default Topbar
