import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import { getCitiesList, getArtCitySelector } from "./../reducer";

import Head from "./../components/Head";
import ListCities from "./../components/ListCities";

class Header extends Component {
  componentDidMount() {
    const { fetchCities } = this.props;
    fetchCities();
  }

  render() {
    const { cities, getArtCityList, art } = this.props;
    const show = art.show;
    const onClickArt = (city) => {
      getArtCityList(cities, city);
    };
    return (
      <Head
        title="Bienvenido"
        body={
          <ListCities
            cities={cities}
            show={show}
            onClickArt={onClickArt}
          ></ListCities>
        }
      ></Head>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: getCitiesList(state),

  art: getArtCitySelector(state),
});

const mapDispatchToPorps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToPorps)(Header);
