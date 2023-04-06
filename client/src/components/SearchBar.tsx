import { ChangeEvent, SetStateAction, useState } from 'react'

export default function SearchBar() {

  const [query, setQuery] = useState('');

  function search() {
    if (query === '') return;
    //search for posts with passed tag
  }

  return (
    <div className="search">
        <input onChange={e => setQuery(e.target.value)} type="text" />
        <button onClick={search}>Search</button>
    </div>
  )
}