import './styles'
import React from 'react'

const Header = React.createClass({
  displayName: 'Header',

  propTypes: {
    label: React.PropTypes.string
  },

  render() {
    return (
      <header className='app-header'>
        <h1>{this.props.label}</h1>
      </header>
    )
  }
})

export default Header
