import React from 'react'

import Counter from './Counter'
import Paper from './components/Paper'
import Navigation from './Navigation/Navigation';


const App = (props) => (
  <div>
  <Navigation />
 
  <Paper>
    <Counter
    startNumber={5}
    />
  </Paper> 
  </div>
)

export default App
