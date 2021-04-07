import {
  GET_MUSEUM_INFO,
  DELETE_MUSEUM,
  UPDATE_MUSEUM,
  DELETE_ALL_MUSEUM,
} from "./../actions";

export const museum = (state = {}, action) => {
  switch (action.type) {
    case GET_MUSEUM_INFO:
      return action.payload;
    case UPDATE_MUSEUM:
      return action.payload;
    case DELETE_MUSEUM:
      return {};
    case DELETE_ALL_MUSEUM:
      return action.payload;
    default:
      return state;
  }
};
