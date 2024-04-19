
const MainHeader = () => {
  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-2xl p-4">
        <div className="items-center space-x-3 rtl:space-x-reverse flex flex-wrap text-sm sm:text-xl">
            <a href="https://www.facebook.com/profile.php?id=100063463767304">
              <img src="../full_logo.jpg" className="h-12" alt="Flowbite Logo" />
            </a>
            <a href="/home">
              <span className="self-center text-2xl font-bold whitespace-nowrap bg-transparent dark:text-blue-600 text-blue-900">Iloilo Premium Properties</span>
            </a>
            <h1 className="font-semibold text-sm pl-2 pb-2">Admin Dashboard</h1>
        </div>
        
        <button className="text-sm block py-3 px-4 text-white bg-blue-800 opacity opacity-70 hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Sign out
        </button>
      </div>
    </nav>
  )
}

export default MainHeader