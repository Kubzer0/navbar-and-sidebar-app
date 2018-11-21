import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './Counter'

import Navigation from './Navigation/Navigation';


const App = (props) => (
  <Router>
    <div>
      <Navigation>
        <Link to="/">Dashboard</Link>
        <Link to="/counter">Counter</Link>
      </Navigation>

      <div>

        <Route path="/counter" exact={true} component={() => <Counter startNumber={5} />} />

      </div>



    </div>
  </Router>
)

export default App
