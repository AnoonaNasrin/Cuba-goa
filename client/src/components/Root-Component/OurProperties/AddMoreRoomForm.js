import React from "react";
import { useState } from "react";

const AddMoreRoomForm = () => {
  const [resortImgUrl, setResortImgUrl] = useState("");

  const [resortName, setResortName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [content, setContent] = useState("");
  const [children, setChildren] = useState("");
  const [adults, setAdults] = useState("");
  const [room, setRoom] = useState(0);
  const [leftRoom, setLeftRoom] = useState(0);
  const [rsRoomOnly, setRoomOnly] = useState(0);
  const [rsbreakFast, setBreakFast] = useState(0);
  const [roomPerNight, setRomPerNight] = useState(0);
  const [roomAminities, setRoomAminities] = useState("");
  const [notCancable, setNotCacable] = useState(false);
  const [wardrobe, seWardRobe] = useState(false);
  const [besideTable, setBesideTable] = useState(false);
  const [fan, setFan] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [houseKeping, setHouseKeping] = useState(false);
  const [mosquito, setMosquito] = useState(false);
  const [hour24ColdShower, set24HourColdShower] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [airCodition, setAirCondition] = useState(false);

  return (
    <>
      <CModal
        keyboard={false}
        portal={false}
        visible={visibleForm}
        className="booking-form-p "
        scrollable
        size="lg"
      >
        <CModalHeader
          onClick={() => {
            setVisibleForm(false);
          }}
        >
          <CModalTitle>
            <h4>Resort Info</h4>
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol lg={6}>
              <CFormInput
                type="file"
                label={`Upload Resort Image ${resrtImgPrograss}%`}
                onChange={handleChange}
              />
            </CCol>
            <CCol lg={6}>
              <CFormInput
                label="Resort Name"
                value={resortName}
                onChange={(e) => setResortName(e.target.value)}
                type="text"
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="mt-2">
              <CFormTextarea
                label="About Resort"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></CFormTextarea>
            </CCol>
          </CRow>

          <CRow>
            <CCol>
              <h4>Room info</h4>
            </CCol>
          </CRow>

          <CRow>
            <CCol lg={6}>
              <CFormInput
                type="file"
                label={`Upload Room Image ${roomImgProgress}%`}
                onChange={handleChange2}
              />
            </CCol>
            <CCol lg={6}>
              <CFormInput
                label="Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                type="text"
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="mt-2" lg={6}>
              <CFormInput
                label="Max Room Capacity "
                type="number"
                value={max}
                onChange={(e) => setMax(e.target.value)}
              />
            </CCol>
            <CCol className="mt-2" lg={6}>
              <CFormInput
                label="Min Room Capacity "
                type="number"
                value={min}
                onChange={(e) => setMin(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="mt-2" lg={6}>
              <CFormInput
                label="Adult Capacity "
                value={adults}
                type="number"
                onChange={(e) => setAdults(e.target.value)}
              />
            </CCol>
            <CCol className="mt-2" lg={6}>
              <CFormInput
                label="Children Capacity "
                value={children}
                type="number"
                onChange={(e) => setChildren(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="mt-2" lg={6}>
              <CFormInput
                label="Room"
                type="number"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </CCol>
            <CCol className="mt-2" lg={6}>
              <CFormInput
                label="Left Room"
                type="number"
                value={leftRoom}
                onChange={(e) => setLeftRoom(e.target.value)}
              />
            </CCol>
          </CRow>

          <CRow>
            <CCol className="mt-2" lg={6}>
              <CFormInput
                label="Rs Room only"
                type="number"
                value={rsRoomOnly}
                onChange={(e) => setRoomOnly(e.target.value)}
              />
            </CCol>
            <CCol className="mt-2" lg={6}>
              <CFormInput
                label="Rs Room with Breakfast"
                type="number"
                value={rsbreakFast}
                onChange={(e) => setBreakFast(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="mt-2" lg={6}>
              <CFormInput
                label="Room No Of Per night"
                type="number"
                value={roomPerNight}
                onChange={(e) => setRomPerNight(e.target.value)}
              />
            </CCol>
            <CCol className="mt-2" lg={6}>
              <CFormInput
                label="Room Amenities"
                type="text"
                value={roomAminities}
                onChange={(e) => setRoomAminities(e.target.value)}
              />
            </CCol>
          </CRow>

          <CCard className="mx-2 mt-4">
            <CCardHeader className="text-center">
              <h4>Room Facility</h4>
            </CCardHeader>
            <CCardBody className="p-4 ">
              <CRow className="text-start">
                <CCol className="mt-2">
                  <CFormCheck
                    type="checkbox"
                    label="Non Cancel / Non Refundable"
                    checked={notCancable}
                    onChange={() => setNotCacable((val) => !val)}
                  />
                </CCol>
                <CCol className="mt-2">
                  <CFormCheck
                    type="checkbox"
                    label="Wardrobe"
                    checked={wardrobe}
                    onChange={() => seWardRobe((val) => !val)}
                  />
                </CCol>
              </CRow>

              <CRow className="text-start">
                <CCol className="mt-2">
                  <CFormCheck
                    type="checkbox"
                    label="Bedside Table"
                    checked={besideTable}
                    onChange={() => setBesideTable((val) => !val)}
                  />
                </CCol>
                <CCol className="mt-2">
                  <CFormCheck
                    type="checkbox"
                    label="Fan"
                    checked={fan}
                    onChange={() => setFan((val) => !val)}
                  />
                </CCol>
              </CRow>

              <CRow className="text-start">
                <CCol className="mt-2">
                  <CFormCheck
                    type="checkbox"
                    label="Balcony"
                    checked={balcony}
                    onChange={() => setBalcony((val) => !val)}
                  />
                </CCol>
                <CCol className="mt-2">
                  <CFormCheck
                    type="checkbox"
                    label="House Keeping"
                    checked={houseKeping}
                    onChange={() => setHouseKeping((val) => !val)}
                  />
                </CCol>
              </CRow>

              <CRow className="text-start">
                <CCol className="mt-2">
                  <CFormCheck
                    type="checkbox"
                    label="Mosquito Net"
                    checked={mosquito}
                    onChange={() => setMosquito((val) => !val)}
                  />
                </CCol>
                <CCol className="mt-2">
                  <CFormCheck
                    type="checkbox"
                    label="24hr hot & cold shower"
                    checked={hour24ColdShower}
                    onChange={() => set24HourColdShower((val) => !val)}
                  />
                </CCol>
              </CRow>
              <CRow className="text-start">
                <CCol className="mt-2">
                  <CFormCheck
                    type="checkbox"
                    label="WiFi"
                    checked={wifi}
                    onChange={() => setWifi((val) => !val)}
                  />
                </CCol>
                <CCol className="mt-2">
                  <CFormCheck
                    type="checkbox"
                    label="AIR-CONDITIONED"
                    checked={airCodition}
                    onChange={() => setAirCondition((val) => !val)}
                  />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CModalBody>

        <CModalFooter>
          {/* <CButton color="secondary" onClick={() => setVisibleForm(false)}>
          Close
        </CButton> */}
          <CButton color="primary" onClick={saveResortInfo}>
            Save Resort
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default AddMoreRoomForm;
