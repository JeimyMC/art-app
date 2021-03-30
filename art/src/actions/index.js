export const GET_CITIES = "GET_CITIES";
export const GET_ART_CITY = "GET_ART_CITY";
export const SET_DATA_ART_CITY = "SET_DATA_ART_CITY";
export const GET_MUSEUM_INFO = "GET_MUSEUM_INFO";
export const POST_NEW_MUSEUM = "POST_NEW_MUSEUM";
export const GET_ART_DATA = "GET_ART_DATA";

const getCities = (payload) => ({ type: GET_CITIES, payload });
const getArtCity = (payload) => ({ type: GET_ART_CITY, payload });
const getMuseumInfo = (payload) => ({ type: GET_MUSEUM_INFO, payload });
const postNewMuseumCity = (payload) => ({ type: POST_NEW_MUSEUM, payload });

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

export const getArtCityList = (cities, city) => {
  return (dispatch) => {
    const data = cities.find((item) => item.name === city);
    const dataShow = {
      [data.id]: data.artCity,
      show: (data.show = !data.show),
    };
    const notShow = cities.filter((item) => item.name !== city);
    notShow.map((item) => {
      if (item.show) {
        return (item.show = false);
      }
      return item;
    });
    if (city === "A Coruña") {
      city = "Coruna";
    }
    return fetch(`http://localhost:3004/art-${city}`)
      .then((data) => data.json())
      .then((res) => dispatch(getArtCity({ [city]: res })))
      .catch((res) => console.log(res));
  };
};

export const getMuseum = (city, name) => {
  return (dispatch) => {
    const information = city.find((item) => item.name === name);
    dispatch(getMuseumInfo(information));
  };
};

export const postNewMuseum = (city, name, link, picture) => {
  return (dispatch) => {
    return fetch(`http://localhost:3004/art-${city}`, {
      method: "POST",
      body: JSON.stringify({ name, link, picture }),
      headers: new Headers({ "Content-type": "application/json" }),
    })
      .then((v) => v.json())
      .then((res) => dispatch(postNewMuseumCity({ res, city })));
  };
};
