import React, { useCallback, useState } from "react";
import logo from "../images/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineDown } from "react-icons/ai";
import GlobalContext from "../Context";
import { navbar } from "../Data/navbar.js";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const { setNavHeight } = GlobalContext();
  const [isMoved, setIsMoved] = useState(false);
  const [menuIsShown, setMenuIsShown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const navRef = React.useRef(null);
  React.useEffect(() => {
    const height = navRef.current.getBoundingClientRect().height;
    setNavHeight(height);
  }, [setNavHeight]);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 20) {
      setIsMoved(true);
    } else if (window.scrollY < 20) {
      setIsMoved(false);
    }
  }, []);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div
      ref={navRef}
      className={`navbar px-4  ${
        isMoved && "shadow-lg"
      } fixed top-0 left-0 right-0 bg-white z-50 mb-4 flex items-center justify-between lg:justify-center`}
      onMouseEnter={(e) =>
        (!e.target.classList.contains("link") ||
          !e.target.classList.contains("menu")) &&
        setMenuIsShown(false)
      }
      onMouseLeave={() => setMenuIsShown(false)}
    >
      <img src={logo} className=" relative right-2 h-20" alt="logo" />
      <CgMenuRight
        className="w-7 h-7 lg:hidden"
        onClick={() => setMobileMenu(!mobileMenu)}
      />
      {mobileMenu && (
        <div className="bg-gray-600 opacity-50 w-screen h-screen absolute top-0 left-0 bottom-0"></div>
      )}
      {mobileMenu && <Sidebar setMobileMenu={setMobileMenu} />}
      <div className=" items-center w-3/4 justify-end hidden lg:flex">
        <ul className="flex w-2/3 justify-evenly">
          {navbar.map((link) => {
            const { name, id, links } = link;
            return (
              <div className="flex flex-col link" key={id}>
                <div
                  className="flex items-center"
                  onMouseEnter={() => {
                    setSelectedId(id);
                    setMenuIsShown(true);
                  }}
                >
                  <li className="text-xl tracking-wide font-medium">
                    <a href="#" alt="link">
                      {name}
                    </a>
                  </li>
                  <AiOutlineDown className="ml-2 w-2 h-2 mt-2" />
                </div>
                <div
                  className={`flex flex-col absolute top-24  shadow-md bg-white px-8 menu`}
                  onMouseLeave={() => setMenuIsShown(false)}
                >
                  {menuIsShown
                    ? links?.map((link, idx) => {
                        return (
                          <div
                            key={idx}
                            className={`${
                              selectedId === id ? "block" : "hidden"
                            } `}
                          >
                            <div className="flex items-center my-4">
                              <h1 className=" text-xl">{link}</h1>
                              {name ? (
                                <AiOutlineDown className="ml-2 w-2 h-2 mt-2" />
                              ) : null}
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            );
          })}
        </ul>

        <button className="block ml-4 shadow-md bg-orange-500 py-4 px-6 font-bold tracking-widest text-white hover:bg-orange-600 transition ease-in-out delay-150">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Navbar;
