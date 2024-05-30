import './App.css'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import NavBar2 from './components/NavBar2'
import { useState } from 'react';
import Button from './components/Button';
import BooksRender from './components/BooksRender';



function App() {

  const [type, setType] = useState('fantasy');

  
  return (
    <>
      <NavBar2 />
      <Welcome />
      <Button setType={setType} />
      <BooksRender type={type} />
      <Footer />
    </>
  )
}

export default App
