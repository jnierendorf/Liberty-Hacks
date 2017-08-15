import React from 'react';

import '../../css/components/Searchbar.css';

import Autosuggest from 'react-autosuggest';

const people = [
  {
    name: 'Jason',
    year: 1995
  },
  {
    name: 'Justin',
    year: 1994
  },
  {
    name: 'Michelle',
    year: 1995
  },
  {
    name: 'Joyce',
    year: 1991
  },
  {
    name: 'Phil',
    year: 1990
  },
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : people.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

export default class Searchbar extends React.Component {
  constructor() {
    super();


    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const {value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type something',
      value,
      onChange: this.onChange
    };

    return (
      <div className="Searchbar">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={getSuggestionValue}
        inputProps={inputProps}
      />
    </div>
    );
  }
}
