import './App.css'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import NavBar2 from './components/NavBar2'
import { useState } from 'react';
import Button from './components/Button';
import BooksRender from './components/BooksRender';



function App() {

  
const [text, setText] = useState('');
const [type, setType] = useState('fantasy');

  
  return (
    <>
      <NavBar2 text={text} setText={setText}/>
      <Welcome />
      <Button setType={setType} />
      <BooksRender type={type} text={text}/>
      <Footer />
    </>
  )
}

export default App
