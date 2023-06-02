import React from 'react';
import Filter from '../Filter/Filter';
import {
  StyledContactsContainer,
  StyledContactsHeading,
  StyledContactItem,
  StyledContactName,
  StyledContactNumber,
  StyledDeleteButton,
} from './Contacts.styled';

const Contacts = ({ contacts, filter, onChange, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledContactsContainer>
      <StyledContactsHeading>Contacts</StyledContactsHeading>
      <Filter filter={filter} onChange={onChange} />
      <ul>
        {filteredContacts.map(contact => (
          <StyledContactItem key={contact.id}>
            <StyledContactName>{contact.name}:</StyledContactName>
            <StyledContactNumber>{contact.number}</StyledContactNumber>
            <StyledDeleteButton
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </StyledDeleteButton>
          </StyledContactItem>
        ))}
      </ul>
    </StyledContactsContainer>
  );
};

export default Contacts;
