import React, { Component } from 'react';
import {
  StyledFilterContainer,
  StyledFilterInput,
  StyledFilterHeading,
} from './Filter.styled';

class Filter extends Component {
  handleChange = e => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    return (
      <StyledFilterContainer>
        <StyledFilterHeading>Find contacts by name</StyledFilterHeading>
        <StyledFilterInput
          type="text"
          name="filter"
          onChange={this.handleChange}
          value={this.props.filter}
        />
      </StyledFilterContainer>
    );
  }
}

export default Filter;
