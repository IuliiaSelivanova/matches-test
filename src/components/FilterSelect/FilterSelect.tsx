import { useEffect, useRef, useState } from "react";
import "../../styles/filterOptions.css";
import { filterOptions } from "../../utils/filterOptions";

const FilterSelect = () => {
  const [selectedOption, setSelectedOption] = useState(
    filterOptions[0].label,
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: {
    label: string;
    disabled: boolean;
  }) => {
    if (option.disabled) return;
    setSelectedOption(option.label);

    // setIsOpen(false);
  };

  // закрытие dropdown-menu по клику все dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside,
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className={`btn__filter dropdown-toggle ${
          isOpen && "active"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {filterOptions.map((option, index) => (
            <li
              key={index}
              className={`dropdown-item ${
                option.disabled ? "disabled" : ""
              } ${
                option.label === selectedOption
                  ? "active"
                  : ""
              }`}
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(option);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterSelect;
