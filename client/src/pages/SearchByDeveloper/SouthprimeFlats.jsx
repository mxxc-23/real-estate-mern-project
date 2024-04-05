/* eslint-disable react/jsx-key */
import SearchBar from "../../components/SearchBar";
import PropertySearchCard from "../../components/PropertySearchCard";
import Footer from "../../components/Footer";

const searchResults = [
  {
    title: "Studio",
    descrption: "Lorem ipsum dolor sit amet, consectetur adip",
    href: "/developer/the-southprime-flats/1",
  },
  {
    title: "Dorm",
    descrption: "Lorem ipsum dolor sit amet",
    href: "/developer/the-southprime-flats/2",
  },
  {
    title: "Combined",
    descrption: "Lorem ipsum dolor sit",
    href: "/developer/wv-towers/3",
  },
];

const SouthprimeFlats = () => {
  return (
    <main>
      <SearchBar />
      <div className="flex flex-wrap px-14 justify-start pt-5">
        {searchResults.map((searchResult) => (
          <PropertySearchCard
            title={searchResult.title}
            description={searchResult.descrption}
            href={searchResult.href}
          />
        ))}
      </div>
      <Footer />
    </main>
  )
}

export default SouthprimeFlats