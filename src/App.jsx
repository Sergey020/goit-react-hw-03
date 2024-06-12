// import { useState } from 'react'
import './App.css'
import ContactForm from "./components/ContactForm/ContactForm"
import SeachBox from './components/SeachBox/SeachBox'
import ContactList from './components/ContactList/ContactList'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      < h1 > Phonebook </ h1 > 
  < ContactForm /> 
  < SeachBox /> 
  < ContactList /> 
  </div>
    </>
  )
}

export default App
