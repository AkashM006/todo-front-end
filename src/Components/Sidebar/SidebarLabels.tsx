import SidebarDropdown, { SidebarDropdownItem } from "./SidebarDropdown";
import "./SidebarLabels.scss";

const ITEMS: SidebarDropdownItem[] = [
  {
    id: 1,
    title: "List",
    listItems: [
      {
        id: 1,
        name: "Personal",
        emoji: "❤️",
        count: 3,
      },
      {
        id: 2,
        name: "Professional",
        emoji: "😎",
      },
    ],
  },
];

function SidebarLabels() {
  return (
    <>
      {ITEMS.map((item) => (
        <SidebarDropdown
          id={item.id}
          key={item.id}
          listItems={item.listItems}
          title={item.title}
        />
      ))}
    </>
  );
}

export default SidebarLabels;
