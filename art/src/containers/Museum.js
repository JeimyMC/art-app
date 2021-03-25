import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import { getArtCitySelector } from "./../reducer";

class Main extends Component {
  render() {
    const { name } = this.props;
    console.log(name);
    return <p>HEY</p>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToPorps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToPorps)(Main);
