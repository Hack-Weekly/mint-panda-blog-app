import { ChangeEvent, SetStateAction, useState } from 'react'
import './SearchBar.css'
import { RxMagnifyingGlass } from 'react-icons/rx'

export default function SearchBar() {

  const [query, setQuery] = useState('');

  function search() {
    if (query === '') return;
    //search for posts with passed tag
  }

  return (
    <div className="search shadow">
        <input onChange={e => setQuery(e.target.value)} type="text" />
        <button className="shadow-small" onClick={search}>
          <RxMagnifyingGlass/>
        </button>
    </div>
  )
}