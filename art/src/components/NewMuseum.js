import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

const NewMuseum = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <Field name="name" component="input" type="text"></Field>
        <div>
          <label htmlFor="link">Enlace museo</label>

          <Field name="link" component="input" type="text"></Field>
        </div>
        <label htmlFor="picture">Enlace foto</label>
        <Field name="picture" component="input" type="text"></Field>
      </div>
      <input type="submit" value="Agregar"></input>
    </form>
  );
};

NewMuseum.propTypes = {};

export default reduxForm({ form: "NewMuseum" })(NewMuseum);
