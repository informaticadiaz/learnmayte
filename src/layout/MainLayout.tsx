import SideBarMenu from "./SideBarMenu/SideBarMenu";


import { SideBarMenuItem, SideBarMenuCard } from "../types/types";

import profileImage from "../assets/logo.png";

import { FcCalculator, FcGraduationCap } from "react-icons/fc";




const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const items: SideBarMenuItem[] = [
    {
      id: "1",
      label: "SUMAR",
      icon: FcCalculator,
      url: "/sumar",
    },
    {
      id: "2",
      label: "RESTAR",
      icon: FcCalculator,
      url: "/restar",
    },
    {
      id: "3",
      label: "CURSIVA",
      icon: FcGraduationCap,
      url: "/cursiva",
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