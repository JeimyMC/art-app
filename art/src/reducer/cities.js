import { GET_CITIES } from "./../actions";

export const cities = (state = [], action) => {
  switch (action.type) {
    case GET_CITIES:
      return action.payload;

    default:
      return state;
  }
};
