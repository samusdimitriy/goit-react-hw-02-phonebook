import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import { AppContainer } from './App.styled';

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

  render() {
    const { contacts, filter } = this.state;

    return (
      <AppContainer>
        <Phonebook onSubmit={this.addContact} />
        <Contacts
          contacts={contacts}
          filter={filter}
          onChange={this.handleChange}
          onDelete={this.onDelete}
        />
      </AppContainer>
    );
  }
}

export default App;
