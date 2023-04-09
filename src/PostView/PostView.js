import React, { useEffect, useState } from "react";

const PostView = () => {
  const [data, setData] = useState([]);
  const [like, setLikes] = useState(data.likes);
  const style1 = {
    border: "1px solid black",
    width: "90%",
    margin: "5%",
  };
  const style2 = { border: "1px solid black", height: "50px" };

  useEffect(() => {
    fetch("https://serverme-rsmp.onrender.com/allpost")
      .then((res) => res.json())
      .then((result) => setData(result));
  });

  return data.map((item) => {
    return (
      <div style={style1}>
        <div style={style2}>
          <h3 style={{ margin: "1px" }}>{item.name}</h3>
          <span style={{ margin: "1px" }}> {item.location}</span>
        </div>
        <div>
          <img src={item.image} alt="" height="15%" width="100%" />
        </div>
        <div>
          <h5>{item.description}</h5>
        </div>
        <div>
          <h5>
            <img
              onClick={(like) => setLikes(like + 1)}
              src="/like-icon-png-4158.png"
              height="2%"
              width="2%"
              alt="liker"
            />
            <span style={{ height: "15%", width: "15%" }}>{item.likes}</span>
          </h5>
        </div>
      </div>
    );
  });
};

export default PostView;
