import React from 'react';

import '../../css/components/Searchbar.css';

import Autosuggest from 'react-autosuggest';

const people = [
  {
    name: 'Skype',
    year: 1972
  },
  {
    name: 'Outlook',
    year: 2000
  },
  {
    name: 'Password',
    year: 1983
  },
  {
    name: 'RSA Token',
    year: 2007
  },
  {
    name: 'Lync',
    year: 2012
  },
  {
    name: 'Hardware',
    year: 2009
  },
  {
    name: 'Badge',
    year: 1990
  },
  {
    name: 'Software',
    year: 1995
  },
  {
    name: 'Bob',
    year: 1995
  },
  {
    name: 'Mobile',
    year: 1987
  },
  {
    name: 'Mobile stuff',
    year: 1995
  },
  {
    name: 'Outlook stuff',
    year: 1991
  },
  {
    name: 'Skype stuff',
    year: 1995
  },
  {
    name: 'Lync',
    year: 2003
  }
];


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return people.filter(people => regex.test(people.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

export default class Searchbar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      noSuggestions: false
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const suggestions = getSuggestions(value);
    const isInputBlank = value.trim() === '';
    const noSuggestions = !isInputBlank && suggestions.length === 0;

    this.setState({
      suggestions,
      noSuggestions
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions, noSuggestions } = this.state;
    const inputProps = {
      placeholder: "How can we help you?",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
        {
          noSuggestions &&
            <div className="no-suggestions">
              No suggestions
            </div>
        }
      </div>
    );
  }
}
