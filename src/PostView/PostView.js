import React, { useEffect, useState } from "react";
import "../App.css";

const PostView = () => {
  const [data, setData] = useState([]);

  const style1 = {
    border: "1px solid black",
    width: "90%",
    height: "25%",
    margin: "2%",
  };
  const style2 = { border: "1px solid black", height: "50px" };

  useEffect(() => {
    fetch("https://serverme-rsmp.onrender.com/allpost")
      .then((res) => res.json())
      .then((result) => setData(result));
  });
  const onLike = () => {
    data.likes = data.likes + 1;
  };

  return data.map((item) => {
    return (
      <div>
        <div class="col s12 m7">
          <div class="card" style={{ width: "85%", margin: "4% 7%" }}>
            <span class="card-title">
              <span style={{ fontWeight: "bold", marginLeft: "2%" }}>
                {item.name}
              </span>
              <span
                style={{
                  display: "-ms-flexbox",
                  float: "right",
                  marginRight: "1%",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <img
                  style={{ marginTop: "3%" }}
                  src="/icons8-location-24.png"
                  alt="location"
                />
                {item.location}
              </span>
            </span>
            <div class="card-image" style={{ maxHeight: "" }}>
              <img src={item.image} alt="sample" />
            </div>
            <div class="card-content">
              <p>{item.description}</p>
              <div style={{ display: "flex" }}>
                <img
                  onClick={onLike}
                  src="/like-icon-png-4158.png"
                  height="5%"
                  width="5%"
                  alt="liker"
                />
                <h5 style={{ marginLeft: "3%" }}>{item.likes}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default PostView;
