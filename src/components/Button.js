import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
}

const Button = (props)=>(
  <div>
   <RaisedButton 
   label="Primary" 
   primary={true} 
   style={style} />
  </div>
)

export default Button
