/* eslint-disable react/jsx-key */
import SearchBar from "../../components/SearchBar";
import PropertySearchCard from "../../components/PropertySearchCard";
import Footer from "../../components/Footer";

const searchResults = [
  {
    title: "1 Bedroom Loft",
    descrption: "46.32 sqm start at 20,143/month",
    href: "/developer/wv-towers/1",
  },
  {
    title: "2 Bedroom Loft",
    descrption: "45.32 sqm start at 19,504/month",
    href: "/developer/wv-towers/2",
  },
  {
    title: "2 Bedroom",
    descrption: "43sqm/56sqm/63sqm start at 18,755.98/month",
    href: "/developer/wv-towers/3",
  },
];

const WVTowers = () => {
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
  );
};

export default WVTowers;
