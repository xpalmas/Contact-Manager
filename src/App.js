import React, {useState} from 'react';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) =>{
    console.log(contact)
  }
  
  return (
    <div>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
