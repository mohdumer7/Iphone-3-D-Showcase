import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

const JumboTron = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behaviour: "smooth",
    });
  };
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title"></h2>
      <img className="logo" alt="Iphone 14 Pro" src={Iphone} />
      <p className="text">Big and bigger</p>
      <span className="description">
        From 41.62/mo. for 24 mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            Learn More
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="iphone" />
    </div>
  );
};

export default JumboTron;
