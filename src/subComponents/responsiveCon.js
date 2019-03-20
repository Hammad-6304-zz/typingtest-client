import PropTypes from "prop-types";
import React from "react";
import MobileContainer from "../subComponents/mobileCon";
import DesktopContainer from "../subComponents/desktopCon";
export const ResponsiveContainer = props => (
  <div>
    <DesktopContainer
      content={props.content}
      subContent={props.subContent}
      buttonText={props.buttonText}
      color = {props.color}
      bgURL = {props.bgURL}
      activehome = {props.activehome}
      activetest = {props.activetest}
      activelearn = {props.activelearn}
      activescore = {props.activescore}
      loggedin = {props.loggedin}
      >
      {props.children}
    </DesktopContainer>
    <MobileContainer
      color = {props.color}
      content={props.content}
      subContent={props.subContent}
      buttonText={props.buttonText}
      bgURL = {props.bgURL}
      activehome = {props.activehome}
      activetest = {props.activetest}
      activelearn = {props.activelearn}
      activescore = {props.activescore}
      loggedin = {props.loggedin}
    >
      {props.children}
    </MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};
