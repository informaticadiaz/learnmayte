import React, { useState } from "react";
import { TextField, Button, List, ListItem } from "@mui/material";

const SearchBar = ({ onSearch, dictionary }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on the input value
    const filteredSuggestions = dictionary.filter((word) =>
      word.toLowerCase().startsWith(value.toLowerCase()),
    );

    if (value === "") {
      // Check if input value is empty
      setSuggestions([]); // Clear suggestions when input is empty
    } else {
      setSuggestions(filteredSuggestions);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      // Check if Enter is pressed and input is not empty
      handleSearch();
    }
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    onSearch(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="bg:gray-100 flex flex-col items-center p-4 text-slate-200 md:p-8">
      <TextField
        label="Buscar palabra..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        variant="outlined"
        fullWidth
        InputLabelProps={{
          style: { zIndex: 0, color: "blue" },
        }}
        InputProps={{
          style: { color: "blue" },
        }}
      />
      <div className="mt-4">
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Buscar
        </Button>
      </div>
      <List>
        {suggestions.map((suggestion, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SearchBar;
