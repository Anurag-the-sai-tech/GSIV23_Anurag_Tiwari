import React, { useState } from "react";
import "../styles/Header.scss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreState } from "../features/redux/store/store";
import {
  getSearchResults,
  getUpcomingMovies,
  setSearchText,
} from "../features/redux/reducers/moviesReducer";

interface NavbarProps {
  title?: string;
}

const Header = (props: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const dispatch = useDispatch<AppDispatch>();
  const stateDispatch = useDispatch();
  const { searchText } = useSelector((state: StoreState) => state.movies);
  const [inputSearchText, setInputSearchText] = useState<string>(searchText);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchText(event.target.value);
    if (event.target.value === "") dispatch(getUpcomingMovies(1));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const page: number = 1;
    if (searchText !== inputSearchText)
      stateDispatch(setSearchText(inputSearchText));
    if (inputSearchText !== "" && searchText !== inputSearchText)
      dispatch(getSearchResults(page));
  };

  return (
    <div className="header">
      {props.title && <h3>{props.title}</h3>}
      {isHome && (
        <div className="header__left">
          <SearchIcon className="search-icon" />
          <input
            className="header__left__input"
            value={inputSearchText}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}
      <span className="header__right">
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          <HomeIcon />
        </span>
      </span>
    </div>
  );
};

export default Header;
