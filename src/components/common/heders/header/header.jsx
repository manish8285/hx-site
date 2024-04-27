import React from 'react'
import Topbar from '../topbar/topbar'

const Header = () => {
  return (
    <header className="header">
  {/* <!-- Topbar --> */}
  <Topbar />
  {/* <!-- End Topbar -->
  <!-- Header Inner --> */}
  <div className="header-inner">
    <div className="container">
      <div className="inner">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            {/* <!-- Start Logo --> */}
            <div className="logo">
              <a href="index.html"><img className='h-[60px]' src="img/logo-short.svg" alt="#" /></a>
            </div>
            {/* <!-- End Logo -->
            <!-- Mobile Nav --> */}
            <div className="mobile-nav"></div>
            {/* <!-- End Mobile Nav --> */}
          </div>
          <div className="col-lg-7 col-md-9 col-12">
            {/* <!-- Main Menu --> */}
            <div className="main-menu">
              <nav className="navigation">
                <ul className="nav menu">
                  <li className="active"><a href="#">Home </a></li>
                  <li><a href="#">Doctos </a></li>
                  <li><a href="#treatments">Treatments </a></li>
                  <li><a href="#contactus">Contact Us</a></li>
                </ul>
              </nav>
            </div>
            {/* <!--/ End Main Menu --> */}
          </div>
          <div className="col-lg-2 col-12">
            <div className="get-quote">
              <a href="#appointment" className="btn">Book Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!--/ End Header Inner --> */}
</header>

  )
}

export default Header
