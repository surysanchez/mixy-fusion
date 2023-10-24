import React from "react";
import Accordion from "react-bootstrap/Accordion";

import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.MF} alt="mf letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img
          src={images.fork}
          style={{
            width: "130px",
            height: "90px",
            marginTop: "-30px",
            marginBottom: "-20px",
          }}
          alt="fork"
          className="fork__img"
        />
        <p className="p__opensans" style={{ textTransform: "none" }}>
          Welcome to Mixy Fusion ! We're a young, passionate couple with a
          talent for crafting special and authentic dishes that blend different
          culinary traditions into a unique fusion. At Mixy Fusion Catering, we
          believe in the art of food and bringing people together through
          unforgettable flavors. Our personal touch and dedication to quality
          make us the perfect choice for your events. Thank you for considering
          us as your culinary partners. Join us in savoring the extraordinary!
        </p>
{/* 
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Know More</Accordion.Header>
            <Accordion.Body >
              Our culinary philosophy is all about fusion. We take the flavors
              and techniques from diverse culinary traditions and blend them to
              create dishes that are as innovative as they are delicious. Each
              dish on our menu is a reflection of the passion and creativity we
              pour into our craft, resulting in a symphony of taste that will
              tantalize your senses. As a young couple, we bring a fresh
              perspective to the world of catering. We're not just business
              owners; we're food enthusiasts on a mission to exceed your
              expectations and leave you with unforgettable memories. Our
              personal touch can be found in every dish, ensuring that every
              event we cater becomes a unique and memorable experience. Whether
              you're planning an intimate gathering, a corporate event, or a
              grand celebration, Mixy Fusion is here to cater to your
              needs. Our dedication to exceptional food, quality ingredients,
              and unparalleled service makes us the perfect choice for any
              occasion. Thank you for considering us to be a part of your
              special moments. We look forward to sharing our culinary journey
              with you and leaving you with a taste of our passion. Thank you for considering us as your culinary partners.
              Join us in savoring the extraordinary! 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}

        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
