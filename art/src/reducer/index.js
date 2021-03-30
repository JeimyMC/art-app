import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { cities } from "./cities";
import { art } from "./art";
import { museum } from "./museum";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  cities,
  art,
  museum,
  form: reduxForm,
});

export const getCitiesList = createSelector(
  (state) => state.cities,
  (cities) => cities
);

export const getArtCitySelector = createSelector(
  (state) => state.art,
  (art) => art
);

export const getMuseumSelector = createSelector(
  (state) => state.museum,
  (museum) => museum
);

export const postNewMuseumSelector = createSelector(
  (state) => state.newMuseum,
  (newMuseum) => newMuseum
);

export const postNewCitySelector = createSelector(
  (state) => state.newCity,
  (newCity) => newCity
);
