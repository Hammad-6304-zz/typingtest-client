import PropTypes from "prop-types";
import { getWidth } from "./getwidth";
import AppBar from "../subComponents/navbar";
import React, { Component } from "react";
import {
 
  Responsive
} from "semantic-ui-react";
class DesktopContainer extends Component {
  render() {
    const { children } = this.props; 

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}
      >
        <AppBar
          content={this.props.content}
          subContent={this.props.subContent}
          buttonText={this.props.buttonText}
          color = {this.props.color}
          bgURL = {this.props.bgURL}
          activehome = {this.props.activehome}
      activetest = {this.props.activetest}
      activelearn = {this.props.activelearn}
      activescore = {this.props.activescore}
      loggedin={this.props.loggedin}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};
export default DesktopContainer;
