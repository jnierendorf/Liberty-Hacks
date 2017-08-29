import React from 'react';

import '../../css/components/Searchbar.css';

import Autosuggest from 'react-autosuggest';

import { Link } from 'react-router-dom';

const people = [
  {
    name: 'Skype',
    page: '/skype'
  },
  {
    name: 'Outlook',
    page: '/outlook'
  },
  {
    name: 'Password',
    page: '/password'
  },
  {
    name: 'RSA Token',
    page: '/rsa'
  },
  {
    name: 'Lync',
    page: '/skype'
  },
  {
    name: 'Laptops',
    page: '/laptops'
  },
  {
    name: 'Badge',
    page: '/buildingaccess'
  },
  {
    name: 'Mobile',
    page: '/phone',
  },
  {
    name: 'Mobile stuff',
    page: '/phone',
  },
  {
    name: 'Outlook stuff',
    page: '/outlook',
  },
  {
    name: 'Skype won\'t launch',
    page: '/skype/wontlaunch',
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
    <div>

    <Link to={suggestion.page} target="_blank">{suggestion.name}</Link>
    </div>
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
      value: newValue,
      method: 'enter'
    });
  };

  onKeyDown(e) {
    if (e.keyCode === 13) {

    }
  }

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
      onChange: this.onChange,
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

      </div>
    );
  }
}
