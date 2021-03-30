import React, { useState } from "react";
import PropTypes from "prop-types";
import ListCitiesItem from "./ListCitiesItem";
import NewCity from "./NewCity";

const ListCities = ({
  cities,
  onClickArt,
  show,
  handleSubmit,
  art,
  handleOnClickCity,
}) => {
  const [btnActive, setBtnActive] = useState(false);
  const btnShow = btnActive ? false : true;
  return (
    <div>
      <ul>
        <ListCitiesItem
          cities={cities}
          show={show}
          onClickArt={onClickArt}
          handleSubmit={handleSubmit}
          art={art}
        ></ListCitiesItem>
      </ul>
      <button onClick={() => setBtnActive(btnShow)}>Añadir ciudad</button>
      {btnActive ? (
        <NewCity handleOnClickCity={handleOnClickCity}></NewCity>
      ) : null}
    </div>
  );
};

ListCities.propTypes = {
  cities: PropTypes.array.isRequired,
  show: PropTypes.bool,
  onClickArt: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  art: PropTypes.array,
};

export default ListCities;
