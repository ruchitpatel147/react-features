import React from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const Information = () => {
  return (
    <div>
     <h1>Title</h1>
      <h2>Hello</h2>
    </div>
  )
}
function Tooltip () {
  return (
    <div>
      <div>
        <Tippy placement = "left" content={<span style={{backgroundColor: 'red'}}>Color</span>}>
        <button>Tooltip</button>
        </Tippy>
      </div>
      <div>
        <Tippy content={<Information></Information>}>
          <button>Component</button>
        </Tippy>
      </div>
    </div>
  )
}

export default Tooltip