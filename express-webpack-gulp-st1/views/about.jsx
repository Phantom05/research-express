const React = require('react')

class HelloMessage extends React.Component {
  render() {
    return <div>Hello from {this.props.name}</div>
  }
}

module.exports = HelloMessage