export const GET_CITIES = "GET_CITIES";
export const GET_ART_CITY = "GET_ART_CITY";
export const SET_DATA_ART_CITY = "SET_DATA_ART_CITY";

const getCities = (payload) => ({ type: GET_CITIES, payload });
const getArtCity = (payload) => ({ type: GET_ART_CITY, payload });

export const fetchCities = () => {
  return (dispatch) => {
    return fetch("http://localhost:3004/city")
      .then((data) => data.json())
      .then((res) => {
        dispatch(getCities(res));
      })
      .catch((res) => console.log(res));
  };
};

export const getArtCityList = (payload, city) => {
  return (dispatch) => {
    const data = payload.find((item) => item.name === city);
    const dataArt = { [data.name]: data.art, show: (data.show = !data.show) };
    dispatch(getArtCity(dataArt));
  };
};
