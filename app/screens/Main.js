import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import User from '../components/User'
import {fetchUser} from '../actions/userActions'

@connect((store) => {
  return {
    user: store.user.user,
  }
})
class Main extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  render() {
    return (
      <div>
        <h1>{'Heyooo!'}</h1>
        <User user={this.props.user}/>
      </div>
    )
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

export default Main
