import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex text-white h-20 px-4 bg-black fixed w-full justify-between items-center">
      <div>
        <h1 className="text-5xl ml-2 font-signature ">Aakash</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium  text-gray-300 hover:scale-105 duration-200"
          >
            {console.log(link)}
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer transition  z-10 pr-4 md:hidden text-gray-300"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 text-gray-300 absolute top-0 left-0 w-full h-screen">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 text-4xl cursor-pointer capitalize py-6"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
