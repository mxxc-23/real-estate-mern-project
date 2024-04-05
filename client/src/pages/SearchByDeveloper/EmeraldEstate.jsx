/* eslint-disable react/jsx-key */

import SearchBar from "../../components/SearchBar";
import PropertySearchCard from "../../components/PropertySearchCard";
import Footer from "../../components/Footer";

const searchResults = [
  {
    title: "Birch",
    descrption: "46.32 sqm start at 20,143/month",
    href: "/developer/emerald-estate/1",
  },
  {
    title: "Pine Dulexe",
    descrption: "45.32 sqm start at 19,504/month",
    href: "/developer/emerald-estate/2",
  },
  {
    title: "Willow",
    descrption: "43sqm/56sqm/63sqm start at 18,755.98/month",
    href: "/developer/emerald-estate/3",
  },
  {
    title: "Palm",
    descrption: "43sqm/56sqm/63sqm start at 18,755.98/month",
    href: "/developer/emerald-estate/4",
  },
  {
    title: "Maple Plus",
    descrption: "43sqm/56sqm/63sqm start at 18,755.98/month",
    href: "/developer/emerald-estate/5",
  },
  {
    title: "Sage",
    descrption: "43sqm/56sqm/63sqm start at 18,755.98/month",
    href: "/developer/emerald-estate/6",
  },
  {
    title: "Oak",
    descrption: "43sqm/56sqm/63sqm start at 18,755.98/month",
    href: "/developer/emerald-estate/7",
  },
  {
    title: "Olive",
    descrption: "43sqm/56sqm/63sqm start at 18,755.98/month",
    href: "/developer/emerald-estate/8",
  },
];

const EmeraldEstate = () => {
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

export default EmeraldEstate