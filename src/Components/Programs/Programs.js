import React from "react";
import "../../App.css";
import "../Programs/Programs.css";
import cardImg from "../../Assets/Image 23.png";
const Programs = () => {
  return (
    <div className="container Program">
      <h4>Programs</h4>
      <div>
        <div className="allCards">
          <div className="card" style={{ width: "18rem" }}>
            <div className="bodyCard">
              <img src={cardImg} className="card-body card-img-top" alt="..." />
              <p className="card-body card-text">
                How to lose 10kgs in a week? Let's explore
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="bodyCard">
              <img src={cardImg} className="card-body card-img-top" alt="..." />
              <p className="card-body card-text">
                How to lose 10kgs in a week? Let's explore
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="bodyCard">
              <img src={cardImg} className="card-body card-img-top" alt="..." />
              <p className="card-body card-text">
                How to lose 10kgs in a week? Let's explore
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="bodyCard">
              <img src={cardImg} className="card-body card-img-top" alt="..." />
              <p className="card-body card-text">
                How to lose 10kgs in a week? Let's explore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
