import "../styles/Header.scss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon className="search-icon"/>
        <input className="header__left__input" placeholder="Search" />
      </div>
      <span className="header__right">
        <HomeIcon />
      </span>
    </div>
  );
}

export default Header;
