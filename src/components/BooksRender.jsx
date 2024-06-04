import React from 'react'
import fantasy from "/Books/fantasy.json";
import horror from "/Books/horror.json";
import history from "/Books/history.json";
import romance from "/Books/romance.json";
import scifi from "/Books/scifi.json";
import AllTheBooks from './AllTheBooks'

export default function BooksRender({type, text}) {
 
  return (
    <>
    {type === 'fantasy' && <AllTheBooks text={text} books = {fantasy} />}
    {type === 'history' && <AllTheBooks text={text} books = {history} />}
    {type === 'romance' && <AllTheBooks text={text} books = {romance} />}
    {type === 'scifi' && <AllTheBooks text={text} books = {scifi} />}
    {type === 'horror' && <AllTheBooks text={text}books = {horror} />}
    </>
    
  );
};
