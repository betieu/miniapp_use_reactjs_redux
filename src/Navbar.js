import React, { Component } from 'react';
import FormAdd from './FormAdd.js';
import {connect} from 'react-redux';

class Navbar extends Component {

  isClickToRenderHome = () => {
    this.props.renderHome()
    
  }
  isClickToRenderAbout = () => {
    this.props.renderAbout()
    
  }

    render() {
        return (
<div>
  <nav className="navbar sticky-top navbar-expand navbar-dark">
    <a className="navbar-brand" href="#" onClick={() => this.isClickToRenderHome()}>
    <div className="logo"/>
    </a>
    <div className="collapse navbar-collapse justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link" href="#" onClick={() => this.isClickToRenderHome()} >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => this.isClickToRenderAbout()}>About</a>
        </li>
      </ul>
      {/* <form className="form-inline my-2 my-md-0">
        <input className="form-control" type="text" placeholder="Search" />
        <button className="btn btn-info">Search</button>
      </form> */}
    </div>
  </nav>
</div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stateRenderPage: state.stateRenderPage
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    renderHome: () => {
      dispatch({type:"RENDER_HOME"})
    },
    renderAbout: () => {
      dispatch({type:"RENDER_ABOUT"})
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)