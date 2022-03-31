import React from "react";

function GridGifItem({ title, url }) {
  return (
    <>
      <div className="card animate__animated animate__backInLeft">
        <img src={url} alt={title}></img>
        <p>{title}</p>
      </div>
    </>
  );
}

export default GridGifItem;
