import btnIcon from "../../assets/icon-refresh.svg";
import errorIcon from "../../assets/icon-error.png";
import "../../styles/header.css";

const Header = () => {
  return (
    <header className="header d-flex justify-content-between">
      <h1 className="header__title">Match Tracker</h1>
      <div className="header__control">
        <div className="error">
          <img src={errorIcon} alt="error icon" />
          Ошибка: не удалось загрузить информацию
        </div>
        <button
          type="button"
          className="btn--refresh btn btn-primary"
        >
          Обновить
          <img src={btnIcon} alt="loading icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
