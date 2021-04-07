import React, { useState } from "react";
import PropTypes from "prop-types";
import ListArtItem from "./ListArtItem";
import NewMuseum from "./NewMuseum";

const City = ({
  name,
  art,
  onClickCityName,
  show,
  handleSubmit,
  id,
  onClickDelCity,
}) => {
  const [btnActive, setBtnActive] = useState(false);
  const btnShow = btnActive ? false : true;
  const actived = show ? "museums-actived" : "museums";
  const onClickDeleteCity = () => {
    onClickDelCity(id);
  };
  return (
    <section className={actived}>
      <p onClick={onClickCityName}>{name}</p>
      {show ? (
        <main>
          <ul>
            {art.length > 0 ? (
              <ListArtItem name={name} art={art} id={id}></ListArtItem>
            ) : null}
          </ul>
          <button onClick={() => setBtnActive(btnShow)}>Nuevo museo</button>
          {btnActive ? (
            <NewMuseum handleSubmit={handleSubmit}></NewMuseum>
          ) : null}
          <button onClick={onClickDeleteCity}>Eliminar</button>
        </main>
      ) : null}
    </section>
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
