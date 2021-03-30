import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import {
  getCitiesList,
  getArtCitySelector,
  postNewMuseumSelector,
  getArtDataSelector,
} from "./../reducer";

import Head from "./../components/Head";
import ListCities from "./../components/ListCities";
import { artCities } from "../reducer/cities";

class Header extends Component {
  componentDidMount() {
    if (this.props.cities.length === 0) {
      this.props.fetchCities();
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const list = Object.keys(this.props.art)[0];
    const name = e.target.name.value;
    const link = e.target.link.value;
    const picture = e.target.picture.value;
    this.props.postNewMuseum(list, name, link, picture);
  };

  onClickArt = (city) => {
    const { cities, getArtCityList } = this.props;

    getArtCityList(cities, city);
  };
  renderBody = () => {
    const { cities, art } = this.props;

    const list = Object.values(art)[0];
    return (
      <ListCities
        cities={cities}
        show={cities.show}
        art={list}
        onClickArt={this.onClickArt}
        handleSubmit={this.handleSubmit}
      ></ListCities>
    );
  };

  render() {
    // const show = art.show;
    // const onClickArt = (city) => {};

    return <Head title="Bienvenido" body={this.renderBody()}></Head>;
  }
}

const mapStateToProps = (state) => ({
  cities: getCitiesList(state),
  art: getArtCitySelector(state),
});

const mapDispatchToPorps = (dispatch) => bindActionCreators(actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToPorps)(Header));
