import { nanoid } from "nanoid";
import { RARITY_LEVELS } from "./SideBar.consts";
import "./SideBar.scss";
import { SideBarAndInventoryProps } from "../../types";

export const SideBar = ({
  currentInventory,
  setCurrentInventory,
}: SideBarAndInventoryProps) => {
  // тут ругался линтер, погуглил и вставил такой тип
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentInventory(e.target.value);
  };

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__content">
        <h1 className="sidebar__title text">Выберите инвентарь:</h1>
        <select
          value={currentInventory}
          onChange={handleSelect}
          className="sidebar__select"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <option key={nanoid()} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <h1 className="sidebar__title text">Легенда:</h1>
        <ul className="sidebar__legend">
          {RARITY_LEVELS.map((rarity, index) => (
            <li key={nanoid()} className="sidebar__legend-item">
              <span
                className={`sidebar__legend-item-color sidebar__legend-item-color--${
                  index + 1
                }`}
              ></span>
              <span className="sidebar__legend-item-text text">{rarity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
