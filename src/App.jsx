import './App.css'
import Footer from './components/Footer'
import NavBar2 from './components/NavBar2'
import { useState } from 'react';
import { ThemeContext } from './modules/Modules';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Pagina404 from './pages/Page404';
import BookDetails from './pages/BookDetails';




function App() {

  
const [text, setText] = useState('');
const [type, setType] = useState('fantasy');

const [theme, setTheme] = useState('dark')
  
  return (
    <Router>
     <ThemeContext.Provider value={[theme, setTheme]}>
      <NavBar2 text={text} setText={setText}/>

      <Routes>
        <Route path='/' element ={ <Home text={text} type={type} setType={setType} />}></Route>
        <Route path='*' element ={<Pagina404 />}></Route>
        <Route path='/details/:id' element ={<BookDetails />}></Route>
      </Routes>

      <Footer />
     </ThemeContext.Provider>
    </Router>
  )
}

export default App
