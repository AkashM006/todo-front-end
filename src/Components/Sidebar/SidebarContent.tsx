import icons from "../../assets/icons";
import "./SidebarContent.scss";
import SidebarDaysList from "./SidebarDaysList";
import SidebarListItem from "./SidebarListItem";
import SidebarTitle from "./SidebarTitle";

function SidebarContent() {
  return (
    <>
      <div className="sidebarContent__container">
        <SidebarTitle />
        <SidebarDaysList />
        <div className="bin__container">
          <SidebarListItem icon={icons.ICON_BIN} title="Trash" />
        </div>
      </div>
      <hr className="border" />
    </>
  );
}

export default SidebarContent;
