import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import ButtonsContainer from "../../components/PropertyCard/ButtonsContainer";

/** 
 * TODO: Change layout to search layout.
*/

const EmeraldEstate = () => {
  const images = [
    "https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-6/426582803_900808652044585_4968458416364287111_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFGGQmAOC2m_8bH-jZbIL4UWCYVlXSKDXlYJhWVdIoNecufPDTQk8LFTQ7e6GraD8_5_tl5ImzN0GY4wDgKrlXe&_nc_ohc=YKs_fOlYb-UAX8RYqZ-&_nc_ht=scontent.fmnl37-2.fna&oh=00_AfDz1yG2BtVYHg_e7iwbY7sHF7DO6o0EPk6-oJg0X2oesQ&oe=660C21E0",
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
            <div id="carouselContainer" className="h-full md:h-fit">
              <Carousel slides={images} />
            </div>
            <div
              id="informationWrapper"
              className="flex flex-col justify-between overflow-y-auto h-full relative"
            >
              <div className="flex flex-col justify-between overflow-y-auto h-full relative">
                <div id="descriptionContainer">
                  <h2 className="text-2xl font-bold mb-4">Emerald Estates</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Emerald Estates is the best-selling house and lot project of
                    an awarding winning developer, Wee Community Developers,
                    Inc. Alongside with the on-going Iloilo Sunset Boulevard
                    that connects Pakiad Road to Megaworld Blvd and Ayala
                    Land, Inc. projects, EE is your best option for
                    accessibility, affordability, and quality homes.
                    <br />
                    This property aims to maximize your comfort, convenience,
                    and business opportunity. A bold, unique and curated space
                    set to rise in Iloilo. Your starting point for boundless
                    experiences, opportunities and moments at the heart of a
                    lovely district of Mandurriao
                  </p>
                  <h3 className="font-medium mt-4">Single attached units:</h3>
                  <ul>
                    <li>&emsp;Birch</li>
                    <li>&emsp;Pine Dulexe</li>
                    <li>&emsp;Willow</li>
                    <li>&emsp;Palm</li>
                    <li>&emsp;Maple Plus</li>
                  </ul>
                  <h3 className="font-medium mt-4">Townhouse units:</h3>
                  <ul>
                    <li>&emsp;Sage</li>
                    <li>&emsp;Oak</li>
                    <li>&emsp;Olive</li>
                  </ul>
                  <h3 className="font-medium">Subdivision:</h3>
                  <ul>
                    <li>Lower Equity Rates</li>
                    <li>Clubhouse</li>
                  </ul>
                </div>
              </div>
              <div className="grid justify-end pt-3">
                <ButtonsContainer site="https://emeraldestatesiloilo.com" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default EmeraldEstate;
