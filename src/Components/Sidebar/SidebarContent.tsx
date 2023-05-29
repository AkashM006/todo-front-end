import icons from "../../assets/icons";
import "./SidebarContent.scss";
import SidebarDaysList from "./SidebarDaysList";
import SidebarLabels from "./SidebarLabels";
import SidebarListItem from "./SidebarListItem";
import SidebarTitle from "./SidebarTitle";

function SidebarContent() {
  return (
    <>
      <div className="sidebarContent__container">
        <SidebarTitle />
        <SidebarDaysList />
        <div className="bin__container">
          <SidebarListItem
            icon={
              <img
                src={icons.ICON_BIN}
                alt="Delete Icon"
                className="icon__container"
              />
            }
            title="Trash"
          />
        </div>
      </div>
      <hr className="border" />
      <div className="sidebarContent__container">
        <SidebarLabels />
      </div>
    </>
  );
}

export default SidebarContent;
