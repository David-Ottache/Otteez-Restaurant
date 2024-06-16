import React from "react";
import images from "../../constants/images";

import "./Chef.css";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section __padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
        </div>

        <p className="p__opensans">
          This is the first restaurant website that I am building for myself and
          I hope you love it
        </p>
      </div>
      <p className="p__opensans">
        I will eventually write something cool here, I just need to figure out
        what that is
      </p>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
