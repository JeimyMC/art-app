import React from "react";
import PropTypes from "prop-types";
import City from "./City";

const ListCitiesItem = ({ cities, onClickArt, handleSubmit, art }) => {
  const onClickCity = (city) => {
    onClickArt(city);
  };

  return cities.map((item) => {
    return (
      <li key={item.name}>
        <City
          name={item.name}
          onClickCityName={() => {
            onClickCity(item.id);
          }}
          art={art}
          show={item.show}
          handleSubmit={handleSubmit}
        ></City>
      </li>
    );
  });
};

ListCitiesItem.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickArt: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  art: PropTypes.array,
};

export default ListCitiesItem;
