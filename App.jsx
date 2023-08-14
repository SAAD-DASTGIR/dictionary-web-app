import { useEffect, useState } from 'react'
import Search from './Components/Search'
import Header from './Components/Header'
import Data from './Components/Data'
import Details from './Components/Details'
import Footer from './Components/Footer'

function App() {
  const [meaning,setmeaning]=useState([{},{},{},{}])
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const url="https://api.dictionaryapi.dev/api/v2/entries/en/"
  const search = (e) => {
    e.preventDefault();
      try {
        
        fetch(`${url}${query}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setmeaning(data);
            setError(null)
            setQuery('');
          }
            )
      } 
      catch (error) {
        console.error("Error fetching data", error);
      }
    
  };
 
  const Entry = meaning[0] || []
  return (
    <>
    {(typeof Entry  !== "undefined") ? (
     
    <div className='box'>
    <Header/>
    <Search
      onChange={e => setQuery(e.target.value)}
      onclick={search}
      value={query}
    />
    <Details 
      sound={Entry.phonetics?.[0]?.audio}
    />

    <Data
      Word={Entry.word||''}
      partofspeech={Entry.meanings?.[0]?.partOfSpeech || ''}
      Defination0={Entry.meanings?.[0]?.definitions?.[0]?.definition || ''}
      Defination={Entry.meanings?.[0]?.definitions?.[1]?.definition || ''}
      partofspeech1={Entry.meanings?.[1]?.partOfSpeech || ''}
      Defination1={Entry.meanings?.[1]?.definitions?.[0]?.definition || ''}
      Defination2={Entry.meanings?.[1]?.definitions?.[1]?.definition || ''}
      example={Entry.meanings?.[0]?.definitions?.[0]?.example || ''}
      synonym={Entry.meanings?.[0]?.synonyms?.[0] || ''}
      synonym1={Entry.meanings?.[0]?.synonyms?.[1] || ''}
      synonym2={Entry.meanings?.[0]?.synonyms?.[2] || ''}
      antonym={Entry.meanings?.[1]?.antonyms?.[0] || ''}
      antonym1={Entry.meanings?.[1]?.antonyms?.[1] || ''}
      antonym2={Entry.meanings?.[1]?.antonyms?.[2] || ''}

    />
    <Footer/>
    </div>
    ) : ( (<h2>Wrong word</h2>))}
    </>
  )
}

export default App
