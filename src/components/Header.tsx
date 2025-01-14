import Logo from "../assets/img/Logo_bière.png"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/css/Header.css"
const Header = () => {
  return (
    <header className="bg-white text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to='/'className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Logo} alt="Logo" className="w-20 h-20 p-2 rounded-full" />
          <span className="ml-3 text-xl">Zytho</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink className="mr-5 hover:text-gray-900" to='/beerpage'>Beers List</NavLink>
          <NavLink className="mr-5 hover:text-gray-900" to='/brewerypage'>Breweries List</NavLink>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Sign in 
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
