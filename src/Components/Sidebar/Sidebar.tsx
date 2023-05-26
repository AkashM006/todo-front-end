import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./Sidebar.css";
import { useEffect, useState } from "react";
import SidebarContent from "./SidebarContent";
import icons from "../../assets/icons";

function Sidebar() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Open status: ", isOpen);
  }, [isOpen]);

  const closeIcon = theme === "dark" ? icons.ICON_CLOSE_DARK : icons.ICON_CLOSE;
  const menuIcon = theme === "dark" ? icons.ICON_MENU_DARK : icons.ICON_MENU;

  return (
    <div className="body__inner__container">
      <div onClick={() => setIsOpen(true)}>
        <img className="hamburger__icon" src={menuIcon} alt="hamburger menu" />
      </div>
      <div className={"sidebar__container" + (isOpen ? " active" : "")}>
        <img
          onClick={() => setIsOpen(false)}
          src={closeIcon}
          alt="Close"
          className="close__icon"
        />
        <SidebarContent />
      </div>
      <div className="content__container">
        Sidebar Current Theme: {theme}
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
