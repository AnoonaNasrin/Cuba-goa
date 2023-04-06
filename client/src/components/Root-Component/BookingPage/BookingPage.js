import React, { useState } from "react";
import "./BookingPage.css";
import Man from "@mui/icons-material/Man2Outlined";
import Kid from "@mui/icons-material/EmojiPeopleOutlined";

const Booking = () => {
  return (
    <>
      <section>
        <div className="card-book" style={{ margin: "6rem" }}>
          <div className="card-body">
            <div className="book-img">
              <img src="https://www.thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" />
            </div>
            <div className="card-book-sec">
              <h4>STANDARD A/C GARDEN VIEW ROOM (ROOM ONLY)</h4>
              <div className="card-order">
                <div className="card-room-de">
                  <div style={{ display: "flex" }}>
                    Room Capacity :
                    <div>
                      {" "}
                      2<Man />
                    </div>
                    <div>
                      1<Kid />
                    </div>
                  </div>
                  <div>Room Rates Exclusive of Tax</div>
                </div>
                <div className="card-price-sec">
                  <div className="price-card">Rs 340000</div>
                  <p>Per Room Per Night</p>
                  <p>2adult,1chlid,1Room</p>
                  <p>
                    <input
                      type="checkbox"
                      style={{ display: "inline-block" }}
                    />
                    Click here to select
                  </p>
                </div>
              </div>
              <hr
                style={{
                  color: "black",
                  size: "3",
                  width: "100%",
                  fontWeight: "bold",
                }}
              ></hr>
              <div className="card-part-2">
                <div></div>
                <button className="add-more-btn">Add Room</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Booking;
