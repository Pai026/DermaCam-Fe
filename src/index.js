import React from 'react';
import ReactDOM from 'react-dom';

import Logapp from './components/login.js'

const App = () =>{
  return(
    <div className="body">
     <Logapp/>
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#root'))
