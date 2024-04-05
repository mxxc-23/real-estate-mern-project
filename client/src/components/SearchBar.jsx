import { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <div className="flex justify-center items-center my-8">
      {/* <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-96 rounded-l-full border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
      /> */}
      <select
      value={searchText}
      onChange={(e) => setSearchText(e.target.value )}
      className="w-96 rounded-l-full border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
      >
        <option value="/developers">Developers</option>
        <option value="/developer/the-southprime-flats">The Southprime Flats</option>
        <option value="/developer/wv-towers">WV Towers</option>
        <option value="/developer/emerald-estate">Emerald Estate</option>
      </select>
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-52 border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
      >
        <option value="0">Location</option>
        <option value="jaro">Jaro</option>
        <option value="mandurriao">Mandurriao</option>
      </select>
      <select
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="w-52 border border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
      >
        <option value="0">Budget</option>
        <option value="1">5k-10k PHP</option>
        <option value="2">10k-100k PHP</option>
      </select>
      <a
      href={searchText}
      className="bg-blue-900 text-white py-2 px-4 rounded-r-full hover:bg-blue-700">
        Search
      </a>
    </div>
  );
};

export default SearchBar;
