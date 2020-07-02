import React, { Component } from 'react'
import Link from 'react-router-dom/Link';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

class Navbar extends Component {
  render() {
    return (
      <AppBar>
	    <Toolbar>
	      <img src="icon.png" alt="Water Logo" width="50" height="50"/>
	      <Button color="inherit" component={Link} to="/">Miner Lake Water Temp</Button>
	      <Button color="inherit" component={Link} to="/">Home</Button>
	      <Button color="inherit" component={Link} to="/about">About</Button>
	    </Toolbar>
      </AppBar> 
    )
  }
}

export default Navbar
