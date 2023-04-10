import "./OurProperties.css";
import React, { useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { RiHotelLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CButton, CImage } from "@coreui/react";

const PropertiesForm = React.lazy(() => import("./PropertiesForm"));

const OurProperties = () => {
  const [showList, setList] = useState(false);
  const [selectedValue, setSelectedVal] = useState(["Select Hotel to Book", 0]);
  const [ourPropertiesData, setOurPropertiesData] = useState([]);

  const getPropertiesData = async () => {
    const response = await fetch(
      `https://allapiresort-w3ql.vercel.app/hotelbook`,
      {
        headers: {
          method: "GET",
        },
      }
    );
    const data = await response.json();
    setOurPropertiesData(data);
  };

  useEffect(() => {
    getPropertiesData();
  }, []);

  return (
    <main className="our-properties-main">
      <div className="quba-goa-search">
        <div className="banner">
          <h2>The Cuba Goa Properties</h2>
          <h6 style={{ margin: "20px 0" }}>BEACH HUTS, BUNGALOWS & RESORTS</h6>
        </div>

        <div className="properties-to-book">
          <div className="select-menu">
            <div className="select-btn" onClick={() => setList((val) => !val)}>
              <span>{selectedValue[0]}</span>
              {showList ? <AiOutlineDown /> : <AiOutlineUp />}
            </div>

            {showList && (
              <ul className="options">
                {ourPropertiesData.map((el) => (
                  <li
                    className="option"
                    onClick={() =>
                      setSelectedVal(() => {
                        setList((val) => !val);
                        return [el.title, el._id];
                      })
                    }
                  >
                    <li>
                      <RiHotelLine />
                    </li>
                    <span className="option-text">{el.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {selectedValue[0] !== "Select Hotel to Book" && (
            <Link
              className="book-button"
              to={
                selectedValue[0].toLocaleLowerCase().split(" ").join("-") +
                "/" +
                selectedValue[1]
              }
            >
              Book Now
            </Link>
          )}
        </div>
        <PropertiesForm getOprPropertiesData={getPropertiesData} />

        <div className="about-hotel">
          {ourPropertiesData 
            .filter((el) => el.title === selectedValue[0])
            .map((el) => (
              <>
                <div className="goa-properties">
                  <div className="img-container">
                    <CImage
                      rounded
                      thumbnail
                      width={2000}
                      height={2000}
                      src={el.imgurl}
                      alt=""
                    />
                  </div>
                  <div className="our-properties-content">
                    <h2>{el.title}</h2>
                    <p>{el.content}</p>
                  </div>
                </div>
                <div className="goa-properties-add-room">
                  <CButton color="primary" className="me-2">
                    ADD MORE ROOMS
                  </CButton>
                  <CButton color="danger">Delete resort</CButton>
                </div>
              </>
            ))}
        </div>
      </div>
    </main>
  );
};

export default OurProperties;
