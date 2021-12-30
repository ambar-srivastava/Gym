import React from "react";
import "../../App.css";
import "../Contents/Contents.css";
import cardImg from "../../Assets/Image 23.png";

const Contents = () => {
  return (
    <div className="container content">
      <h4>Content</h4>
      <div>
        <div className="cardText">
          <h6 className="card-title">Morning Yoga Series [Collection]</h6>
          <p className="card-text">$400</p>
        </div>
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
        <div className="othertext">
          <h6 className="card-title">Other Content</h6>
        </div>
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

export default Contents;
