import React from 'react';
import Autosuggest from 'react-autosuggest';
import data from "../../assets/data/products";

class Typeahead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: [],
        };
    }

    theme = {
        container: {
            position: 'relative'
        },
        input: {
            fontFamily: 'Helvetica, sans-serif'
        },
        inputFocused: {
            outline: 'none'
        },
        inputOpen: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
        },
        suggestionsContainer: {
            display: 'none'
        },
        suggestionsContainerOpen: {
            display: 'block',
            position: 'absolute',
            top: 51,
            width: 280,
            border: '1px solid #aaa',
            backgroundColor: '#fff',
            fontFamily: 'Helvetica, sans-serif',
            fontWeight: 300,
            fontSize: 16,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            zIndex: 2
        },
        suggestionsList: {
            margin: 0,
            padding: 0,
            listStyleType: 'none',
        },
        suggestion: {
            cursor: 'pointer',
            padding: '10px 20px'
        },
        suggestionHighlighted: {
            backgroundColor: '#ddd'
        }
    };

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    escapeRegexCharacters(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    getSuggestions(value) {
        const escapedValue = this.escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');
        return data.productData.filter(language => regex.test(language.Name));
    }

    getSuggestionValue(suggestion) {
        return suggestion.Name;
    }

    renderSuggestion(suggestion) {
        return (
            <div className="row align-items-center">
                <div className="col-auto">
                    <img src={process.env.PUBLIC_URL + '/' + suggestion.ImgUrl} alt={suggestion.Name} height={50} />
                </div>
                <div className="col-auto">
                    <span>{suggestion.Name}</span>
                </div>
            </div>
        );
    }

    onSuggestionSelected = (event, { suggestion }) => {
        event.preventDefault();
        this.props.parentCallback(suggestion);
    }


    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Search products",
            value,
            onChange: this.onChange,
            className: 'form-control'
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                onSuggestionSelected={this.onSuggestionSelected}
                inputProps={inputProps}
                theme={this.theme}
            />
        );
    }
}

export default Typeahead;