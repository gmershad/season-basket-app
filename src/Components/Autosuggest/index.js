import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import { searchCatalog } from "../../redux/actions/catalogActions";
import { useSelector, useDispatch } from 'react-redux';

const Typeahead = (props) => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();

    const theme = {
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

    const onChange = (event, { newValue, method }) => {
        setValue(newValue);
    };

    const getSuggestions = (value) => {
        dispatch(searchCatalog(value.value)).then((response) => {
            const catalogData = response.data.hints;
            setSuggestions(catalogData);
        });
    };

    const getSuggestionValue = (suggestion) => {
        return suggestion.Name;
    };

    const renderSuggestion = (suggestion) => {
        return (
            <div className="row align-items-center">
                {/* <div className="col-auto">
                    <img src={suggestion.ImgUrl} alt={suggestion.Name} height={50} />
                </div> */}
                <div className="col-auto">
                    <span>{suggestion.Name}</span>
                </div>
            </div>
        );
    };

    const onSuggestionSelected = (event, { suggestion }) => {
        event.preventDefault();
        props.parentCallback(suggestion);
    };

    const inputProps = {
        placeholder: "Add products",
        value,
        onChange,
        className: 'form-control'
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={getSuggestions}
            onSuggestionsClearRequested={() => setSuggestions([])}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={onSuggestionSelected}
            inputProps={inputProps}
            theme={theme}
        />
    );
}

export default Typeahead;
