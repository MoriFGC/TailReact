import './App.css'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import NavBar2 from './components/NavBar2'
import { useState } from 'react';
import Button from './components/Button';
import BooksRender from './components/BooksRender';
import { ThemeContext } from './modules/Modules';




function App() {

  
const [text, setText] = useState('');
const [type, setType] = useState('fantasy');

const [theme, setTheme] = useState('dark')
  
  return (
    <>
     <ThemeContext.Provider value={[theme, setTheme]}>
      <NavBar2 text={text} setText={setText}/>
      <Welcome />
      <Button setType={setType} />
      <BooksRender type={type} text={text}/>
      <Footer />
     </ThemeContext.Provider>
    </>
  )
}

export default App
