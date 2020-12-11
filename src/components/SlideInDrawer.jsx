import React from "react";
import Button from "./Button";

const SlideInDrawer = ({ children, close }) => {
  return (
    <>
      <div className="slide-in">
        <Button onClick={close} color={null}>
          X
        </Button>
        <div>{children}</div>
      </div>
      <style jsx>{`
        .slide-in {
          width: 60vw;
          height: 100vh;
          position: absolute;
          right: 0;
          bottom: 0;
          top: 0;
          z-index: 999999;
          background: white;
          overflow-y: auto;
          padding: 24px 40px;
        }

        @media (max-width: 960px) {
          .slide-in {
            width: 100vw;
          }
        }
      `}</style>
    </>
  );
};

export default SlideInDrawer;
