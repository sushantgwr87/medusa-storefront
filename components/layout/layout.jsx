import React, { useContext } from "react";
import NavBar from "./Navbar";
import CartView from "../cart";
import DisplayContext from "../../context/display-context";
import styles from "../../styles/layout.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { cartView } = useContext(DisplayContext);

  return (
    <div className={cartView ? styles.noscroll : null}>
      <CartView />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
