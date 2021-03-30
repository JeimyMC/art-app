import React from "react";
import PropTypes from "prop-types";
import ListCitiesItem from "./ListCitiesItem";

const ListCities = ({ cities, onClickArt, show, handleSubmit, art }) => {
  return (
    <ul>
      <ListCitiesItem
        cities={cities}
        show={show}
        onClickArt={onClickArt}
        handleSubmit={handleSubmit}
        art={art}
      ></ListCitiesItem>
    </ul>
  );
};

ListCities.propTypes = {
  cities: PropTypes.array.isRequired,
  show: PropTypes.bool,
  onClickArt: PropTypes.func.isRequired,
};

export default ListCities;
