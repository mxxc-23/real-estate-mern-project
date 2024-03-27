import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Property = () => {
  const images = [
    "https://i.pinimg.com/564x/ca/e1/81/cae18106efc6156deb3ea857a9c7242e.jpg",
    "https://i.pinimg.com/564x/57/27/32/5727323b42a554b246a385c1635f6a52.jpg",
    "https://i.pinimg.com/564x/1d/fa/13/1dfa1311ac658bd38bf5ab6fecb95206.jpg",
  ];

  return (
    <main>
      <Header />
      <section className="flex justify-center mb-5">
        <div className="max-w-screen-xl p-6">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white border border-gray-200 rounded-lg shadow-lg p-6 md:min-h-full relative"
            style={{ height: "80vh" }}
          >
            <div className="h-full">
              <Carousel slides={images} />
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">Property Title</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  mattis justo et erat accumsan rutrum. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Nullam mattis justo et erat
                  accumsan rutrum.
                </p>
                <br />
                <h3>Property Features:</h3>
                <ul>
                  <li>2 Bedroom</li>
                  <li>1 Comfort Room</li>
                  <li>1 Carpark</li>
                  <li>2 Bedroom</li>
                  <li>1 Comfort Room</li>
                  <li>1 Carpark</li>
                  <li>2 Bedroom</li>
                  <li>1 Comfort Room</li>
                  <li>1 Carpark</li>
                </ul>
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-4 right-4"
                >
                  Contact
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Property;
