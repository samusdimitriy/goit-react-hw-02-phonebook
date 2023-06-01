import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import { AppContainer } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    filteredContacts: [],
  };

  componentDidMount() {
    this.filterContacts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      this.filterContacts();
    }
  }

  handleChange = value => {
    this.setState({ filter: value }, this.filterContacts);
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    this.setState({ filteredContacts });
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
    const { filteredContacts } = this.state;
    return (
      <AppContainer>
        <Phonebook onSubmit={this.addContact} />
        <Contacts
          filter={this.state.filter}
          filteredContacts={filteredContacts}
          onChange={this.handleChange}
          onDelete={this.onDelete}
        />
      </AppContainer>
    );
  }
}

export default App;
