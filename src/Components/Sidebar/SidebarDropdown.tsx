import { useSelector } from "react-redux";
import "./SidebarDropdown.scss";
import { RootState } from "../../store";
import icons from "../../assets/icons";
import { useState } from "react";
import SidebarListItem from "./SidebarListItem";

type DropDownListItem = {
  id: number;
  name: string;
  emoji: string;
  count?: number;
};

export interface SidebarDropdownItem {
  id: number;
  title: string;
  listItems: DropDownListItem[];
}

function SidebarDropdown({ title, listItems }: SidebarDropdownItem) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const darkDropdown = icons.ICON_ARROW_DARK;
  const lightDropdown = icons.ICON_ARROW_LIGHT;

  const currentIcon = theme === "light" ? lightDropdown : darkDropdown;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown" onClick={() => setIsOpen((prev) => !prev)}>
      <div className="dropdown__title">
        <img
          src={currentIcon}
          data-rotate={isOpen}
          className="arrow"
          alt="Arrow"
        />
        <p className="dropdown__title-content">{title}</p>
      </div>
      <div data-toggle={isOpen} className="dropdown__content">
        {listItems.map((item) => (
          <SidebarListItem
            title={item.name}
            count={item.count}
            icon={<p className="dropdown__emoji">{item.emoji}</p>}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default SidebarDropdown;
