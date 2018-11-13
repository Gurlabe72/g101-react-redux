import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    console.warn(this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" className="navbar-brand">CodeKnowledge</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse">
        <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    )
  }
}

const select = (state) => {
  return {
    ...state
  }
}
export default withRouter(connect(select)(Navbar));