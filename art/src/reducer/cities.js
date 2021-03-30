import { GET_CITIES, POST_NEW_CITY } from "./../actions";

export const cities = (state = [], action) => {
  switch (action.type) {
    case GET_CITIES:
      return [...action.payload];
    case POST_NEW_CITY:
      return [...state, action.payload];
    default:
      return state;
  }
};
