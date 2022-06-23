import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  
  const contacts = [
    {
      id: '1',
      name: 'Farhan',
      email: 'farhan@gmail.com'
    },
    {
      id: '1',
      name: 'Alams',
      email: 'alams@gmail.com'
    },
  ];
  
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
