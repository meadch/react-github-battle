var React = require('react')
var ReactDOM = require('react-dom')
var HelloWorld = React.createClass({
  //React's render method needs to be a pure function
  render: function(){
    var friends = ["Janel", "Dan", "Hank"]
    return (
      <div>
        Hello {this.props.name}!
        <ShowList names={friends} />
      </div>
    )
  }
});

//The whole concept of a pure function is consistency and predictability
/*
- Pure functions always return the same result given the same arguments.
- Pure function's execution doesn't depend on the state of the application.
- Pure functions don't modify the variables outside of their scope.
*/
var ShowList = function(props){
  var friends = props.names.map( (friend, idx) => ( <li key={idx}>{friend}</li> ) )
  return (
    <ul>
      {friends}
    </ul>
  )
}

ReactDOM.render(<HelloWorld name="Charlie" />, document.getElementById('app'));
