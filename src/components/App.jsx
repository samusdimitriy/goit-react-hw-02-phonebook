import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import { AppContainer } from './App.styled';
import Filter from './Filter/Filter';
import { StyledContactsHeading } from './Contacts/Contacts.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = value => {
    this.setState({ filter: value });
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const existingContact = contacts.find(contact => contact.name === name);

    if (existingContact) {
      alert('Contact already exists');
      return;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <AppContainer>
        <Phonebook onSubmit={this.addContact} />
        <StyledContactsHeading>Contacts</StyledContactsHeading>

        <Filter filter={filter} onFilterChange={this.handleChange} />
        {(this.state.contacts.length < 1 && filter.length > 0) ||
        this.state.contacts.length < 1 ? (
          <p>Your phonebook is empty. Please add contact.</p>
        ) : (
          <Contacts
            contacts={this.filteredContacts()}
            onDelete={this.onDelete}
          />
        )}
      </AppContainer>
    );
  }
}

export default App;
