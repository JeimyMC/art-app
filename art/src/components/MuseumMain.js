import React, { useState } from "react";
import PropTypes from "prop-types";
import NewMuseum from "./NewMuseum";
import embarcacion from "./../img/embarcacion.svg";

const MuseumMain = ({ data, btnBack, onClickDelete, handleSubmit }) => {
  const [actived, setActived] = useState(false);
  const btnActive = actived ? false : true;

  return (
    <div className="name-museum">
      <img className="imgMuseum" alt={data.name} src={data.picture}></img>
      <nav>
        <a href={data.link} target="_blank">
          Página web
        </a>
      </nav>
      <button id="museum" onClick={btnBack}>
        Volver
      </button>

      <button onClick={onClickDelete}>Eliminar</button>
      <button onClick={() => setActived(btnActive)}>Editar</button>
      {actived ? (
        <NewMuseum handleSubmit={handleSubmit}></NewMuseum>
      ) : (
        <aside>
          <img
            className="embarcacion"
            alt="embarcacione"
            src={embarcacion}
          ></img>
        </aside>
      )}
    </div>
  );
};

MuseumMain.propTypes = {
  data: PropTypes.object.isRequired,
  btnBack: PropTypes.func.isRequired,
};

export default MuseumMain;
