import { useState } from "react";

const Search = ({ onDataChange }) => {
  const [userInput, setUserInput] = useState("");
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  onDataChange(userInput);

  return (
    <header>
      <h1>Emoji Search</h1>
      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        value={userInput}
        onChange={handleInputChange}
      />
    </header>
  );
};

export default Search;
