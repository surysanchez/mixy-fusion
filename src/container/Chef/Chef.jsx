import React from "react";

import { SubHeading } from "../../components";
import "./Chef.css";
import { images } from "../../constants";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img className="chef-photo" src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            At Mixy Fusions, we're not just catering your event; we're crafting
            an edible journey that paints a unique culinary story.
          </p>
        </div>
        <p className="p__opensans">
          Our mission is to break free from the ordinary and redefine the art of
          catering. With a dash of audacity and a sprinkle of innovation, we
          create dishes that are as unforgettable as the moments they accompany.
          We're not just chefs; we're culinary storytellers, and each event is a
          blank canvas waiting for our edible masterpiece.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Javier Delgado</p>
        <p className="p__opensans ">Chef & Founder</p>
        <img src={images.sign2} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
