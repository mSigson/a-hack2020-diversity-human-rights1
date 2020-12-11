import React from "react";
import Header from "./Header";

const Layout = ({ user, children }) => {
  return (
    <div className="layout">
      <Header user={user} />
      <main>{children}</main>
      <style jsx>{`
        .layout {
          position: relative;
        }

        main {
          min-height: 100vh;
          padding: 24px;
          padding-top: 100px;
          background: #e6effb;
          max-height: 100vh;
          height: 100vh;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default Layout;
