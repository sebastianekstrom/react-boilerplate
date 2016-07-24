import React, {PropTypes, Component} from 'react'

class User extends Component {
  render() {
    const {name, age} = this.props.user

    return (
      <h1>{name}{', '}{age}</h1>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User
