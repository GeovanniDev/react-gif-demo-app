import React from "react";
import PropTypes from "prop-types";
// Components
import GridGifItem from "./GridGifItem";
// Hooks
import useFetchGifs from "../hooks/useFetchGifs";

const GridGif = ({ category }) => {
  const { loading, data: gifs } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      { loading && <label className="card animate__animated animate__shakeY">Loading</label> }
      <div className="card-grid">
        {
            gifs.map((gif) => (
            <GridGifItem key={gif.id} {...gif} />
            ))
        }
      </div>
    </>
  );
};

GridGif.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GridGif;
