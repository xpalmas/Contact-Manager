import React, {useState, useEffect} from 'react';
import { uuid } from 'uuidv4';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";


function App() {
  const [contacts, setContacts] = useState([]);
  const   LOCAL_STORAGE_KEY = 'contacts';

  const addContactHandler = (contact) =>{
    setContacts([...contacts, {id: uuid(), ...contacts}]);
  };
  
  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
