import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search-icon.png';
import './SearchHeader.scss';

const SearchHeader = () => {
  return (
    <div className='search-header'>
      <div className='search-header__container'>
        <img src={logo} alt='logo' className='search-header__container__logo' />
        <div className="search-header__container__input-container">
          <input
            className="search-header__container__input-container__input"
            placeholder='Nunca dejes de buscar'
            role="search"
          />
          <img src={searchIcon} alt='search' className='search-header__container__input-container__button' />
        </div>
      </div >
    </div>
  );
}

export default SearchHeader;
