import SideBarMenu from "./SideBarMenu/SideBarMenu";
import { SideBarMenuItem, SideBarMenuCard } from "../types/types";
import profileImage from "../assets/logo.png";
import { FcCalculator, FcGraduationCap, FcAddressBook, FcLinux, FcCloseUpMode, FcPortraitMode, FcDownRight } from "react-icons/fc";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const items: SideBarMenuItem[] = [
    {
      id: "1",
      label: "MATEMATICA",
      icon: FcCalculator,
      url: "/matematica",
    },
    {
      id: "2",
      label: "LENGUA",
      icon: FcGraduationCap,
      url: "/lengua",
    },
    {
      id: "3",
      label: "SOCIALES",
      icon: FcPortraitMode,
      url: "/sociales",
    },
    {
      id: "4",
      label: "NATURALES",
      icon: FcCloseUpMode,
      url: "/naturales",
    },
    {
      id: "5",
      label: "TRIVIA",
      icon: FcLinux,
      url: "/trivia",
    },
    {
      id: "6",
      label: "CURSIVA",
      icon: FcDownRight,
      url: "/cursiva",
    },
    {
      id: "7",
      label: "DICCIONARIO",
      icon: FcAddressBook,
      url: "/diccionario",
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
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
