import { NavLink } from "react-router-dom";
import React from "react";
import "./App.css";

import { useState, useEffect } from "react";

function Postform() {
  const confirmation = () => {
    alert("Submitted Successfully");
  };
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescreption] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (url) {
      fetch("https://serverme-rsmp.onrender.com/addpost", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          location,
          description,
          image: url,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url]);

  const postimage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Rootfor");
    data.append("cloude_name", "dp6gqhir8");
    fetch("https://api.cloudinary.com/v1_1/dp6gqhir8/image/upload", {
      method: "Post",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        setUrl(result.url);
      });
  };

  return (
    <section>
      <div className="form_data">
        <div className="form_input">
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="form_input">
          <input
            placeholder="Author"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form_input">
          <input
            placeholder="location"
            type="text"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div className="form_input">
          <input
            placeholder="Description"
            type="text"
            onChange={(e) => {
              setDescreption(e.target.value);
            }}
          />
        </div>
        <div className="postbtn">
          <button
            onClick={() => {
              postimage();
              confirmation();
            }}
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
      <NavLink to="/allpost">View All posts</NavLink>
    </section>
  );
}
export default Postform;
