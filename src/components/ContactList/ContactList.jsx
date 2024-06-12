import Contact from "../Contact/Contact";

const ContactList = ({filterContactsArray, deleteContact}) => {
  return (
    <ul>
      {filterContactsArray.map(contact => (
        <li key={contact.id}>
          <Contact name={contact.name} phone={contact.number} deleteContact={()=>deleteContact(contact.id)} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
