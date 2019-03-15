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
    >
      {props.children}
    </DesktopContainer>
    <MobileContainer
      content={props.content}
      subContent={props.subContent}
      buttonText={props.buttonText}
    >
      {props.children}
    </MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};
