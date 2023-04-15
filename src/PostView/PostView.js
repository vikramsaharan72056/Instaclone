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
      <div class="row">
        <div class="col s12 m7">
          <div class="card" style={{ width: "140%", margin: "2% 5%" }}>
            <span class="card-title">
              <h4> {item.name}</h4>
              <h6>{item.location}</h6>
            </span>
            <div class="card-image">
              <img src={item.image} alt="sample" />
            </div>
            <div class="card-content">
              <p>{item.description}</p>
              <div style={{ display: "flex" }}>
                <img
                  onClick={onLike}
                  src="/like-icon-png-4158.png"
                  height="40px"
                  width="40px"
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
