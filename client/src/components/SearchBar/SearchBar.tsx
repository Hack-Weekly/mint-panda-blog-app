import { useState, useEffect, useRef } from 'react'
import './SearchBar.css'
import { motion, AnimatePresence } from 'framer-motion'
import { RxMagnifyingGlass } from 'react-icons/rx'

export default function SearchBar() {

  const [query, setQuery] = useState('');
  const [lastScroll, setLastScroll] = useState('up');



  useEffect(() => {
    let waiting = false;
    let scrollPos = 0;
    function handleScroll(){
      if (!waiting) {
        let newScrollPos = window.scrollY;
        newScrollPos > scrollPos ? setLastScroll("down") : setLastScroll("up");
        scrollPos = newScrollPos;
        waiting = true;
        setTimeout(() => {waiting = false}, 100);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return (() => window.removeEventListener('scroll', handleScroll));
  },[])

  function search() {
    if (query === '') return;
    //search for posts with passed tag
  }

  return (

    <AnimatePresence>
      {lastScroll == "up" &&
        <motion.div className="search shadow" key="nav-menu" initial={{top: "-8rem"}} animate={{ top: "0"}} exit={{top: "-8rem"}}>
            <input onChange={e => setQuery(e.target.value)} type="text" />
            <button className="shadow-small" onClick={search}>
              <RxMagnifyingGlass/>
            </button>
        </motion.div>
      }
    </AnimatePresence>
  )
}
