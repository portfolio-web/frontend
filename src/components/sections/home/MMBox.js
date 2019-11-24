import React from "react";

function MMBox() {
  const portfolioOwner = 'MARIANO MEDINA';
  const description = `I am an Engineer and Software Developer. I do the JS and other Web stuff so you can forget about the tech and do your business.
        Let's talk.`;
  return (
    <div className="mm-box">
      <h1 className="mm-title">{ portfolioOwner }</h1>
      <p className="mm-description">
        { description }
      </p>
    </div>
  );
}

export default MMBox;
