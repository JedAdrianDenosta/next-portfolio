import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="bg-red-300 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
