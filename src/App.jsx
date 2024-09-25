import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import SignIn from './layouts/signin/sign-in'
import Navbar from './components/navbar/navbar'
import SignUp from './layouts/signup/sign-up'
import Boxs from './layouts/boxs/boxs'
import BoxItem from './layouts/box-item/box-item'

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='container'>
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <Boxs /> */}
        <BoxItem />
      </div>
    </div>
  )
}

export default App
