import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import SignIn from './layouts/signin/sign-in'
import Navbar from './components/navbar/navbar'
import SignUp from './layouts/signup/sign-up'
import Boxs from './layouts/boxs/boxs'
import BoxItem from './layouts/box-item/box-item'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppContext from './AppContext'
import { useState } from 'react'

function App() {
  const [signInTick, setSignInTick] = useState(false);

  return (
    <div className='app-container'>
      <AppContext.Provider value={{signInTick, setSignInTick}}>
        <Navbar />
        <div className='container'>
          <BrowserRouter>
            <Routes>
              <Route path='' element={<Boxs />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/item/:itemId' element={<BoxItem />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
