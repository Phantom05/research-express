


var React = require('react');

function Error(props) {
  return (<div>
    <h1>{props.message}</h1>
    <h2>{props.status}</h2>
    <pre>{props.stack}</pre>
  </div>)
}

module.exports = Error;