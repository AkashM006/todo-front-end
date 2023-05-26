import "./SidebarTitle.css";

function SidebarTitle() {
  const user = {
    name: "Guest",
  };

  return (
    <div className="sidebar__title__container">
      <h3 className="sidebar__title__avatar">{user.name[0]}</h3>
      <p className="sidebar__title">{user.name}</p>
    </div>
  );
}

export default SidebarTitle;
