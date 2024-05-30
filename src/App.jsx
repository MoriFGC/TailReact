import './App.css'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import fantasy from "/Books/fantasy.json";
import horror from "/Books/horror.json";
import history from "/Books/history.json";
import romance from "/Books/romance.json";
import scifi from "/Books/scifi.json";
import AllTheBooks from './components/AllTheBooks'
import NavBar2 from './components/NavBar2'
import { useState } from 'react';



function App() {

  const [type, setType] = useState('fantasy');
  
  return (
    <>
      <NavBar2 />
      <Welcome />
      <div className='flex justify-center'>
        <button className='m-[30px] bg-slate-800 text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]  ' onClick={() => setType('fantasy')}>Fantasy</button>
        <button className='m-[30px] bg-slate-800 text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]  ' onClick={() => setType('history')}>History</button>
        <button className='m-[30px] bg-slate-800 text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]  ' onClick={() => setType('romance')}>Romance</button>
        <button className='m-[30px] bg-slate-800 text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]  ' onClick={() => setType('scifi')}>Scifi</button>
        <button className='m-[30px] bg-slate-800 text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]  ' onClick={() => setType('horror')}>Horror</button>
      </div>

      {type === 'fantasy' && <AllTheBooks books = {fantasy} />}
      {type === 'history' && <AllTheBooks books = {history} />}
      {type === 'romance' && <AllTheBooks books = {romance} />}
      {type === 'scifi' && <AllTheBooks books = {scifi} />}
      {type === 'horror' && <AllTheBooks books = {horror} />}
      <Footer />
    </>
  )
}

export default App
