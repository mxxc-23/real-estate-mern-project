import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 drop-shadow-sm">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <div className="items-center space-x-3 rtl:space-x-reverse flex flex-wrap text-sm sm:text-xl">
          <a href="https://www.facebook.com/profile.php?id=100063463767304">
            <img src="../full_logo.jpg" className="h-12" alt="Flowbite Logo" />
          </a>
          <a href="#">
            <span className="self-center text-2xl font-bold whitespace-nowrap bg-transparent dark:text-blue-600 text-blue-900">
              Iloilo Premium Properties
            </span>
          </a>
        </div>
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
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
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
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                onClick={toggleMegaMenu}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Property Developers
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
          </ul>
        </div>
      </div>
      {isMenuOpen && (
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
                <div className="font-semibold">Nottingham Villas</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                A collection of townhouse units designed and fitted with features, 
                fixtures and amenities for start-up families and go-getter urban professionals 
                who dream of getting the best of country living with a modern twist.
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Casa Mira Iloilo</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                CASA MIRA Iloilo is a modern abode that reminds us of our rich Filipino culture
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Emerald Estate</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                The best subdivision with the best amenities offered, with the vision of nature
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Southprime Flats</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                Located at the business district of Iloilo City, 
                The Southprime Flats condominium gives you the best access to offices, malls, hospitals, schools and 
                recreational spaces you can enjoy with the family.
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
                <div className="font-semibold">Sotogrande</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Sotogrande Condominium
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">WV Towers</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Experience Awesome Everyday at WV Towers, with a suspended infinity pool and mini golf course.
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Avida Towers Atria</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Affordable and good quality condominium by AYALA
                </span>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      )}
        
      
    </nav>
  
  );
};

export default Header;