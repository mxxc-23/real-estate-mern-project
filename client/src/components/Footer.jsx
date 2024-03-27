import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 block">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="justify-between space-x-5">
          <div className="grid justify-center grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h1 className="text-xl font-bold">Location</h1>
              <p>Iloilo City</p>
              <p>Philippines</p>
              <p>5000</p>
            </div>
            <div>
              <h1 className="text-xl font-bold">Contact Us</h1>
              <p>ljdignadice.realestate@gmail.com</p>
              <p>+63 925 761 9806</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
