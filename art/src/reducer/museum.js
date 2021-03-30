import { GET_MUSEUM_INFO, POST_NEW_MUSEUM } from "./../actions";

export const museum = (state = {}, action) => {
  switch (action.type) {
    case GET_MUSEUM_INFO:
      return action.payload;

    default:
      return state;
  }
};
