import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

const NewCity = ({ handleOnClickCity }) => {
  return (
    <form onSubmit={handleOnClickCity}>
      <label htmlFor="city"></label>
      <Field
        name="city"
        component="input"
        type="text"
        placeholder="Ciudad"
      ></Field>
      <input className="submit" type="submit" value="Guardar"></input>
    </form>
  );
};

NewCity.propTypes = {
  handleOnClickCity: PropTypes.func.isRequired,
};

export default reduxForm({ form: "NewCity" })(NewCity);
