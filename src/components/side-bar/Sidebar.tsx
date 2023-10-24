import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { removeAllListeners } from "process";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const div = document.getElementById("sideBar");
  const menuIcon = document.getElementById("menu-icon");

  const handleEvent = (event: any) => {
    if (
      event.target !== div &&
      !div?.contains(event.target) &&
      event.target !== menuIcon
    ) {
      // Xử lý sự kiện click bên ngoài <div> ở đây
      setOpenSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleEvent);

    return () => {
      document.removeEventListener("click", handleEvent);
    };
  }, [div]);

  const adminTabs = [
    {
      label: (
        <div className={`Sidebar__item-wrapper Sidebar__item-active`}>Home</div>
      ),
      route: "#",
    },
    {
      label: <div className={`Sidebar__item-wrapper`}>Services</div>,
      route: "#",
    },
    {
      label: <div className={`Sidebar__item-wrapper`}>News</div>,
      route: "#",
    },
    {
      label: <div className={`Sidebar__item-wrapper`}>Blog</div>,
      route: "#",
    },
    {
      label: <div className={`Sidebar__item-wrapper`}>Contact</div>,
      route: "#",
    },
  ];

  const renderSidebarItem = (
    data: { label: JSX.Element; route: string },
    key: number
  ) => {
    const { label, route } = data;

    return (
      <div key={key} className="Sidebar__item">
        {label}
      </div>
    );
  };

  return (
    <div className="Sidebar">
      <div
        id="sideBar"
        className={`Sidebar__menu ${openSidebar && "open"}`}
        onBlur={() => {
          console.log("blur");
        }}
      >
        {adminTabs.map((tab, key) => renderSidebarItem(tab, key))}
      </div>
      <div className="Sidebar__icon">
        <img className="Sidebar__icon-img" src="../../public/logoNCC 1.png" />
        <MenuRoundedIcon
          id="menu-icon"
          onClick={() => {
            setOpenSidebar(true);
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
