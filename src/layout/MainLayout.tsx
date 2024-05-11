import SideBarMenu from "./SideBarMenu/SideBarMenu";


import { SideBarMenuItem, SideBarMenuCard } from "../types/types";

import profileImage from "../assets/logo.png";

import { 
  FcCustomerSupport,
  FcVideoProjector,
  FcCalendar,
  FcCamcorder,
  FcMusic,
  FcBullish,
  FcBusinessman,
 } from "react-icons/fc";





const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const items: SideBarMenuItem[] = [
    {
      id: "1",
      label: "PAS",
      icon: FcCustomerSupport,
      url: "/#pas",
    },
    {
      id: "2",
      label: "Legales",
      icon: FcBusinessman,
      url: "/#legales",
    },
    {
      id: "3",
      label: "Economia",
      icon: FcBullish,
      url: "/#economia",
    },
    {
      id: "4",
      label: "Entrevistas",
      icon: FcCamcorder,
      url: "/#entrevistas",
    },
    {
      id: "5",
      label: "Podcast",
      icon: FcMusic,
      url: "/#podcast",
    },
    {
      id: "6",
      label: "Calendario",
      icon: FcCalendar,
      url: "/#calendario",
    },
    {
      id: "7",
      label: "Videoteca",
      icon: FcVideoProjector,
      url: "/#videoteca",
    },
  ];

  const card: SideBarMenuCard = {
    id: "card01",
    displayName: "",
    title: "",
    photoUrl: profileImage,
    url: "/",
  };

  return (
    <div>
      <SideBarMenu items={items} card={card} />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;