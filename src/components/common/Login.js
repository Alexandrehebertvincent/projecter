import React from 'react'
import FlatButton from 'material-ui/FlatButton'

class Login extends React.Component {
  static muiName = 'FlatButton'

  render () {
    return (
      <FlatButton {...this.props} label='Login' />
    )
  }
}

export default Login
