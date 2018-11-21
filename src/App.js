import React from 'react'

import Counter from './Counter'
import Paper from './components/Paper'


const App = (props) => (
  <Paper>
    <Counter
    startNumber={5}
    />
  </Paper>
)

export default App
