import { SideBarMenuCard, SideBarMenuItem } from "../../types/types";
import SideBarMenuCardView from "./SideBarMenuCardView";
import SideBarMenuItemView from "./SideBarMenuItemView";
import { useState } from "react";
import { classNames } from "../../util/classes";
import { VscMenu } from "react-icons/vsc";

import './SideBarMenu.scss';


interface SideBarMenuProps {
  items: SideBarMenuItem[];
  card: SideBarMenuCard;
}

function SideBarMenu({ items, card }: SideBarMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="menuButton">
        <button className="hamburgerIcon" onClick={handleClick}>
          <VscMenu />
        </button>
      </div>
      <div className={classNames('SideBarMenu', isOpen ? 'expanded' : 'collapsed')}
      >
        <SideBarMenuCardView card={card} isOpen={isOpen} />
        {items.map((item) => (
          <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
        ))}
      </div>
    </>
  )
}

export default SideBarMenu