import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SeachBox from "./components/SeachBox/SeachBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContancts = localStorage.getItem("contacts");
    if (saveContancts) {
      return JSON.parse(saveContancts);
    }
    return [
      { id: "id-1 ", name: "Rosie Simpson", number: "459-12-56 " },
      { id: "id-2 ", name: "Hermione Kline", number: "443-89-12 " },
      { id: "id-3 ", name: "Eden Clements", number: "645-17-79 " },
      { id: "id-4 ", name: "Annie Copeland", number: "227-91-26 " },
    ];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const [input, setInput] = useState("");
  function changeInput(event) {
    setInput(event.target.value);
  }

  function submit(data) {
    const newContact = { ...data, id: nanoid() };
    setContacts([...contacts, newContact]);
  }
  function deleteContact(id) {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  }
  const filterContactsArray = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <>
      <div>
        <h1> Phonebook </h1>
        <ContactForm submit={submit} />
        <SeachBox input={input} changeInput={changeInput} />
        <ContactList
          filterContactsArray={filterContactsArray}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
