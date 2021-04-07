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

class Museum extends Component {
  componentDidMount() {
    const { cities, art, name, getMuseum, fetchCities } = this.props;

    if (cities.length === 0) {
      fetchCities();
    }
    if (Object.keys(art).length > 0) {
      getMuseum(Object.values(art)[0], name);
    }
  }

  handleClickBtn = () => {
    this.props.fetchCities();
    this.props.history.goBack();
  };

  handleSubmitUpdate = (e) => {
    e.preventDefault();
    const { idMuseum, updateMuseum, idCity, city } = this.props;
    let name = e.target.name.value;
    let link = e.target.link.value;
    let picture = e.target.picture.value;

    updateMuseum(idMuseum, idCity, name, link, picture).then((v) =>
      this.props.history.push(`/${idCity}/${city}/${name}/${idMuseum}`)
    );
    e.target.name.value = "";
    e.target.link.value = "";
    e.target.picture.value = "";
  };
  onClickDelete = () => {
    const {
      deleteMuseum,
      idMuseum,
      cities,
      idCity,
      getArtCityList,
    } = this.props;
    deleteMuseum(Number(idMuseum)).then((v) => this.props.history.goBack());
    getArtCityList(cities, Number(idCity));
  };

  renderBody = () => {
    const {
      name,
      art,
      cities,
      getMuseum,
      idCity,
      getArtCityList,
      museum,
    } = this.props;

    if (cities.length > 0 && Object.keys(art).length === 0) {
      getArtCityList(cities, Number(idCity));
    }

    if (Object.keys(art).length > 0 && Object.keys(museum).length === 0) {
      getMuseum(Object.values(art)[0], name);
    }

    return (
      <MuseumMain
        data={museum}
        btnBack={this.handleClickBtn}
        onClickDelete={this.onClickDelete}
        handleSubmit={this.handleSubmitUpdate}
      ></MuseumMain>
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

export default withRouter(connect(mapStateToProps, mapDispatchToPorps)(Museum));
