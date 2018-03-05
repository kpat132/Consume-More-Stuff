import React from "react";

export const SearchComponent = () => {
  return (
    <div className="search-container">
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchComponent;
