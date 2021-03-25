import React from "react";
import PropTypes from "prop-types";

const Head = ({ title, body }) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <main>{body}</main>
    </div>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
};

export default Head;
