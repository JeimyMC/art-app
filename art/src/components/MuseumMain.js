import React from "react";
import PropTypes from "prop-types";

const MuseumMain = ({ data, btnBack }) => {
  return (
    <div className="name-museum">
      <img alt={data.name} src={data.picture}></img>
      <nav>
        <a href={data.link} target="_blank">
          Página web
        </a>
      </nav>
      <button id="museum" onClick={btnBack}>
        Volver
      </button>
    </div>
  );
};

MuseumMain.propTypes = {
  data: PropTypes.object.isRequired,
  btnBack: PropTypes.func.isRequired,
};

export default MuseumMain;
