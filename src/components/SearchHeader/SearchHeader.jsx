import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search-icon.png";
import "./SearchHeader.scss";

const SearchHeader = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleOnChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate({ pathname: "/items", search: `?search=${query}` });
  };

  return (
    <div className="search-header">
      <div className="search-header__container">
        <Link to="/">
          <img src={logo} alt="logo" className="search-header__container__logo" />
        </Link>
        <form onSubmit={handleSearch} className="search-header__container__input-container">
            <input
              className="search-header__container__input-container__input"
              placeholder="Nunca dejes de buscar"
              role="search"
              onChange={handleOnChange}
              value={query}
            />
          <img 
            src={searchIcon}
            alt="search"
            className="search-header__container__input-container__button"
            onClick={handleSearch}
          />
        </form>
      </div >
    </div>
  );
}

export default SearchHeader;
