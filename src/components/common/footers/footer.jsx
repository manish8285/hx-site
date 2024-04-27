import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" class="footer ">
			{/* <!-- Footer Top --> */}
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer">
								<h2>Reach Us</h2>
								<p>HomeoRx (Divine Health Care), Wazirabad, Sector 52, Gurgaon, Haryana, 122003</p>
								{/* <!-- Social --> */}
								<ul class="social">
									<li><a href="https://maps.app.goo.gl/pH7QbGpwHZHCsR4n7"><i class="icofont-google-map"></i></a></li>
									<li><a href="#"><i class="icofont-google-plus"></i></a></li>	
								</ul>
								{/* <!-- End Social --> */}
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer f-link">
								<h2>Quick Links</h2>
								<div class="row">
									<div class="col-lg-6 col-md-6 col-12">
										<ul>
											<li><a href="#home"><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
											<li><a href="#aboutus"><i class="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
										  <li><a href="#treatments"><i class="fa fa-caret-right" aria-hidden="true"></i>Treatments</a></li>
										  <li><a href="#contactus"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>
										</ul>
									</div>
									{/* <div class="col-lg-6 col-md-6 col-12">
										<ul>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Consuling</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Finance</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Testimonials</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>	
										</ul>
									</div> */}
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer">
								<h2>Open Hours</h2>
								<p>We are available all days.</p>
								<ul class="time-sidual">
									<li class="day">Morning (All day) <span>10 AM-02 PM</span></li>
									<li class="day">Evening (All day) <span>4 PM- 10 PM</span></li>
									
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}

export default Footer
