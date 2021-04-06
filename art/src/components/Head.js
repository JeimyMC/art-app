import React from "react";
import PropTypes from "prop-types";
import App from "./../App.css";

const Head = ({ title, body }) => {
  return (
    <div className="container">
      <header>
        <h1>{title}</h1>
      </header>
      <main className="main">{body}</main>
    </div>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
};

export default Head;
