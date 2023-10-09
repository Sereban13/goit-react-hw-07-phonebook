// import { ContactCard } from 'components/ContactCard.jsx/ContactCard';
import { ContactCard } from 'components/ContactCard.jsx/ContactCard';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts, getError, getIsLoading } from 'redux/contactsSlice';
// import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // const filterName = useSelector(getFilter);

  // console.log(filterName);
  console.log(contacts);

  // const filteredContacts = () => {
  //   if (!items) {
  //     return;
  //   }
  //   return items.filter(item => item.name.toLowerCase().includes(filterName));
  // };
  // const filterContacts = filteredContacts();

  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}
      {/* {contacts.map(({ name, id, phone }) => (
        <li key={id}>
          <span>{name}</span>
          <span>{phone}</span>
        </li>
      ))} */}
      {!contacts ? (
        <p>you do not have any contact</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <ContactCard contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
