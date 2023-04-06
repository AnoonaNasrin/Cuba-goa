import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    details: "",
    imgUrl: "",
  });
  const [image, setImage] = useState("");

  //handle inputs
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  //post data form
  const postData = async () => {
    await axios
      .post("http://localhost:4001/addspa", form)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/spa");
  };

  useEffect(() => {
    if (form.imgUrl) {
      postData();
    }
  }, [form.imgUrl]);

  const uploadImage = async () => {
    const imgData = new FormData();
    imgData.append("file", image);
    imgData.append("upload_preset", "insta_clone");
    await axios
      .post(
        "https://api.cloudinary.com/v1_1/harshada0611/image/upload",
        imgData
      )
      .then((resp) => {
        console.log(resp.data.url);
        setForm({ ...form, imgUrl: resp.data.url });
      })
      .catch((err) => {
        console.log("something went wrong", err);
      });
  };

  return (
    <div id="UserFormWrapper">
      <div
        id="formWrapper"
        style={{
          width: "50%",
          border: "1px solid lightgrey",
          margin: "auto",
          marginTop: "2rem",
          padding: "2rem",
          marginBottom:"1rem",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.1)",
        }}
      >
        <h4
          style={{ textAlign: "center", marginBottom: "1.5rem", color: "#888" }}
        >
          ADD YOUR SPA
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          >
            <label
              htmlFor="fileUpload"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "150px",
                cursor: "pointer",
              }}
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  style={{ objectFit: "cover", width: "100%" }}
                  alt="preview"
                />
              ) : (
                <span style={{ fontSize: "1.2rem" }}>Choose an image</span>
              )}
            </label>
            <input
              id="fileUpload"
              type="file"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setImage(e.target.files[0]);
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0,
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <input
            type="text"
            placeholder="SPA Name"
            name="name"
            value={form.name}
            onChange={handleInputs}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <textarea
            type="text"
            placeholder="SPA Details"
            name="details"
            value={form.details}
            onChange={handleInputs}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
              minHeight: "150px",
            }}
          />
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <textarea
            type="text"
            placeholder="SPA Benefits"
            name="benefits"
            value={form.benefits}
            onChange={handleInputs}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
              minHeight: "150px",
            }}
          />
        </div> 
        <div
          id="button"
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className="btn btn-warning"
            onClick={uploadImage}
            style={{
              width: "150px",
              height: "40px",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.1)",
              backgroundColor: "#ffc107",
              color: "#fff",
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
