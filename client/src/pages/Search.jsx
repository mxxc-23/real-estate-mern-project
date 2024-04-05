/* eslint-disable react/jsx-key */

import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import PropertySearchCard from "../components/PropertySearchCard";

const searchResults = [
  "Temporary1",
  "Temporary2",
  "Temporary3",
  "Temporary4",
  "Temporary5",
];

const Search = () => {
  return (
    <main>
      <SearchBar />
      <div className="flex flex-wrap px-14 justify-between pt-5">
        {searchResults.map((searchResult) => (
          <PropertySearchCard title={searchResult} />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Search;
