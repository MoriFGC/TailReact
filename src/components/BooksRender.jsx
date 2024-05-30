import React from 'react'
import fantasy from "/Books/fantasy.json";
import horror from "/Books/horror.json";
import history from "/Books/history.json";
import romance from "/Books/romance.json";
import scifi from "/Books/scifi.json";
import AllTheBooks from './AllTheBooks'

export default function BooksRender({type}) {
  return (
    <>
    {type === 'fantasy' && <AllTheBooks books = {fantasy} />}
    {type === 'history' && <AllTheBooks books = {history} />}
    {type === 'romance' && <AllTheBooks books = {romance} />}
    {type === 'scifi' && <AllTheBooks books = {scifi} />}
    {type === 'horror' && <AllTheBooks books = {horror} />}
    </>
    
  )
}
