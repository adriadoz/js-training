import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import LoginIcon from '@material-ui/icons/AccountCircle'
import GitHubIcon from '../../Icon/GitHub'
import Tooltip from 'material-ui/Tooltip'

import './index.css'

const AppBarButton = ({ title, ...props }) => (
  <Tooltip leaveDelay={300} title={title}>
    <IconButton color="primary" {...props} />
  </Tooltip>
)

const ButtonAppBar = props => {
  const Link = props => <a {...props} />
  return (
    <header className="jst-Header">
      <Toolbar>
        <IconButton color="primary">
          <MenuIcon />
        </IconButton>
        <nav className="jst-Header-Button">
          <AppBarButton title="Sign In">
            <LoginIcon />
          </AppBarButton>
        </nav>
      </Toolbar>
    </header>
  )
}

export default ButtonAppBar
