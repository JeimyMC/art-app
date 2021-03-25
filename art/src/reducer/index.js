import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { cities } from "./cities";
import { art } from "./art";

export default combineReducers({
  cities,
  art,
});

export const getCitiesList = createSelector(
  (state) => state.cities,
  (cities) => cities
);

export const getArtCitySelector = createSelector(
  (state) => state.art,
  (art) => art
);
