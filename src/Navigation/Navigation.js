import React from 'react'

import AppBar from 'material-ui/AppBar'

function handleClick() {
    alert('onClick triggered on the title component');
  }
  

const Navigation = (props) => (
    <AppBar
        onLeftIconButtonClick = {handleClick}
        title="JFDDL6"
    />
)

export default Navigation