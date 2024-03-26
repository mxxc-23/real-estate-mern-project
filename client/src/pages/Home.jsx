import Footer from "../components/Footer";
import Header from "../components/Header";
import PropertyTypeCard from "../components/PropertyTypeCard";

import homeBackground from "../../public/home_background.jpg";

const Home = () => {
  const handleSeeMore = () => {
    // Handle See More button click
  };
  return (
    <main className="bg-transparent">
      <Header />
      <section className="relative">
        <div
          className="h-screen"
          style={{
            backgroundImage: `url(${homeBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="flex items-start flex-col ">
                <h1
                  className="font-bold text-black"
                  style={{ fontSize: "100px" }}
                >
                  Welcome!
                </h1>
                <p className="text-3xl mb-2 font-light">
                  Iloilo Premium Properties offers different property listings.
                </p>
              </div>
              <div className="mt-10 flex justify-start" id="property-search">
                <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                  <div className="relative">
                    <a className=" text-xl block py-3 px-4 text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Search
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center h-screen flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <PropertyTypeCard
            imageUrl="../../public/property_type/casamira2.jpg"
            title="House and Lot"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at sapien ullamcorper, nec vestibulum mauris efficitur."
            onClick={handleSeeMore}
          />
          <PropertyTypeCard
            imageUrl="https://via.placeholder.com/150"
            title="Condominiums"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at sapien ullamcorper, nec vestibulum mauris efficitur."
            onClick={handleSeeMore}
          />
          <PropertyTypeCard
            imageUrl="https://via.placeholder.com/150"
            title="Residential Lot"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at sapien ullamcorper, nec vestibulum mauris efficitur."
            onClick={handleSeeMore}
          />
          <PropertyTypeCard
            imageUrl="https://via.placeholder.com/150"
            title="Commercial Lot"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at sapien ullamcorper, nec vestibulum mauris efficitur."
            onClick={handleSeeMore}
          />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
