import { useState } from 'react'


import Login from './component/Login'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

function App() {
  

  return (
    <Provider store ={appStore}>
      <Login/>
    </Provider>
  )
}

export default App
