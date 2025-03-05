import btnIcon from "../../assets/icon-refresh.svg";
import errorIcon from "../../assets/icon-error.png";
import "../../styles/header.css";

const Header = () => {
  return (
    <header className="header d-flex justify-content-between">
      <h1 className="header__title">Match Tracker</h1>
      <div className="header__controls d-flex">
        <div className="error d-flex align-items-center">
          <img src={errorIcon} alt="error icon" />
          <p>Ошибка: не удалось загрузить информацию</p>
        </div>
        <button
          type="button"
          className="btn-refresh btn d-flex justify-content-center align-items-center flex-nowrap"
        >
          Обновить
          <img src={btnIcon} alt="loading icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
