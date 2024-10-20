import SideBarMenu from "./SideBarMenu/SideBarMenu";
import { SideBarMenuItem, SideBarMenuCard } from "../types/types";
import profileImage from "../assets/logo.png";
import { FcCalculator, FcGraduationCap, FcAddressBook } from "react-icons/fc";
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
      icon: FcCalculator,
      url: "/lengua",
    },
    {
      id: "3",
      label: "SOCIALES",
      icon: FcCalculator,
      url: "/sociales",
    },
    {
      id: "4",
      label: "NATURALES",
      icon: FcGraduationCap,
      url: "/naturales",
    },
    {
      id: "5",
      label: "CURSIVA",
      icon: FcGraduationCap,
      url: "/cursiva",
    },
    {
      id: "6",
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
