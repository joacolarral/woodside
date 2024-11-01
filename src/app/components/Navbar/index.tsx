"use client";

import cs from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import useIsMobile from "@/app/hooks/useIsMobile";
import Woodside_Logo from "@/app/images/woodside_logo.svg";
import Menu from "@/app/images/Menu.svg";

import styles from "./Navbar.module.scss";
import { NAVBAR_ITEMS } from "@/app/constants";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const shouldDisplayMenu = !isMobile || (isMobile && menuOpen);

  const navbarStyles = cs(
    styles.container,
    styles.fixedNavbar,
    menuOpen && styles.openMenuMobile
  );

  return (
    <div className={navbarStyles}>
      <div className={styles.contentContainer}>
        <div className={styles.logosContainer}>
          <div className={styles.containerBrands}>
            <Image
              width={isMobile ? 100 : 120}
              src={Woodside_Logo}
              alt="Woodside_Logo"
            />
          </div>
          <div
            role="button"
            onClick={handleOpenMenu}
            className={styles.menuIcon}
          >
            <Image width={22} src={Menu} alt="menu_burguer" />
          </div>
        </div>
        {shouldDisplayMenu && (
          <div className={styles.navbarItemsContainer}>
            {Object.entries(NAVBAR_ITEMS).map(([key, text], index, array) => (
              <Link
                onClick={handleOpenMenu}
                className={styles.navItem}
                href={`#${text.toLocaleLowerCase()}`}
                key={key}
                data-last={index === array.length - 1}
              >
                {key.replace("_", " ").toLocaleUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
