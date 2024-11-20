import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil/Accueil'
import Contact from './pages/Contact/Contact'
import Services from './pages/Services/Services'
import Footer from './components/Footer/Footer'
import DevisForm from './components/Devis/DevisForm'


const App = () => {

  const [showDevis, setShowDevis] = useState(false)

  return (
    <>
    {showDevis?<DevisForm setShowDevis={setShowDevis} />:<></>}
      <div className='app'>
        <Navbar setShowDevis={setShowDevis} />
        <Routes>
          <Route path='/' element={<Accueil/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Services' element={<Services/>} />
        </Routes>  
      </div>
      <Footer />
    </>
  );
}

export default App;
      