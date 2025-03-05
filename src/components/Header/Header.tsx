import btnIcon from "../../assets/icon-refresh.svg";
import "../../styles/header.css";
import React from "react";
import ErrorCard from "../Error/ErrorCard";
import { ServerError } from "../../types/types";

type IHeaderProps = {
  onRefresh: () => void;
  error: ServerError | null;
};

const Header: React.FunctionComponent<IHeaderProps> = ({
  onRefresh,
  error,
}) => {
  return (
    <header className="header d-flex justify-content-between">
      <h1 className="header__title">Match Tracker</h1>
      <div className="header__controls d-flex">
        {error && <ErrorCard />}
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
