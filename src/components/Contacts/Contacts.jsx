import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import { nanoid } from 'nanoid';
import {
  StyledContactsContainer,
  StyledContactsHeading,
  StyledContactItem,
  StyledContactName,
  StyledContactNumber,
  StyledDeleteButton,
} from './Contacts.styled';

class Contacts extends Component {
  state = {
    filter: '',
    filteredContacts: [],
  };

  componentDidMount() {
    this.filterContacts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.contacts !== this.props.contacts) {
      this.filterContacts();
    }
  }

  handleChange = value => {
    this.setState({ filter: value }, this.filterContacts);
  };

  filterContacts = () => {
    const { filter } = this.state;
    const { contacts } = this.props;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    this.setState({ filteredContacts });
  };

  render() {
    return (
      <StyledContactsContainer>
        <StyledContactsHeading>Contacts</StyledContactsHeading>
        <Filter filter={this.state.filter} onChange={this.handleChange} />
        <ul>
          {this.state.filteredContacts.map(contact => (
            <StyledContactItem key={nanoid()}>
              <StyledContactName>{contact.name}:</StyledContactName>
              <StyledContactNumber>{contact.number}</StyledContactNumber>
              <StyledDeleteButton
                type="button"
                onClick={() => this.props.onDelete(contact.id)}
              >
                Delete
              </StyledDeleteButton>
            </StyledContactItem>
          ))}
        </ul>
      </StyledContactsContainer>
    );
  }
}

export default Contacts;
