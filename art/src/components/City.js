import React, { useState } from "react";
import PropTypes from "prop-types";
import ListArtItem from "./ListArtItem";
import NewMuseum from "./NewMuseum";

const City = ({ name, art, onClickCityName, show, handleSubmit }) => {
  const [btnActive, setBtnActive] = useState(false);
  const btnShow = btnActive ? false : true;

  return (
    <div>
      <p onClick={onClickCityName}>{name}</p>
      {show ? (
        <div>
          <ul>
            <ListArtItem name={name} art={art}></ListArtItem>
          </ul>
          <button onClick={() => setBtnActive(btnShow)}>Nuevo museo</button>
          {btnActive ? (
            <NewMuseum handleSubmit={handleSubmit}></NewMuseum>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

City.propTypes = {
  name: PropTypes.string.isRequired,
  art: PropTypes.array,
  onClickCityName: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default City;
