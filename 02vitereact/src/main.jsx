import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp() {
  return(
    <div>
      <h1>Customs Apps!</h1>
    </div>
  )
  
}

const anotherUser = "chai aur code" 
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google',
//   anotherUser
// }

// createElement used for to create in react
const anotherElement =(
  <a href='https://google.com' target='_blank' >Visit Google</a>
)  
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me ti visit Google || ', 
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
    // // anotherElement
    // reactElement
  
)
