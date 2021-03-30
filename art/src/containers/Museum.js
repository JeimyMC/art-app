import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
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

class Main extends Component {
  handleClickBtn = () => this.props.history.goBack();
  render() {
    const { name, art, getMuseum, museum } = this.props;
    getMuseum(Object.values(art)[0], name);

    return (
      <Head
        title={name}
        body={
          <MuseumMain data={museum} btnBack={this.handleClickBtn}></MuseumMain>
        }
      ></Head>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: getCitiesList(state),
  art: getArtCitySelector(state),
  museum: getMuseumSelector(state),
});

const mapDispatchToPorps = (dispatch) => bindActionCreators(actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToPorps)(Main));
