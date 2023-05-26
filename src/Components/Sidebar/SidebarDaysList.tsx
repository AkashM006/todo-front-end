import icons from "../../assets/icons";
import "./SidebarDaysList.scss";
import SidebarListItem from "./SidebarListItem";

export interface DayListItem {
  id: number;
  icon: string;
  count?: number;
  title: string;
}

function SidebarDaysList() {
  const list: DayListItem[] = [
    {
      id: 1,
      title: "Today",
      count: 1,
      icon: icons.ICON_TODAY,
    },
    {
      id: 2,
      title: "Upcoming",
      count: 9,
      icon: icons.ICON_UPCOMING,
    },
    {
      id: 3,
      title: "Missed",
      count: 1,
      icon: icons.ICON_MISSED,
    },
  ];

  return (
    <div className="dayslist__container">
      {list.map((item) => (
        <SidebarListItem
          icon={item.icon}
          title={item.title}
          count={item.count}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default SidebarDaysList;
