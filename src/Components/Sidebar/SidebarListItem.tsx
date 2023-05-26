import "./SidebarListItem.scss";

interface ListItem {
  title: string;
  icon: string;
  count?: number;
  selected?: boolean;
}

function SidebarListItem({ title, icon, count, selected }: ListItem) {
  return (
    <div className="listItem__container">
      <div className="listItem__leftContainer">
        <img className="listItem__icon" src={icon} alt={title} />
        <p className="listItem__title">{title}</p>
      </div>
      {count && <p className="listItem__count">{count}</p>}
    </div>
  );
}

export default SidebarListItem;
