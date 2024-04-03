import React from 'react'
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BannerComponent from './components/BannerComponent/BannerComponent'; 

const App = () => {
  return (
    <div >
      <NavbarComponent/>
       <BannerComponent/>
    </div>
  )
}

export default App
