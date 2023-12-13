import { AppContainer, Title, FormContainer } from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export const App = () => {
  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <FormContainer>
        <ContactForm />
      </FormContainer>
      <Title>Phonebook</Title>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
