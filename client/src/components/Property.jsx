/* eslint-disable react/no-unescaped-entities */
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

const SouthprimeFlats = () => {
  const images = [
    "https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/332492254_1449819575425872_5235913011382806314_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG0iviJGuB35m7Hx_bU_XP7YCO5fGa_ixtgI7l8Zr-LGw-lDnIFNKg4AUM_y7-uhe0gUZU538xVS4gr_Fg_N3KD&_nc_ohc=dIJibiPNX4AAX8RJPV9&_nc_ht=scontent.fmnl3-3.fna&oh=00_AfDGajLWA5rOplJcQ10-w51haSzi_uYQOX5G06FS-qKOBw&oe=660BE510",
    "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/312986674_552186603573460_7493359798714854722_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE1I1TG7ndbcOHLkVk98STFn0IcELXqixtgI7l8Zr-LGw-lDnIFNKg4AUM_y7-uhe0gUZU538xVS4gr_Fg_N3KD&_nc_ohc=1gv7YPUgqVgAX-h9TQi&_nc_ht=scontent.fmnl3-4.fna&oh=00_AfDYe4Qh1T_W3oSmAeyiRIMGns1HLSh3wuV3XbSPOWBeTg&oe=660AF1D8",
    "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/332117549_737738671310940_1221029596870210722_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFIvv786InWo9DjTNpuwiAvRcBftXH6xxJFwF-1cfrHEiZ1Zx5Kl_mMB_nDswxwTYeIe7kRpmSq8QhMzkcfGkY9&_nc_ohc=40N3Jc6J1bkAX817RVn&_nc_ht=scontent.fmnl3-2.fna&oh=00_AfCuC7LjoP-mO-pOsG2WKoZVtiAlQDHD9kFpt1GTMr23oA&oe=660B3934",
    "https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-6/340925372_170544469253063_1539172779208474395_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFB0ntE_Huspjhhz9kofMWGHYzKB3jydTEdjMoHePJ1MaOrxy3mEb7xgHk3eKEDK_laeEbU0mTEm0GTCGRYXxMn&_nc_ohc=mWBgSu7M6voAX_r_lst&_nc_ht=scontent.fmnl37-2.fna&oh=00_AfB6MVwA-QBtNxMygxUSmKEE_itu4iDEIhii-W_8QREgUA&oe=660BABF5",
  ];

  return (
    <main>
      <section className="flex justify-center mb-5">
        <div className="max-w-screen-xl p-6">
          <div
            id="backgroundCard"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white border border-gray-200 rounded-lg shadow-lg p-6 md:min-h-full relative"
            style={{ height: "80vh" }}
          >
            <div id="carouselContainer" className="h-full">
              <Carousel slides={images} />
            </div>
            <div
              id="informationWrapper"
              className="p-4 flex flex-col justify-between overflow-y-auto h-full relative"
            >
              <div id="descriptionContainer">
                <h2 className="text-2xl font-bold mb-4">
                  The Southprime Flats
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  The Southprime Flats is known for its <strong>WOW</strong>{" "}
                  factor when it comes to <strong>SMART HOME</strong> feature
                  and amenities. It is located in a very convenient location, Q.
                  Abeto Street, Mandurriao that is accessible to important
                  establishments such as: hospitals, banks, schools, and malls.
                  <br />
                  This property aims to maximize your comfort, convenience, and
                  business opportunity. A bold, unique and curated space set to
                  rise in Iloilo. Your starting point for boundless experiences,
                  opportunities and moments at the heart of a lovely district of
                  Mandurriao
                </p>
                <h3 className="font-medium mt-4">Unit Types:</h3>
                <ul>
                  <li>Studio</li>
                  <li>Dorm</li>
                  <li>Combined</li>
                </ul>
                <h3 className="font-medium">Building Features:</h3>
                <ul>
                  <li>Water Tanks</li>
                  <li>Gym</li>
                  <li>Laundry Cage</li>
                  <li>CCTV</li>
                  <li>Elevator</li>
                </ul>
                <h3 className="font-medium">Amenities:</h3>
                <ul>
                  <li>Lobby</li>
                  <li>Co-Working Space</li>
                  <li>Outdoor Bridge Park</li>
                  <li>Commercial Spaces</li>
                  <li>Parking Spaces</li>
                </ul>
              </div>
              <div
                id="buttonContainer"
                className="absolute bottom-0 left-0 w-full bg-white px-6 py-4 flex justify-end"
              >
                <a
                  href="https://thesouthprimeflats.ph/index.html"
                  className="inline-flex items-center px-3 py-2 mr-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Official Site
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="items-center space-x-3 rtl:space-x-reverse flex flex-wrap text-sm sm:text-xl">
            <a href="https://www.facebook.com/profile.php?id=100063463767304">
              <img
                src="../full_logo.jpg"
                className="h-12"
                alt="Flowbite Logo"
              />
            </a>
            <a href="/">
              <span className="self-center text-2xl font-bold whitespace-nowrap bg-transparent dark:text-blue-600 text-blue-900">
                Iloilo Premium Properties
              </span>
            </a>
          </div>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            id="mega-menu-full"
            className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="mega-menu-full-dropdown"
          className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default SouthprimeFlats;
