import React, { useEffect, useState } from "react";
import { category } from "../../../../constant";
import Category from "../../../components/Category";
import Footer from "../../../components/Footer";
import LeftNav from "../../../components/Header/LeftNav";
import MobileNavLinks from "../../../components/Header/MoblieNavLinks";
import Navbar from "../../../components/Header/Navbar";
import NavLinks from "../../../components/Header/NavLink";
import UserOpt from "../../../components/Header/UserOpt";
import { useSelector } from "react-redux";
import {
  comingSoon,
  mostPopularMovies,
  mostPopularTVs,
  top250Movies,
  top250TVs,
} from "../../../components/Category/moviesSlice";
import "./style.css";

const UserBrowser = (props) => {
  const movies = useSelector((state) => top250Movies(state));
  const tvs = useSelector((state) => top250TVs(state));
  const popularMovies = useSelector((state) => mostPopularMovies(state));
  const popularTv = useSelector((state) => mostPopularTVs(state));
  const coming = useSelector((state) => comingSoon(state));

  const [mobile, setMobile] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const categories = category;

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [mobile]);

  const handleOpenMobileNav = () => {
    setOpenMobileNav(!openMobileNav);
  };
  return (
    <>
      <header
        className={`w-full h-auto fixed z-positive top-0 left-0 overflow-hidden pb-300`}
      >
        <Navbar height="h-auto" padding_x="px-0 md:px-3%" padding_y="py-0">
          {mobile ? (
            <LeftNav
              src="./images/logo_mobile.png"
              width="w-16"
              height="h-10"
            />
          ) : (
            <LeftNav
              src="./images/logo.png"
              width="w-28 md:w-48"
              height="h-8 md:h-16"
            />
          )}
          {!mobile && <NavLinks />}
          {!mobile && <UserOpt />}
          {mobile && (
            <div className="text-gray-300 mr-4">
              <i className="fa fa-bars fa-2x" onClick={handleOpenMobileNav}></i>
            </div>
          )}
        </Navbar>
      </header>
      <main className="overflow-hidden relative z-0">
        {openMobileNav && <MobileNavLinks />}
        <section className="md:px-5% flex justify-center items-center h-screen w-screen">
          <div className="w-full h-95%">
            <div className="absolute top-0 left-0 z-10 w-full pt-20 px-6 md:px-0 text-center md:h-full md:static md:flex flex-col md:w-1/3 text-white justify-start items-start md:space-y-5">
              <div className="my-5">
                <img
                  src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZz2_YguMqvxYu3GuoziKly9mkZNHOEFE21Y_6PsfUSpTff_f7X7iEq9Il6qzM_56lbiMXYiXh4Ko2aORamijDsBMyi9WqM2MW2vmK4v67dtqGS1Bfn1OOJ_GD86pIpdoMM0-nD4o-9H9XooRwT3k5Gnpmme4MLIi8yDzEVBPyFAog.png?r=512"
                  alt="kate"
                />
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8" id="top-10-badge" viewBox="0 0 28 30">
                  <path
                    d="M0,0 L28,0 L28,30 L0,30 L0,0 Z M2,2 L2,28 L26,28 L26,2 L2,2 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M16.8211527,22.1690594 C17.4133103,22.1690594 17.8777709,21.8857503 18.2145345,21.3197261 C18.5512982,20.7531079 18.719977,19.9572291 18.719977,18.9309018 C18.719977,17.9045745 18.5512982,17.1081018 18.2145345,16.5414836 C17.8777709,15.9754594 17.4133103,15.6921503 16.8211527,15.6921503 C16.2289952,15.6921503 15.7645345,15.9754594 15.427177,16.5414836 C15.0904133,17.1081018 14.9223285,17.9045745 14.9223285,18.9309018 C14.9223285,19.9572291 15.0904133,20.7531079 15.427177,21.3197261 C15.7645345,21.8857503 16.2289952,22.1690594 16.8211527,22.1690594 M16.8211527,24.0708533 C15.9872618,24.0708533 15.2579042,23.8605988 14.6324861,23.4406836 C14.0076618,23.0207685 13.5247891,22.4262352 13.1856497,21.6564897 C12.8465103,20.8867442 12.6766436,19.9786109 12.6766436,18.9309018 C12.6766436,17.8921018 12.8465103,16.9857503 13.1856497,16.2118473 C13.5247891,15.4379442 14.0076618,14.8410352 14.6324861,14.4205261 C15.2579042,14.0006109 15.9872618,13.7903564 16.8211527,13.7903564 C17.6544497,13.7903564 18.3844012,14.0006109 19.0098194,14.4205261 C19.6352376,14.8410352 20.1169224,15.4379442 20.4566558,16.2118473 C20.7952012,16.9857503 20.9656618,17.8921018 20.9656618,18.9309018 C20.9656618,19.9786109 20.7952012,20.8867442 20.4566558,21.6564897 C20.1169224,22.4262352 19.6352376,23.0207685 19.0098194,23.4406836 C18.3844012,23.8605988 17.6544497,24.0708533 16.8211527,24.0708533"
                    fill="#FFFFFF"
                  ></path>
                  <polygon
                    fill="#FFFFFF"
                    points="8.86676 23.9094206 8.86676 16.6651418 6.88122061 17.1783055 6.88122061 14.9266812 11.0750267 13.8558085 11.0750267 23.9094206"
                  ></polygon>
                  <path
                    d="M20.0388194,9.42258545 L20.8085648,9.42258545 C21.1886861,9.42258545 21.4642739,9.34834303 21.6353285,9.19926424 C21.806383,9.05077939 21.8919103,8.83993091 21.8919103,8.56731273 C21.8919103,8.30122788 21.806383,8.09572485 21.6353285,7.94961576 C21.4642739,7.80410061 21.1886861,7.73104606 20.8085648,7.73104606 L20.0388194,7.73104606 L20.0388194,9.42258545 Z M18.2332436,12.8341733 L18.2332436,6.22006424 L21.0936558,6.22006424 C21.6323588,6.22006424 22.0974133,6.31806424 22.4906012,6.51465818 C22.8831952,6.71125212 23.1872921,6.98684 23.4028921,7.34142182 C23.6178982,7.69659758 23.7259952,8.10522788 23.7259952,8.56731273 C23.7259952,9.04246424 23.6178982,9.45762788 23.4028921,9.8122097 C23.1872921,10.1667915 22.8831952,10.4429733 22.4906012,10.6389733 C22.0974133,10.8355673 21.6323588,10.9335673 21.0936558,10.9335673 L20.0388194,10.9335673 L20.0388194,12.8341733 L18.2332436,12.8341733 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M14.0706788,11.3992752 C14.3937818,11.3992752 14.6770909,11.322063 14.9212,11.1664509 C15.1653091,11.0114327 15.3553697,10.792863 15.4913818,10.5107418 C15.6279879,10.2286206 15.695697,9.90136 15.695697,9.52717818 C15.695697,9.1535903 15.6279879,8.82573576 15.4913818,8.54361455 C15.3553697,8.26149333 15.1653091,8.04351758 14.9212,7.88790545 C14.6770909,7.73288727 14.3937818,7.65508121 14.0706788,7.65508121 C13.7475758,7.65508121 13.4642667,7.73288727 13.2201576,7.88790545 C12.9760485,8.04351758 12.7859879,8.26149333 12.6499758,8.54361455 C12.5139636,8.82573576 12.4456606,9.1535903 12.4456606,9.52717818 C12.4456606,9.90136 12.5139636,10.2286206 12.6499758,10.5107418 C12.7859879,10.792863 12.9760485,11.0114327 13.2201576,11.1664509 C13.4642667,11.322063 13.7475758,11.3992752 14.0706788,11.3992752 M14.0706788,12.9957842 C13.5634545,12.9957842 13.0995879,12.9090691 12.6784848,12.7344509 C12.2573818,12.5604267 11.8915152,12.3163176 11.5808848,12.0027176 C11.2708485,11.6891176 11.0314909,11.322063 10.8634061,10.9003661 C10.6953212,10.479263 10.6115758,10.0213358 10.6115758,9.52717818 C10.6115758,9.03302061 10.6953212,8.57568727 10.8634061,8.1539903 C11.0314909,7.73288727 11.2708485,7.36523879 11.5808848,7.05163879 C11.8915152,6.73803879 12.2573818,6.49452364 12.6784848,6.31990545 C13.0995879,6.14588121 13.5634545,6.05857212 14.0706788,6.05857212 C14.577903,6.05857212 15.0417697,6.14588121 15.4628727,6.31990545 C15.8839758,6.49452364 16.2498424,6.73803879 16.5604727,7.05163879 C16.871103,7.36523879 17.1098667,7.73288727 17.2779515,8.1539903 C17.4460364,8.57568727 17.5297818,9.03302061 17.5297818,9.52717818 C17.5297818,10.0213358 17.4460364,10.479263 17.2779515,10.9003661 C17.1098667,11.322063 16.871103,11.6891176 16.5604727,12.0027176 C16.2498424,12.3163176 15.8839758,12.5604267 15.4628727,12.7344509 C15.0417697,12.9090691 14.577903,12.9957842 14.0706788,12.9957842"
                    fill="#FFFFFF"
                  ></path>
                  <polygon
                    fill="#FFFFFF"
                    points="8.4639503 12.8342327 6.65837455 13.2666206 6.65837455 7.77862061 4.65323515 7.77862061 4.65323515 6.22012364 10.4690897 6.22012364 10.4690897 7.77862061 8.4639503 7.77862061"
                  ></polygon>
                </svg>
                <span className="pl-5 text-lg font-semibold">
                  #1 Popular in Netflix
                </span>
              </div>
              <div className="mt-6 md:mt-0">
                <p className="overflow-ellipsis md:overflow-clip text-left text-lg md:text-base text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium eligendi reprehenderit
                </p>
              </div>
              <div className="mt-16 md:mt-0 flex flex-row justify-center items-center space-x-2">
                <button className="text-base px-4 py-2 md:text-lg md:px-6 rounded-sm text-black bg-white font-bold">
                  <i className="fas fa-play mr-1"></i>
                  Play
                </button>
                <button className="text-base px-4 py-2 md:text-lg md:px-6 rounded-sm bg-gray-700 text-white ">
                  <i className="fas fa-info-circle mr-1"></i>
                  More Info
                </button>
              </div>
            </div>
            <div className="w-full md:w-2/3 h-full">
              <div className="absolute top-0 right-0 w-full h-screen z-negative blur background"></div>
            </div>
          </div>
        </section>
        {movies.top250Movies.length !== 0 &&
        tvs.top250TVs.length !== 0 &&
        popularMovies.mostPopularMovies.length !== 0 &&
        popularTv.mostPopularTVs.length !== 0 &&
        coming.comingSoon.length !== 0 ? (
          <div className="px-2% py-2% -mt-32 md:-mt-8% blur-cate overflow-hidden">
            {categories.map((cate, index) => {
              let cateMovies = null;
              switch (cate.type) {
                case "m": {
                  cateMovies = movies.top250Movies[0];
                  break;
                }
                case "tv": {
                  cateMovies = tvs.top250TVs[0];
                  break;
                }
                case "mm": {
                  cateMovies = popularMovies.mostPopularMovies[0];
                  break;
                }
                case "mtv": {
                  cateMovies = popularTv.mostPopularTVs[0];
                  break;
                }
                case "cm": {
                  cateMovies = coming.comingSoon[0];
                  break;
                }
                default: {
                  cateMovies = movies.top250Movies[0];
                  break;
                }
              }
              return (
                <Category
                  key={cate.title}
                  title={cate.title}
                  movies={cateMovies}
                  index={index}
                />
              );
            })}
          </div>
        ) : movies.error &&
          tvs.error &&
          popularMovies.error &&
          popularTv.error &&
          coming.error ? (
          <div className="bg-181818 text-white text-center">
            <p>Something went wrong pls try again</p>
          </div>
        ) : (
          <div className="w-full min-h-168 bg-181818 text-white flex justify-center items-center">
            <i className="fas fa-spinner fa-spin fa-3x"></i> Waiting ....
          </div>
        )}
      </main>
      <Footer backgroundColor="bg-181818" />
    </>
  );
};

export default UserBrowser;