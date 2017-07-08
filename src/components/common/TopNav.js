import React from 'react'
import { browserHistory } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Toggle from 'material-ui/Toggle'
import Login from './Login'
import Logged from './Logged'

class TopNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      logged: true,
      open: false
    }
  }

  log = (event, logged) => {
    this.setState({ logged: logged })
  }

  goToHome = () => {
    this.setState({ open: false })
    browserHistory.push('/')
  }

  goToCounter = () => {
    this.setState({ open: false })
    browserHistory.push('/counter')
  }

  openDrawer = () => {
    this.setState({ open: !this.state.open })
  }

  render () {
    return (
      <div>
        <Toggle
          label='Logged'
          defaultToggled
          onToggle={this.log}
          labelPosition='right'
          style={{ margin: 20 }}
        />
        <AppBar
          title='Producer'
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
          onLeftIconButtonTouchTap={this.openDrawer}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem
            onTouchTap={this.goToHome}
          >
            Home
          </MenuItem>
          <MenuItem
            onTouchTap={this.goToCounter}
          >
            Counter
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default TopNav
