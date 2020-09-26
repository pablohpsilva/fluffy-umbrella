import React from 'react'
import ReactDOM from 'react-dom'

import { App } from '@/core'

const Mount = el => {
  ReactDOM.render(<App />, el)
}

export default Mount
