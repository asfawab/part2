import { useState } from 'react'
import Show from './components/show'

 const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const personChanges = (e)=>{
    e.preventDefault();
       setNewName(e.target.value);
     
  }
  const addnename = (e)=>{
    e.preventDefault();
    const n ={
      name: newName
    }
    let newn= persons.concat(n)
    console.log(newn)
    setPersons(newn)
    setNewName('')
   
  }
 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addnename}>
        <div>
          name: <input placeholder={newName} onChange ={personChanges}/>
        </div>
        <div>
          <button onClick={addnename} type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Show peop={persons}/>
    </div>
  )
}

export default App
