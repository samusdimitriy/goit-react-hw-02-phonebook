import React from 'react';
import {
  StyledFilterContainer,
  StyledFilterInput,
  StyledFilterHeading,
} from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <StyledFilterContainer>
      <StyledFilterHeading>Find contacts by name</StyledFilterHeading>
      <StyledFilterInput
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter} // Исправлено: использовать filter вместо this.props.filter
      />
    </StyledFilterContainer>
  );
};

export default Filter;
