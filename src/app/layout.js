import { Inter } from 'next/font/google';
import './globals.css';
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/nice-select.css';
import '@/assets/css/font-awesome.min.css';
import '@/assets/css/icofont.css';
import '@/assets/css/slicknav.min.css';
import '@/assets/css/owl-carousel.css';
import '@/assets/css/datepicker.css';
import '@/assets/css/animate.min.css';
import '@/assets/css/magnific-popup.css';
import '@/assets/css/normalize.css';
import '@/assets/css/responsive.css';
import Header from '@/components/common/heders/header';
import Footer from '@/components/common/footers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import "@/assets/js/jquery.min.js"
// import "@/assets/js/jquery-migrate-3.0.0.js"
// import "@/assets/js/jquery-ui.min.js"
// import "@/assets/js/easing.js"
// import "@/assets/js/colors.js"
// import "@/assets/js/popper.min.js"
// import "@/assets/js/bootstrap-datepicker.js"
// import "@/assets/js/jquery.nav.js"
// import "@/assets/js/slicknav.min.js"
// import "@/assets/js/jquery.scrollUp.min.js"
// import "@/assets/js/niceselect.js"
// import "@/assets/js/tilt.jquery.min.js"
// import "@/assets/js/owl-carousel.js"
// import "@/assets/js/jquery.counterup.min.js"
// import "@/assets/js/steller.js"
// import "@/assets/js/wow.min.js"
// import "@/assets/js/jquery.magnific-popup.min.js"
// import "@/assets/js/bootstrap.min.js"
// import "@/assets/js/main.js"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
 title: 'Hx - cure from nature',
 description: 'Get Natural treatment with best homeopathic doctor',
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <link
    href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
    rel="stylesheet"></link>
   <link
    rel="stylesheet"
    href="css/font-awesome.min.css"></link>
   <link
    rel="stylesheet"
    href="https://unpkg.com/@icon/icofont/icofont.css"
       />
       <link rel="icon" href="/favicon.ico" sizes="any" />
   ...
   {/* <link rel="stylesheet" href="myProjects/webProject/icofont/css/icofont.min.css"></link>
      <link rel="stylesheet" href="css/icofont.css"></link> */}
   <body className={inter.className}>
    <ToastContainer />
    <Header />

    {children}
    <Footer />
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery-migrate-3.0.0.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/easing.js"></script>
    <script src="js/colors.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap-datepicker.js"></script>
    <script src="js/jquery.nav.js"></script>
    <script src="js/slicknav.min.js"></script>
    <script src="js/jquery.scrollUp.min.js"></script>
    <script src="js/niceselect.js"></script>
    <script src="js/tilt.jquery.min.js"></script>
    <script src="js/owl-carousel.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <script src="js/steller.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <script src="js/main.js"></script>
   </body>
  </html>
 );
}
