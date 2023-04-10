import { FaRegWindowClose } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router";
import { Card } from "react-bootstrap";

import "./SummaryCard.css";

export default function SummaryCard(props) {
  const navigate = useNavigate();
  console.log(props.summaryData);

  const total = props.summaryData.reduce(
    (acc, curr) => acc + curr.pernightroom,
    0
  );

  return (
    <Card className="summary-car" style={{ width: "100%" }}>
      <div className="summary-dates summary-flex">
        <div>Dates</div>
        <h6>2023-04-12 - 2023-04-13</h6>
      </div>
      <div className="summary-flex summary-night">
        <div>Night</div>
        <h6>1</h6>
      </div>
      {props.summaryData.map((data) => (
        <div>
          <div className="summary-flex summary-title">
            <h6>{data.title2}</h6>
            <span>
              <FaRegWindowClose className="summary-delete" />
            </span>
          </div>
          <div className="summary-pax summary-flex">
            <h6>{data.adults} Adults</h6>
            <h6>{data.room} Room</h6>
          </div>
          <div className="summary-flex summary-after summary-price">
            <div></div>
            <div>Rs{data.perRoom}</div>
          </div>
        </div>
      ))}
      <div className="summary-flex summary-total">
        <h6>Total</h6>
        <h6>Rs{total}</h6>
      </div>
      <div style={{ width: "100%" }}>
        <buton
          onClick={() => {
            navigate("/booking-form");
          }}
          className="summary-button"
        >
          Book
        </buton>
      </div>
    </Card>
  );
}
