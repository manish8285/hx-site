import { whoWeAre } from '@/assets/constants/about/info';
import { mobileNumber } from '@/assets/constants/contact/contact';
import Appointment from '@/components/appointment/appointment';
import Feature from '@/components/common/features/Feature';
import Footer from '@/components/common/footers';
import Topbar from '@/components/common/heders/topbar/topbar';
import Services from '@/components/common/services';
import ContactUs from '@/components/contactus';
import Head from 'next/head';
import Image from "next/image";

export default function Home() {
  return (
	  <div>

		<section className="slider">
  <div className="hero-slider">
    {/* <!-- Start Single Slider --> */}
    <div className="single-slider" style={{ backgroundImage: "url('/img/slider2.jpg')" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="text">
              <h1>We Provide <span>Homeopathic </span> Treatment That You Can <span>Trust!</span></h1>
              <p>Experience holistic healing with personalized homeopathic treatments tailored to your individual needs.</p>
              <div className="button">
                <a href="#" className="btn">Get Appointment</a>
                <a href="#" className="btn primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Single Slider --> */}

  </div>
</section>
{/* <!--/ End Slider Area --> */}

		

		<section class="schedule">
			<div class="container">
				<div class="schedule-inner">
					<div class="row">
						<div class="col-lg-4 col-md-6 col-12 ">
							{/* <!-- single-schedule --> */}
							<div class="single-schedule first">
								<div class="inner">
									<div class="icon">
										<i class="fa fa-ambulance"></i>
									</div>
									<div class="single-content">
										<span>limited time offer</span>
										<h4>Free Checkup</h4>
										<p>Take advantage of our limited-time offer for a complimentary checkup – your health matters to us!</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-12">
							{/* <!-- single-schedule --> */}
							<div class="single-schedule middle">
								<div class="inner">
									<div class="icon">
										<i class="icofont-prescription"></i>
									</div>
									<div class="single-content">
										<span>All</span>
										<h4>Homeopathic Medicine</h4>
										<p>Discover the efficacy of our available homeopathic medicines {'-'} crafted to nurture your well-being!.</p>
										
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-12 col-12">
							{/* <!-- single-schedule --> */}
							<div class="single-schedule last">
								<div class="inner">
									<div class="icon">
										<i class="icofont-ui-clock"></i>
									</div>
									<div class="single-content">
										<span>Clinic</span>
										<h4>Opening Hours</h4>
										  <ul class="time-sidual">
										  <li class="day">All days</li>
											<li class="day">Morning (All days) <span>10.00AM to 02.00PM</span></li>
											<li class="day">Evening (All days)<span>04:00PM to 010:00PM</span></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/End Start schedule Area -->

		<!-- Start Feautes --> */}
		<Feature />

		{/* <!--/ End Feautes -->
		
		<!-- Start Fun-facts --> */}
		<div id="fun-facts" class="fun-facts section overlay">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-12">
						{/* <!-- Start Single Fun --> */}
						<div class="single-fun">
							<i class="icofont icofont-home"></i>
							<div class="content">
								<span class="counter">1468</span>
								<p>Family's Doctor</p>
							</div>
						</div>
						{/* <!-- End Single Fun --> */}
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						{/* <!-- Start Single Fun --> */}
						<div class="single-fun">
							<i class="icofont icofont-user-alt-3"></i>
							<div class="content">
								<span class="counter">3357</span>
								<p> Sucessfull Cures</p>
							</div>
						</div>
						{/* <!-- End Single Fun --> */}
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						{/* <!-- Start Single Fun --> */}
						<div class="single-fun">
							<i class="icofont-simple-smile"></i>
							<div class="content">
								<span class="counter">4379</span>
								<p>Happy Patients</p>
							</div>
						</div>
						{/* <!-- End Single Fun --> */}
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						{/* <!-- Start Single Fun --> */}
						<div class="single-fun">
							<i class="icofont icofont-table"></i>
							<div class="content">
								<span class="counter">12</span>
								<p>years, curing.</p>
							</div>
						</div>
						{/* <!-- End Single Fun --> */}
					</div>
				</div>
			</div>
		</div>
		{/* <!--/ End Fun-facts -->
		
		<!-- Start Why choose --> */}
		<section class="why-choose section" >
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>We Offer Different Services To Improve Your Health</h2>
							<img className='inline' src="img/section-img.png" alt="#" />
							<p>
Experience a holistic approach to healing with our natural homeopathic medicines, offering comprehensive diagnostic services and end-to-end treatment solutions</p>
						</div>
					</div>
				</div>
				<div id="aboutus" class="row">
					<div class="col-lg-6 col-12">
						{/* <!-- Start Choose Left --> */}
						<div class="choose-left">
							<h3>Who We Are</h3>
							<p>{whoWeAre} </p>

						</div>
						{/* <!-- End Choose Left --> */}
					</div>
					<div class="col-lg-6 col-12">
						{/* <!-- Start Choose Rights --> */}
						<div class="choose-right">
							<div class="video-image">
								{/* <!-- Video Animation --> */}
								<div class="promo-video">
									<div class="waves-block">
										<div class="waves wave-1"></div>
										<div class="waves wave-2"></div>
										<div class="waves wave-3"></div>
									</div>
								</div>
								{/* <!--/ End Video Animation --> */}
								<a href="#" class="video video-popup mfp-iframe"><i class="fa fa-play"></i></a>
							</div>
						</div>
						{/* <!-- End Choose Rights --> */}
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Why choose -->
		
		<!-- Start Call to action --> */}
		<section class="call-action overlay" data-stellar-background-ratio="0.5">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-12">
						<div class="content">
							<h2>Have questions or need assistance? Call @ {mobileNumber}</h2>
							<p>If you have any questions, feel free to reach out during our working hours. We are here to assist you!</p>
							<div class="button">
								<a href="#" class="btn">Contact Now</a>
								<a href="#" class="btn second">Learn More<i class="fa fa-long-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Call to action -->
		
		<!-- Start portfolio --> */}
		{/* <section class="portfolio section" >
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
							<img src="img/section-img.png" alt="#" />
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12 col-12">
						<div class="owl-carousel portfolio-slider">
							<div class="single-pf">
								<img src="img/pf1.jpg" alt="#" />
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf2.jpg" alt="#" />
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf3.jpg" alt="#" />
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf4.jpg" alt="#" />
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf1.jpg" alt="#" />
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf2.jpg" alt="#" />
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf3.jpg" alt="#" />
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf4.jpg" alt="#" />
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> */}
		{/* <!--/ End portfolio -->
		
		<!-- Start service --> */}
		<Services />
		{/* <!--/ End service -->
		
		
		
		
		<!-- Start Blog Area --> */}
		
		{/* <!-- End Blog Area -->
		
		<!-- Start clients --> */}
		<div class="clients overlay">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-12">
						<div class="owl-carousel clients-slider">
							<div class="single-clients">
								<img src="img/client1.png" alt="#" />
							</div>
							<div class="single-clients">
								<img src="img/client2.png" alt="#" />
							</div>
							<div class="single-clients">
								<img src="img/client3.png" alt="#" />
							</div>
							<div class="single-clients">
								<img src="img/client4.png" alt="#" />
							</div>
							<div class="single-clients">
								<img src="img/client5.png" alt="#" />
							</div>
							<div class="single-clients">
								<img src="img/client1.png" alt="#" />
							</div>
							<div class="single-clients">
								<img src="img/client2.png" alt="#" />
							</div>
							<div class="single-clients">
								<img src="img/client3.png" alt="#" />
							</div>
							<div class="single-clients">
								<img src="img/client4.png" alt="#" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		  <Appointment />
		  <ContactUs />
  </div>
  );
}
