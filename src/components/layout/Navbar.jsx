import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState, useRef } from "react";
import DisplayContext from "../../context/display-context";
import StoreContext from "../../context/store-context";
import styles from "../../../styles/navbar.module.css";
import { quantity, sum } from "../../utils/helper-functions";
import SiteLogo from '../../../public/storefront_logo.png'
import useBreakpoints from "../../customHooks/useBreakpoints";

export const NavBar = () => {
  const { updateCartViewDisplay } = useContext(DisplayContext);
  const { cart } = useContext(StoreContext);

  const [isCheckout, setIsCheckout] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/checkout" || router.pathname === "/payment") {
      setIsCheckout(true);
    } else {
      setIsCheckout(false);
    }
  }, [router.pathname]);

  const { isMd } = useBreakpoints();

  const [showSidebar, setShowSidebar] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  const handleModalNav = () => {
    setShowSidebar(!showSidebar);
    setModalShow(true);
  }

  // create a React ref for the sidebar element
  const sidebar = useRef(null);

  const closeNav = () => {
    setShowSidebar(false)
  }

  function handleClick(event) {
    if (sidebar.current && !sidebar.current.contains(event.target)) {
      setShowSidebar(false);
    }
  }

  useEffect(() => {
    // only add the event listener when the sidebar is opened
    if (!showSidebar) return;
    if (showSidebar)
      window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showSidebar]);

  const [showSubmenu, setShowSubmenu] = useState(false);

  const subMenu = useRef(null);

  const handleSubmenu = (event) => {
    if (subMenu.current && !subMenu.current.contains(event.target)) {
      setShowSubmenu(false);
    }
  };

  useEffect(() => {
    // only add the event listener when the subMenu is opened
    if (!showSubmenu) return;
    if (showSubmenu)
      window.addEventListener("click", handleSubmenu);
    // clean up
    return () => window.removeEventListener("click", handleSubmenu);
  }, [showSubmenu]);


  return (
    <header>
      <nav>
        <Link href="/" passHref>
          <a className={styles.nav_logo___link}>
            <Image src={SiteLogo} width="70%" height="70%" alt="logo" />
          </a>
        </Link>
        {!isMd ?
          (
            <div className={styles.nav_desktop}>
              <ul>
                <a href="https://github.com/sushantgwr87/medusa-storefront" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://medusajs.com" target="_blank" rel="noopener noreferrer">Medusa</a>
                <a href="https://discordapp.com/users/1026288306838851615" target="_blank" rel="noopener noreferrer">Discord</a>
              </ul>
              {!isCheckout ? (
                <button
                  className={styles.cart_btn}
                  onClick={() => updateCartViewDisplay()}
                >
                  Cart
                  <span>
                    {cart.items.length > 0 ? cart.items.map(quantity).reduce(sum) : 0}
                  </span>
                </button>
              ) : null}
            </div>
          )
          :
          <>
            <div className={showSidebar ? styles.nav_mobile_menu___btn_close : styles.nav_mobile_menu___btn_open} onClick={() => setShowSidebar(!showSidebar)}></div>
            <div className={`${styles.nav_mobile} ${showSidebar ? styles.nav_mobile___show : styles.nav_mobile___hide}`} ref={sidebar}>
              <ul>
                <li>
                  {!isCheckout ? (
                    <button
                      className={styles.cart_btn}
                      onClick={() => updateCartViewDisplay()}
                    >
                      Cart
                      <span>
                        {cart.items.length > 0 ? cart.items.map(quantity).reduce(sum) : 0}
                      </span>
                    </button>
                  ) : null}
                </li>
                <li>
                  <a href="https://github.com/sushantgwr87/medusa-storefront" target="_blank" rel="noopener noreferrer">Github</a>
                </li>
                <li>
                  <a href="https://medusajs.com" target="_blank" rel="noopener noreferrer">Medusa</a>
                </li>
                <li>
                  <a href="https://discordapp.com/users/1026288306838851615" target="_blank" rel="noopener noreferrer">Discord</a>
                </li>
              </ul>
            </div>
          </>
        }
      </nav>
    </header>

  );
};

export default NavBar;
