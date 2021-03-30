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
            {art.length > 0 ? (
              <ListArtItem name={name} art={art}></ListArtItem>
            ) : null}
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
  handleSubmit: PropTypes.func.isRequired,
};

export default City;
