import React from 'react'

import Button from './components/Button'
import Paper from './components/Paper'


const App = (props) => (
  <Paper>
    <Button
      onClick={() => alert(1)}
    />
    <Button
      onClick={() => alert(2)}
    />
  </Paper>
)

export default App
