import React from 'react';
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

const Contacts = ({ filter, onChange, filteredContacts, onDelete }) => {
  return (
    <StyledContactsContainer>
      <StyledContactsHeading>Contacts</StyledContactsHeading>
      <Filter filter={filter} onChange={onChange} />
      <ul>
        {filteredContacts.map(contact => (
          <StyledContactItem key={nanoid()}>
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
