import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import { ICardProps } from "./Card";
import { handleSearch } from "@/helpers/fetchData";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cardsData, setCardsData] = useState<ICardProps[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await handleSearch(searchQuery);

      // Extract the data from the Axios response
      const newCardsData = response.data;

      // Update the cards data
      setCardsData(newCardsData);

      // Clear the search query
      setSearchQuery("");
    } catch (error) {
      console.error("Error processing search:", error);
      throw error;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-12">
      <SearchBar
        value={searchQuery}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <CardList cards={cardsData} />
    </div>
  );
};

export default Search;
