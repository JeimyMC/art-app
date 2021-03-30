import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListArtItem = ({ art, name }) => {
  return art.map((item) => (
    <li key={item.name}>
      <Link to={`/${name}/${item.name}`}>{item.name}</Link>
    </li>
  ));
};

ListArtItem.propTypes = {
  art: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default ListArtItem;
