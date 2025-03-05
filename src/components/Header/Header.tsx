import btnIcon from "../../assets/icon-refresh.svg";
import "../../styles/header.css";
import React from "react";
import ErrorCard from "../Error/ErrorCard";

type IHeaderProps = {
  onRefresh: () => void;
  isError: boolean;
};

const Header: React.FunctionComponent<IHeaderProps> = ({
  onRefresh,
  isError,
}) => {
  return (
    <header className="header d-flex justify-content-between">
      <h1 className="header__title">Match Tracker</h1>
      <div className="header__controls d-flex">
        {isError && <ErrorCard />}
        <button
          type="button"
          className="btn-refresh btn d-flex justify-content-center align-items-center flex-nowrap"
          onClick={onRefresh}
        >
          Обновить
          <img src={btnIcon} alt="loading icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
