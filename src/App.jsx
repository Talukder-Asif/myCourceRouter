import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
function App() {
  const {Cources, setCources} = useState([])
  useEffect(() => {
    fetch('../public/cources.json')
    .then(ref => ref.json())
    .then(data => console.log(data))
  },[])

  return (
    <>
    </>
  )
}

export default App
