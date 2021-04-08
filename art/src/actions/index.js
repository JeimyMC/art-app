export const GET_CITIES = "GET_CITIES";
export const GET_ART_CITY = "GET_ART_CITY";
export const SET_DATA_ART_CITY = "SET_DATA_ART_CITY";
export const GET_MUSEUM_INFO = "GET_MUSEUM_INFO";
export const POST_NEW_MUSEUM = "POST_NEW_MUSEUM";
export const GET_ART_DATA = "GET_ART_DATA";
export const POST_NEW_CITY = "POST_NEW_CITY";
export const DELETE_MUSEUM = "DELETE_MUSEUM";
export const UPDATE_MUSEUM = "UPDATE_MUSEUM";
export const DELETE_CITY = "DELETE_CITY";
export const DELETE_ALL_MUSEUM = "DELETE_ALL_MUSEUM";
export const DELETE_ART = "DELETE_ART";

const getCities = (payload) => ({ type: GET_CITIES, payload });
const getArtCity = (payload) => ({ type: GET_ART_CITY, payload });
const getMuseumInfo = (payload) => ({ type: GET_MUSEUM_INFO, payload });
const postNewMuseumCity = (payload) => ({ type: POST_NEW_MUSEUM, payload });
const postCity = (payload) => ({ type: POST_NEW_CITY, payload });
const delMuseum = (payload) => ({ type: DELETE_MUSEUM, payload });
const upMuseum = (payload) => ({ type: UPDATE_MUSEUM, payload });
const delCity = (payload) => ({ type: DELETE_CITY, payload });
const delArt = (payload) => ({ type: DELETE_ART, payload });
const delAllMuseums = (payload) => ({ type: DELETE_ALL_MUSEUM, payload });

export const fetchCities = () => {
  return (dispatch) => {
    return fetch("http://localhost:3002/city")
      .then((data) => data.json())
      .then((res) => {
        dispatch(getCities(res));
      })
      .catch((res) => console.log(res));
  };
};

export const getArtCityList = (cities, id) => {
  return (dispatch) => {
    const data = cities.find((item) => item.id === id);

    const dataShow = {
      [data.id]: data.artCity,
      show: (data.show = !data.show),
    };
    const notShow = cities.filter((item) => item.id !== id);
    notShow.map((item) => {
      if (item.show) {
        return (item.show = false);
      }
      return item;
    });

    return fetch(`http://localhost:3002/city/${id}/art`)
      .then((data) => data.json())
      .then((res) => dispatch(getArtCity({ [data.name]: res, id: data.id })))
      .catch((res) => console.log(res));
  };
};

export const getMuseum = (city, name) => {
  return (dispatch) => {
    const information = city.find((item) => item.name === name);
    dispatch(getMuseumInfo(information));
  };
};

export const postNewMuseum = (id, city, name, link, picture) => {
  return (dispatch) => {
    return fetch(`http://localhost:3002/city/${id}/art`, {
      method: "POST",
      body: JSON.stringify({ name, link, picture }),
      headers: new Headers({ "Content-type": "application/json" }),
    })
      .then((v) => v.json())
      .then((res) => dispatch(postNewMuseumCity({ res, city })));
  };
};

export const postNewCity = (city) => {
  return (dispatch) => {
    return fetch(`http://localhost:3002/city`, {
      method: "POST",
      body: JSON.stringify({ name: city, show: false }),
      headers: new Headers({ "Content-type": "application/json" }),
    })
      .then((data) => data.json())
      .then((res) => dispatch(postCity(res)));
  };
};

export const deleteMuseum = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3002/art/${id}`, {
      method: "DELETE",
      headers: new Headers({ "Content-type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(delMuseum(data)))
      .catch((err) => console.log(err));
  };
};

export const updateMuseum = (idMuseum, cityId, name, link, picture) => {
  return (dispatch) => {
    return fetch(`http://localhost:3002/art/${idMuseum}`, {
      method: "PUT",
      body: JSON.stringify({ name, link, picture, cityId }),
      headers: new Headers({ "Content-type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(upMuseum(data)))
      .catch((err) => console.log(err));
  };
};

export const delecteAllMuseums = (museums) => {
  return (dispatch) => {
    return museums.map((item) => {
      return fetch(`http://localhost:3002/art/${item.id}`, {
        method: "DELETE",
        headers: new Headers({ "Content-type": "application/json" }),
      })
        .then((res) => res.json())
        .then(() => dispatch(delAllMuseums({})))
        .catch((err) => console.log(err));
    });
  };
};

export const deleteCity = (cities, id) => {
  const listCities = cities.filter((item) => item.id !== id);

  return (dispatch) => {
    dispatch(delArt({ name: [] }));
    return fetch(`http://localhost:3002/city/${id}`, {
      method: "DELETE",
      headers: new Headers({ "Content-type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(delCity(listCities)))
      .catch((err) => console.log(err));
  };
};
