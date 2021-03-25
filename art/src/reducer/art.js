import { GET_ART_CITY } from "./../actions";

export const art = (state = {}, action) => {
  switch (action.type) {
    case GET_ART_CITY:
      return action.payload;

    default:
      return state;
  }
};
