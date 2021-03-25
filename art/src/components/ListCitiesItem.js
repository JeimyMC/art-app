import React from "react";
import PropTypes from "prop-types";
import City from "./City";

const ListCitiesItem = ({ cities, onClickArt }) => {
  const onClickCity = (city) => {
    onClickArt(city);
  };

  return cities.map((item) => {
    return (
      <li key={item.name}>
        <City
          name={item.name}
          onClickCityName={() => {
            onClickCity(item.name);
          }}
          art={item.art}
          show={item.show}
        ></City>
      </li>
    );
  });
};

ListCitiesItem.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickArt: PropTypes.func.isRequired,
};

export default ListCitiesItem;
