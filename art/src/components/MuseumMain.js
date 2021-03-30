import React from "react";
import PropTypes from "prop-types";

const MuseumMain = ({ data, btnBack }) => {
  return (
    <div>
      <button onClick={btnBack}>Volver</button>
      <p>{data.name}</p>

      <img
        alt={data.name}
        style={{ maxWidth: "20vw" }}
        src={data.picture}
      ></img>
      <a href={data.link} target="_blank">
        Página
      </a>
    </div>
  );
};

MuseumMain.propTypes = {
  data: PropTypes.object.isRequired,
  btnBack: PropTypes.func.isRequired,
};

export default MuseumMain;
