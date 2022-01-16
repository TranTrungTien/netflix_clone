import React, { useState } from "react";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
    faq6: false,
  });

  const handleOpenFaq = (e, isClicked) => {
    setOpenFaq({ ...openFaq, [e.target.id]: isClicked });
  };
  return (
    <section className="w-full h-auto border-b-8 border-black-222">
      <div className="py-8 md:px-20 md:py-20">
        <div className="text-white flex flex-col text-center justify-center items-center">
          <h1 className="text-2xl md:text-5xl py-5 px-8 font-extrabold md:py-10">
            Frequently Asked Questions
          </h1>
          <ul className="w-full md:w-55% mx-auto text-base md:text-2xl space-y-1 md:space-y-2">
            <li>
              <div className="flex justify-between items-center border-b border-black py-3 md:py-5 bg-gray-3030 px-5">
                <p>What is Netflix?</p>
                <i
                  className={`fa fa-plus cursor-pointer ${
                    openFaq.faq1 ? "hidden" : ""
                  }`}
                  id="faq1"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq1)}
                ></i>
                <i
                  className={`fa fa-times ${
                    openFaq.faq1 ? "" : "hidden"
                  }  cursor-pointer `}
                  id="faq1"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq1)}
                ></i>
              </div>
              <div
                id="faq"
                className={`mt-px text-left ${
                  openFaq.faq1 ? "" : "hidden"
                } pt-5 pb-8 leading-8 space-y-8 bg-gray-3030 px-5`}
              >
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV programmes, films, anime, documentaries and
                  more – on thousands of internet-connected devices.
                </p>
                <p>
                  You can watch as much as you want, whenever you want, without
                  a single advert – all for one low monthly price. There's
                  always something new to discover, and new TV programmes and
                  films are added every week!
                </p>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center border-b border-black py-3 md:py-5 bg-gray-3030 px-5">
                <p>How much does Netflix costs?</p>
                <i
                  className={`fa fa-plus cursor-pointer  ${
                    openFaq.faq2 ? "hidden" : ""
                  }`}
                  id="faq2"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq2)}
                ></i>
                <i
                  className={`fa fa-times cursor-pointer  ${
                    openFaq.faq2 ? "" : "hidden"
                  }`}
                  id="faq2"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq2)}
                ></i>
              </div>
              <div
                className={`mt-px text-left ${
                  openFaq.faq2 ? "" : "hidden"
                } pt-5 pb-8 leading-8 space-y-8 bg-gray-3030 px-5`}
              >
                Watch Netflix on your smartphone, tablet, smart TV, laptop or
                streaming device, all for one fixed monthly fee. Plans range
                from $11.98 to $19.98 a month. No extra costs, no contracts.
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center border-b border-black py-3 md:py-5 px-5 bg-gray-3030">
                <p>Where can I watch?</p>
                <i
                  className={`fa fa-plus cursor-pointer  ${
                    openFaq.faq3 ? "hidden" : ""
                  }`}
                  id="faq3"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq3)}
                ></i>
                <i
                  className={`fa fa-times ${
                    openFaq.faq3 ? "" : "hidden"
                  }  cursor-pointer `}
                  id="faq3"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq3)}
                ></i>
              </div>
              <div
                className={`mt-px text-left ${
                  openFaq.faq3 ? "" : "hidden"
                } pt-5 pb-8 leading-8 space-y-8 bg-gray-3030 px-5`}
              >
                <p>
                  Watch anywhere, anytime, on an unlimited number of devices.
                  Sign in with your Netflix account to watch instantly on the
                  web at netflix.com from your personal computer or on any
                  internet-connected device that offers the Netflix app,
                  including smart TVs, smartphones, tablets, streaming media
                  players and game consoles.
                </p>
                <p>
                  You can also download your favourite programmes with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </p>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center border-b border-black py-3 md:py-5 bg-gray-3030 px-5">
                <p>How do I cancel?</p>
                <i
                  className={`fa fa-plus cursor-pointer  ${
                    openFaq.faq4 ? "hidden" : ""
                  }`}
                  id="faq4"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq4)}
                ></i>
                <i
                  className={`fa fa-times ${
                    openFaq.faq4 ? "" : "hidden"
                  }  cursor-pointer `}
                  id="faq4"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq4)}
                ></i>
              </div>
              <div
                className={`mt-px text-left ${
                  openFaq.faq4 ? "" : "hidden"
                } pt-5 pb-8 leading-8 space-y-8 bg-gray-3030 px-5`}
              >
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account at any time.
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center border-b border-black py-3 md:py-5 bg-gray-3030 px-5">
                <p>What can I watch on Netflix?</p>
                <i
                  className={`fa fa-plus cursor-pointer  ${
                    openFaq.faq5 ? "hidden" : ""
                  }`}
                  id="faq5"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq5)}
                ></i>
                <i
                  className={`fa fa-times ${
                    openFaq.faq5 ? "" : "hidden"
                  }  cursor-pointer `}
                  id="faq5"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq5)}
                ></i>
              </div>
              <div
                className={`mt-px text-left ${
                  openFaq.faq5 ? "" : "hidden"
                } pt-5 pb-8 leading-8 space-y-8 bg-gray-3030 px-5`}
              >
                Netflix has an extensive library of feature films,
                documentaries, TV programmes, anime, award-winning Netflix
                originals, and more. Watch as much as you want, any time you
                want.
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center border-b border-black py-3 md:py-5 bg-gray-3030 px-5">
                <p>Is Netflix good for children?</p>
                <i
                  className={`fa fa-plus cursor-pointer  ${
                    openFaq.faq6 ? "hidden" : ""
                  }`}
                  id="faq6"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq6)}
                ></i>
                <i
                  className={`fa fa-times ${
                    openFaq.faq6 ? "" : "hidden"
                  }  cursor-pointer `}
                  id="faq6"
                  onClick={(e) => handleOpenFaq(e, !openFaq.faq6)}
                ></i>
              </div>
              <div
                className={`mt-px text-left ${
                  openFaq.faq6 ? "" : "hidden"
                } pt-5 pb-8 leading-8 space-y-8 bg-gray-3030 px-5`}
              >
                <p>
                  The Netflix Children's experience is included in your
                  membership to give parents control while children enjoy
                  family-friendly TV programmes and films in their own space.
                </p>
                <p>
                  Children's profiles come with PIN-protected parental controls
                  that let you restrict the maturity rating of content children
                  can watch and block specific titles you don’t want children to
                  see.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-16 w-full h-full">
            <p className="text-lg mb-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="px-6 md:px-0 w-full md:w-1/2 h-26 md:h-16 mx-auto flex flex-col md:flex-row justify-center items-center outline-none border-none focus:outline-none focus:border-none space-y-3 md:space-y-0">
              <input
                type="email"
                placeholder="Email Address"
                className="pl-5 w-full md:w-2/3 h-full rounded-sm"
              />
              <button className="w-1/3 mx-auto md:w-1/3 h-full bg-red-E5 text-lg md:text-3xl md:font-normal rounded-sm ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
