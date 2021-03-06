import React from 'react'
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router'
import PromptContainer from '../containers/PromptContainer'
import ConfirmBattleComponent from '../containers/ConfirmBattleContainer'
import ResultsContainer from '../containers/ResultsContainer'
import Home from '../components/Home'
import Main from '../components/Main'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path='playerOne' header="Player One" component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header="Player Two" component={PromptContainer} />
      <Route path='battle' component={ConfirmBattleComponent} />
      <Route path='results' component={ResultsContainer} />
    </Route>
  </Router>
)


export default routes
