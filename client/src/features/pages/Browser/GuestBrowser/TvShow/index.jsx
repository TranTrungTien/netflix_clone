import React, { useEffect, useState } from "react";
import Navbar from "../../../../components/Header/Navbar";
import Footer from "../../../../components/Footer";
import Movie from "../../../../components/Category/Movie/Movie";
import BrowserRightNav from "../../../../components/Header/BrowserRightNav";
import LeftNav from "../../../../components/Header/LeftNav";

const TvShow = () => {
  const [src, setSrc] = useState("./images/logo.png");
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSrc("./images/logo_mobile.jpg");
    } else {
      setSrc("./images/logo.png");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-181818 overflow-x-hidden">
      <div className="bg-black">
        <Navbar width="h-auto" padding_y="py-0" padding_x="px-0">
          <LeftNav src={src} width="w-28 md:w-48" height="h-8 md:h-16" />
          <BrowserRightNav />
        </Navbar>
      </div>
      <div className="flex flex-col p-3%">
        <div className="text-gray-50 w-full md:w-2/5 pb-7">
          <h1 className="text-5xl font-black">TV Shows</h1>
          <p className="text-base md:text-lg pb-3% pt-3 leading-tight">
            These days, the small screen has some very big things to offer. From
            sitcoms to dramas to travel and talk shows, these are all the best
            programs on TV.
          </p>
        </div>
        <div className="flex flex-row flex-wrap">
          <Movie
            title="Joker"
            widthWrap="w-max"
            heightWrap="h-auto"
            widthInner="w-full sm:w-300"
            heightInner="h-auto sm:h-168"
            widthImage="w-full"
            heightImage="h-full"
            padding="p-2"
            margin="mb-2"
          />
          <Movie
            title="Joker"
            widthWrap="w-max"
            heightWrap="h-auto"
            widthInner="w-full sm:w-300"
            heightInner="h-auto sm:h-168"
            widthImage="w-full"
            heightImage="h-full"
            padding="p-2"
            margin="mb-2"
          />
          <Movie
            title="Joker"
            widthWrap="w-max"
            heightWrap="h-auto"
            widthInner="w-full sm:w-300"
            heightInner="h-auto sm:h-168"
            widthImage="w-full"
            heightImage="h-full"
            padding="p-2"
            margin="mb-2"
          />
          <Movie
            title="Joker"
            widthWrap="w-max"
            heightWrap="h-auto"
            widthInner="w-full sm:w-300"
            heightInner="h-auto sm:h-168"
            widthImage="w-full"
            heightImage="h-full"
            padding="p-2"
            margin="mb-2"
          />
          <Movie
            title="Joker"
            widthWrap="w-max"
            heightWrap="h-auto"
            widthInner="w-full sm:w-300"
            heightInner="h-auto sm:h-168"
            widthImage="w-full"
            heightImage="h-full"
            padding="p-2"
            margin="mb-2"
          />
          <Movie
            title="Joker"
            widthWrap="w-max"
            heightWrap="h-auto"
            widthInner="w-full sm:w-300"
            heightInner="h-auto sm:h-168"
            widthImage="w-full"
            heightImage="h-full"
            padding="p-2"
            margin="mb-2"
          />
          <Movie
            title="Joker"
            widthWrap="w-max"
            heightWrap="h-auto"
            widthInner="w-full sm:w-300"
            heightInner="h-auto sm:h-168"
            widthImage="w-full"
            heightImage="h-full"
            padding="p-2"
            margin="mb-2"
          />
          <Movie
            title="Joker"
            widthWrap="w-max"
            heightWrap="h-auto"
            widthInner="w-full sm:w-300"
            heightInner="h-auto sm:h-168"
            widthImage="w-full"
            heightImage="h-full"
            padding="p-2"
            margin="mb-2"
          />
          <Movie
            title="Joker"
            widthWrap="w-max"
            heightWrap="h-auto"
            widthInner="w-full sm:w-300"
            heightInner="h-auto sm:h-168"
            widthImage="w-full"
            heightImage="h-full"
            padding="p-2"
            margin="mb-2"
          />
          <Movie
            title="Joker"
            widthWrap="w-max"
            heightWrap="h-auto"
            widthInner="w-full sm:w-300"
            heightInner="h-auto sm:h-168"
            widthImage="w-full"
            heightImage="h-full"
            padding="p-2"
            margin="mb-2"
          />
          <Movie
            title="Joker"
            widthWrap="w-max"
            heightWrap="h-auto"
            widthInner="w-full sm:w-300"
            heightInner="h-auto sm:h-168"
            widthImage="w-full"
            heightImage="h-full"
            padding="p-2"
            margin="mb-2"
          />
        </div>
        <div className="w-full md:w-1/2 text-center mx-auto my-16 text-white">
          <h2 className="text-xl md:text-4xl font-bold">
            There’s even more to watch.
          </h2>
          <p className="text-base md:text-xl my-4 leading-snug">
            Netflix has an extensive library of feature films, documentaries, TV
            programmes, anime, award-winning Netflix originals and more. Watch
            as much as you want, any time you want.
          </p>
          <button className="px-9 py-3 bg-red-E5 rounded-sm">JOIN NOW</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TvShow;
