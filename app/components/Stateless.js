/*
A really great paradigm to get used to is separating your components into container components and presentational components, with presentational components optionally taking in some data and rendering a view
*/

const React = require('react')

/*
It's a good idea to try to use as many Stateless Functional Components as possible because then you have a good separation of presentational components vs other components.
*/
const HelloWorld = (props) => (<div>Hello {props.name}</div>)

module.exports = HelloWorld
