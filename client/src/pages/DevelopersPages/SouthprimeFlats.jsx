/* eslint-disable react/jsx-key */
import Carousel from "../../components/Carousel";
import ButtonsContainer from "../../components/PropertyCard/ButtonsContainer";
import Footer from "../../components/Footer";

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
            <div id="carouselContainer" className="h-full md:h-fit">
              <Carousel slides={images} />
            </div>
            <div
              id="informationWrapper"
              className="flex flex-col justify-between overflow-y-auto h-full relative"
            >
              <div className="flex flex-col justify-between overflow-y-auto h-full relative">
                <div id="descriptionContainer">
                  <h2 className="text-2xl font-bold mb-4">
                    The Southprime Flats
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    The Southprime Flats is known for its <strong>WOW</strong>{" "}
                    factor when it comes to <strong>SMART HOME</strong> feature
                    and amenities. It is located in a very convenient location,
                    Q. Abeto Street, Mandurriao that is accessible to important
                    establishments such as: hospitals, banks, schools, and
                    malls.
                    <br />
                    This property aims to maximize your comfort, convenience,
                    and business opportunity. A bold, unique and curated space
                    set to rise in Iloilo. Your starting point for boundless
                    experiences, opportunities and moments at the heart of a
                    lovely district of Mandurriao
                  </p>
                  <h3 className="font-medium mt-4">Unit Types:</h3>
                  <ul>
                    <li>&emsp;Studio</li>
                    <li>&emsp;Dorm</li>
                    <li>&emsp;Combined</li>
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
              </div>
              <div className="grid justify-end pt-3">
                <ButtonsContainer site="southprimeflats.ph/index.html" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SouthprimeFlats;
