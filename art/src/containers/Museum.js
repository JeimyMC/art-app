import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import {
  getCitiesList,
  getArtCitySelector,
  getMuseumSelector,
} from "./../reducer";
import MuseumMain from "./../components/MuseumMain";
import Head from "./../components/Head";
import { cities } from "../reducer/cities";

class Main extends Component {
  componentDidMount() {
    const { cities, art, name, getMuseum, fetchCities } = this.props;

    if (cities.length === 0) {
      fetchCities();
    }
    if (Object.keys(art).length > 0) {
      getMuseum(Object.values(art)[0], name);
    }
  }
  handleClickBtn = () => this.props.history.goBack();

  renderBody = () => {
    const {
      name,
      art,
      cities,
      getMuseum,
      id,
      getArtCityList,
      museum,
    } = this.props;

    if (cities.length > 0 && Object.keys(art).length === 0) {
      getArtCityList(cities, Number(id));
    }

    if (Object.keys(art).length > 0 && Object.keys(museum).length === 0) {
      getMuseum(Object.values(art)[0], name);
    }

    return (
      <MuseumMain data={museum} btnBack={this.handleClickBtn}></MuseumMain>
    );
  };

  render() {
    return <Head title={this.props.name} body={this.renderBody()}></Head>;
  }
}

const mapStateToProps = (state) => ({
  cities: getCitiesList(state),
  art: getArtCitySelector(state),
  museum: getMuseumSelector(state),
});

const mapDispatchToPorps = (dispatch) => bindActionCreators(actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToPorps)(Main));
