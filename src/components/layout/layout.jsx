import React, { useContext } from "react";
import NavBar from "./Navbar";
import Cart from "../cart";
import DisplayContext from "../../context/display-context";
import styles from "../../../styles/layout.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { cartView } = useContext(DisplayContext);

  return (
    <div className={cartView ? styles.noscroll : null}>
      <Cart />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
