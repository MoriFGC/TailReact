import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import fantasy from "/Books/fantasy.json";
import AllTheBooks from './components/AllTheBooks'
import NavBar2 from './components/NavBar2';


function App() {
  return (
    <>
      <NavBar2 />
      {/* <NavBar /> */}
      <Welcome />
      <AllTheBooks books = {fantasy} />
      <Footer />
    </>
  )
}

export default App
