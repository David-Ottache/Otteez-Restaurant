import React from "react";
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        We're driven by a love of good food, good people, and good times, striving to create a warm and welcoming atmosphere where every bite and every moment feels like a taste of home.
        </p>
        <button type="button" className="custom__button">
          Learn More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Since 1999, our restaurant has been serving up a passion for flavor and a commitment to community, dishing out memories and mouthwatering meals to generations of loyal customers
        </p>
        <button type="button" className="custom__button">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
