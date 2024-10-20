import { SideBarMenuItem } from "../../types/types";
import { classNames } from "../../util/classes";
import "./SideBarMenuItemView.scss";

interface SideBarMenuItemViewProps {
  item: SideBarMenuItem;
  isOpen: boolean;
}

function SideBarMenuItemView({ item, isOpen }: SideBarMenuItemViewProps) {
  return (
    <div className="SideBarMenuItem">
      <a href={item.url}>
        <div className={classNames("ItemContent", isOpen ? "" : "collapsed")}>
          <div className="icon" style={{ fontSize: "32px" }}>
            <item.icon />
          </div>
          <span className="label">{item.label}</span>
        </div>
      </a>
      {!isOpen ? <div className="tooltip">{item.label}</div> : ""}
    </div>
  );
}

export default SideBarMenuItemView;
