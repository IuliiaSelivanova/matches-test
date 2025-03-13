import btnIcon from "../../assets/icon-refresh.svg";
import "../../styles/header.css";
import React, { useEffect } from "react";
import ErrorCard from "../Error/ErrorCard";
import FilterOptions from "../FilterSelect/FilterSelect";
import { useGetMatchesQuery } from "../../Redux/features/api/apiSlice";
import { useDispatch } from "react-redux";
import { setMatchesFromAPI } from "../../Redux/features/matches/matchesSlice";

const Header: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const {
    data: matches,
    error,
    isFetching,
    refetch,
  } = useGetMatchesQuery();

  useEffect(() => {
    if (matches) {
      dispatch(setMatchesFromAPI(matches));
    }
  }, [matches, dispatch]);

  return (
    <header className="header d-flex justify-content-between">
      <div className="header__title d-flex">
        <h1 className="header__logo">Match Tracker</h1>
        <FilterOptions />
      </div>

      <div className="header__controls d-flex">
        {error && <ErrorCard />}
        <button
          type="button"
          className={`btn-refresh d-flex justify-content-center align-items-center flex-nowrap ${
            isFetching ? "loading" : ""
          }`}
          onClick={refetch}
          disabled={isFetching}
        >
          Обновить
          <img
            className={isFetching ? "loading" : ""}
            src={btnIcon}
            alt="loading icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
