var React = require('react')
var ReactDOM = require('react-dom')
var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello Charlie!
      </div>
    )
  }
});

//we’re using ReactDOM.render and not React.render. This was a change made in React .14 to make React more modular.
ReactDOM.render(<HelloWorld />, document.getElementById('app'));
