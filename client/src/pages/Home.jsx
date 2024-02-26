import React from 'react'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'

const Home = () => (
  <main className="bg-transparent">
    <MainHeader />
    <section className='relative'>
      <div className="h-screen"
        style={{ backgroundImage: `url(${'https://64.media.tumblr.com/566913de5d56a759bcf6a3db41ae28e3/tumblr_nkppivnyEy1u7w1u8o1_640.jpg'})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="flex items-start flex-col ">
              <h1 className="text-7xl font-bold mb-5">Welcome!</h1>
              <p className="text-2xl mb-2">Iloilo Premium Properties offers different property listings.</p>
            </div>
            <div className="rounded-sm px-20 py-8 mt-10 items-start bg-white bg-opacity-50 text-left" id="property-search">
              <div>
                <p className="text-black font-medium mb-5">Search for properties</p>
              </div>
              <div className="flex justify-center space-x-5">
                <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-2 flex items-center pr-3 pointer-events-none">
                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z" />
                      </svg>
                    </div>
                    <input id="location-input" type="text" className="block w-full p-2 ps-9 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 font-bold text-base" placeholder="Location" />
                  </div>
                </div>
                <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-2 flex items-center pr-3 pointer-events-none">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5" />
                      </svg>
                    </div>
                    <select id="countries" className="bg-gray-50 border ps-9 font-bold text-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected className=''>Property Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="condo">Condo</option>
                    </select>

                  </div>
                </div>
                <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-2 flex items-center pr-3 pointer-events-none">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                      </svg>
                    </div>
                    <select id="countries" placeholder="Budget" class="bg-gray-50 font-bold  border ps-9 text-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Budget</option>
                      <option value="apartment">10,000 - 20,000 PHP</option>
                      <option value="house">20,000 - 50,000 PHP</option>
                      <option value="condo">50,000 - 100,000 PHP</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                  <div className="relative">
                    <a className="block py-3 px-4 text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Search
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Footer />

    </section>
  </main>
)

export default Home