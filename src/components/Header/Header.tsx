import btnIcon from "../../assets/icon-refresh.svg";
import "../../styles/header.css";
import React, { useState } from "react";
import ErrorCard from "../Error/ErrorCard";
import FilterOptions from "../FilterSelect/FilterSelect";

type IHeaderProps = {
  // onRefresh: () => void;
  isError: boolean;
};

const Header: React.FunctionComponent<IHeaderProps> = ({
  // onRefresh,
  isError,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async () => {
    setIsLoading(true);
    // await onRefresh();
    setIsLoading(false);
  };

  // useEffect(() => {
  //   fetchMatches();
  // }, [fetchMatches]);
  return (
    <header className="header d-flex justify-content-between">
      <div className="header__title d-flex align-items-center">
        <h1 className="header__logo">Match Tracker</h1>
        <FilterOptions />
      </div>

      <div className="header__controls d-flex">
        {isError && <ErrorCard />}
        <button
          type="button"
          className={`btn-refresh btn d-flex justify-content-center align-items-center flex-nowrap ${
            isLoading ? "loading" : ""
          }`}
          onClick={handleRefresh}
          disabled={isLoading}
        >
          Обновить
          <img
            className={isLoading ? "loading" : ""}
            src={btnIcon}
            alt="loading icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
