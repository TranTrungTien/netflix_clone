import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Movies from "./Movies";
import axiosConfig from "../../../axiosConfig";
import Trailer from "../Trailer";
import useOnClickOutside from "../../customHooks/useOnClickOutside";
import { useHistory } from "react-router-dom";
import "./categories.css";

const Category = ({ title, movies, index }) => {
  const trailerRef = useRef(null);
  const history = useHistory();

  const [openTrailer, setOpenTrailer] = useState({
    isOpen: false,
    id: "",
  });
  const [overviewMovie, setOverviewMovie] = useState(null);

  const handleOpenOverview = async (toggle, id) => {
    if (toggle)
      document
        .querySelector(`#overview-movies` + index)
        .classList.remove("custom-style-overview-movies");
    try {
      const poster = await axiosConfig.get("movies/api/poster", {
        params: {
          id: id,
        },
      });
      setOverviewMovie(poster.data);
    } catch (error) {
      console.error("poster err :", error);
      handleCloseOverview();
      alert("Something went wrong !!!");
    }
  };

  const handleCloseOverview = () => {
    document
      .querySelector("#overview-movies" + index)
      .classList.add("custom-style-overview-movies");
  };

  const handleOpenTrailerMovie = (movieId) => {
    if (movieId) setOpenTrailer({ ...openTrailer, isOpen: true, id: movieId });
    return;
  };
  useOnClickOutside(trailerRef, () =>
    setOpenTrailer({ ...openTrailer, isOpen: false, id: "" })
  );

  const handleOpenDetail = () => {
    console.log("clicked");
    history.push(`/browser/movie/${overviewMovie.id}`);
  };
  return (
    <>
      <section className="text-gray-100 mr-15 relative slider">
        {openTrailer.isOpen && <Trailer ref={trailerRef} id={openTrailer.id} />}
        <div className="relative overflow-x-visible">
          <h2 className="absolute z-0 left-2 top-0 text-xl font-semibold">
            {title}
          </h2>
          {movies ? (
            <Movies
              handleOpenOverview={handleOpenOverview}
              moviesList={movies}
              handleOpenTrailerMovie={handleOpenTrailerMovie}
            />
          ) : (
            <div>Something went wrong. pls reload page again</div>
          )}
        </div>
      </section>
      <div
        id={`overview-movies${index}`}
        className="w-full h-450 bg-gray-500 mb-5 rounded-md relative custom-style-overview-movies"
      >
        {overviewMovie ? (
          <>
            <div
              style={{
                background: `linear-gradient(to right, #000, #000, transparent, transparent) , url(${
                  overviewMovie && overviewMovie.posters
                    ? overviewMovie.posters.link
                    : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fplease%2Bwait%2Bsign&psig=AOvVaw1ea-9ooP9dQ9MonOwAnu7q&ust=1633277730613000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDoyemPrPMCFQAAAAAdAAAAABAD"
                })`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-full"
            >
              <div className="pl-14 py-4 text-left text-gray-200 w-3/4">
                <div className="flex flex-col">
                  <div>
                    <h1 className="text-7xl font-black mb-5">
                      {overviewMovie && overviewMovie.title}
                    </h1>
                  </div>
                  <div className="w-2/4 space-y-2">
                    <div className="text-xs text-gray-300 font-semibold">
                      <span>
                        {overviewMovie && overviewMovie.year}
                        <span className="border border-white mx-1 px-1">
                          Movies
                        </span>{" "}
                        2 Seasons
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span>
                        <svg
                          className="w-8 h-8"
                          id="top-10-badge"
                          viewBox="0 0 28 30"
                        >
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
                      </span>
                      <span>#2 in Movies Today</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta, iusto? Temporibus itaque voluptatum delectus ut
                        facilis qui ab aperiam blanditiis odit veritatis?
                        Tenetur omnis doloremque consectetur fugiat
                        exercitationem suscipit ab!
                      </p>
                    </div>
                    <div className="flex flex-row space-x-4 items-center">
                      <button
                        className="border border-red-700 rounded-sm cursor-pointer px-7 py-2 bg-red-E5"
                        onClick={handleOpenDetail}
                      >
                        <i className="fas fa-play"></i>DETAIL
                      </button>
                      <button className="border border-red-700 rounded-sm cursor-pointer px-7 py-2">
                        <i className="fas fa-plus cursor-pointer"></i> MY LIST
                      </button>
                      <div className="w-8 h-8 border border-white rounded-full grid place-content-center">
                        <i className="far fa-thumbs-up cursor-pointer"></i>
                      </div>
                      <div className="w-8 h-8 border border-white rounded-full grid place-content-center">
                        <i className="far fa-thumbs-down cursor-pointer"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 space-x-6 text-gray-200 font-semibold">
              <span className="w-full cursor-pointer hover:border-red-600 custom-style-span-opt">
                OVERVIEW
              </span>
              <span className="w-full cursor-pointer hover:border-red-600 custom-style-span-opt">
                EPISODES
              </span>
              <span className="w-full cursor-pointer hover:border-red-600 custom-style-span-opt">
                TRAILER {"&"} MORE
              </span>
              <span className="w-full cursor-pointer hover:border-red-600 custom-style-span-opt">
                MORE LIKE THIS
              </span>
              <span className="cursor-pointer hover:border-red-600 custom-style-span-opt">
                DETAILS
              </span>
            </div>
            <div className="text-gray-200 absolute top-2 right-2">
              <i
                className="fa fa-times fa-2x cursor-pointer hover:text-gray-100"
                onClick={handleCloseOverview}
              ></i>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center">
            <i className="fas fa-spinner fa-spin fa-3x"></i>
          </div>
        )}
      </div>
    </>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
  index: PropTypes.number,
};

Category.defaultProps = {
  title: "",
  movies: [],
  index: 0,
};

export default Category;
