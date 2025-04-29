import Carousel from '../components/Carousel';
import bioImage from '../assets/bioimage.jpg';

function Homepage() {
  return (
    <div className="home-page">
      <Carousel />
      <section className="bio">
        <img src={bioImage} alt="image bio" />
        <div className="bio-text">
        <h1>
         Your Trusted Partner in ATM Solutions
        </h1>
        <h2>Now with Bitcoin support</h2>
        <p>
        At CRBarclay Solutions, we specialize in providing comprehensive ATM solutions for businesses of all sizes, now with the added option of Bitcoin transactions. 
        From sales and installation to maintenance and transaction processing, we deliver reliable, 24/7 support to ensure your machines stay up and running. 
        Whether you're looking to boost foot traffic, streamline cash access for customers, or start your own ATM route with cryptocurrency options, we're here to help every step of the way.
        Our Promise: “24/7 – Sales, Services & Processing of ATMs” isn’t just a slogan — it’s our commitment to you. We’re dedicated to keeping your ATM operations smooth, secure, profitable, and up to date with the latest payment technologies, including Bitcoin.
         </p>
         </div>
      </section>
    </div>
  );
}

export default Homepage;
