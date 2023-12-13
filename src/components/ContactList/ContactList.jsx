import { useEffect, useState } from 'react';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';

import {
  List,
  ListItem,
  ContactInfo,
  Name,
  PhoneNumber,
  DeleteButton,
} from './ContactList.styled';

import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/selectors';

import { Loader } from 'components/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [contactToDeleteId, setContactToDeleteId] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!visibleContacts?.length && !error & !isLoading) {
    return <div>No contacts added yet.</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactInfo>
            <Name>{name}</Name>
            <PhoneNumber>{number}</PhoneNumber>
          </ContactInfo>
          <DeleteButton
            onClick={() => {
              setContactToDeleteId(id);
              dispatch(deleteContact(id)).then(() => {
                setContactToDeleteId(null);
              });
            }}
            disabled={isLoading && contactToDeleteId === id}
          >
            {contactToDeleteId === id && <Loader />}
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};
