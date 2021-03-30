import { GET_ART_CITY, POST_NEW_MUSEUM } from "./../actions";

export const art = (state = {}, action) => {
  switch (action.type) {
    case GET_ART_CITY:
      return action.payload;
    case POST_NEW_MUSEUM:
      const { res, city } = action.payload;
      return { [city]: [...state[city], res] };
    default:
      return state;
  }
};
