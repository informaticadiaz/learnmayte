import { SideBarMenuCard } from "../../types/types"
import { classNames } from "../../util/classes"
import "./SideBarMenuCardView.scss"

import { Link } from 'react-router-dom';

interface SideBarMenuCardViewProps {
  card: SideBarMenuCard;
  isOpen: boolean;
}

function SideBarMenuCardView({
  card,
  isOpen,
 }: SideBarMenuCardViewProps) {
  return (
    <div className="SideBarMenuCardView">
      <Link to="/">
      <img 
        className="profile"
        alt={card.displayName}
        src={card.photoUrl}
        width="100%" 
      />
      </Link>
      <div className={classNames("profileInfo", isOpen ? '': "collapsed")}>
        <div className="name">{card.displayName}</div>
        <div className="title">{card.title}</div>
        <div className="url">
          
          </div>
      </div> 
    </div>
  )
}

export default SideBarMenuCardView