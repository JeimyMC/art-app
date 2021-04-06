import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

const NewMuseum = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Nombre"
        ></Field>
        <div>
          <label htmlFor="link"></label>

          <Field
            name="link"
            component="input"
            type="text"
            placeholder="Enlace museo"
          ></Field>
        </div>
        <label htmlFor="picture"></label>
        <Field
          name="picture"
          component="input"
          type="text"
          placeholder="Enlace foto"
        ></Field>
      </div>
      <input className="submit" type="submit" value="Agregar"></input>
    </form>
  );
};

NewMuseum.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: "NewMuseum" })(NewMuseum);
