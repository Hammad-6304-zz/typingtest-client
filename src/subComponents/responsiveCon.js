import PropTypes from 'prop-types'
import React from 'react'
import MobileContainer from '../subComponents/mobileCon'
import DesktopContainer from '../subComponents/desktopCon'
export const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  )
  
  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }