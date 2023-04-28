import React from "react";

const DisplaySection = ({ triggerPreview }) => {
  const handleScrolltoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant</p>
      <span className="description">
        A Display thats up to 2x brighter in the sun
      </span>
      <buttton className="button" onClick={triggerPreview}>
        Try Me
      </buttton>
      <buttton className="back-button" onClick={handleScrolltoTop}>
        Top
      </buttton>
    </div>
  );
};

export default DisplaySection;
