import React from "react";
import PropTypes from "prop-types";
import ListArtItem from "./ListArtItem";

const City = ({ name, art, onClickCityName, show }) => {
  return (
    <div onClick={onClickCityName}>
      <p>{name}</p>
      {show ? (
        <ul>
          <ListArtItem name={name} art={art}></ListArtItem>
        </ul>
      ) : null}
    </div>
  );
};

City.propTypes = {
  name: PropTypes.string.isRequired,
  art: PropTypes.array.isRequired,
  onClickCityName: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default City;
