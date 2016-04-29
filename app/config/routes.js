const React = require('react'),
      ReactRouter = require('react-router'),
      Router = ReactRouter.Router,
      Route = ReactRouter.Route,
      IndexRoute = ReactRouter.IndexRoute,
      hashHistory = ReactRouter.hashHistory,
      Main = require('../components/Main'),
      Home = require('../components/Home')


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route />
    </Route>
  </Router>
)


module.exports = routes
