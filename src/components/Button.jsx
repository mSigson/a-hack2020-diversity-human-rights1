import React from "react";
import lightenDarkenColor from "../utils/lightenDarkenColor";
import Link from "next/link";

const Button = ({ children, color = "#0F6DAB", href, onClick }) => {
  return (
    <>
      {href && href.split("")[0] === "h" ? (
        <a href={href} style={{ textDecoration: "none" }}>
          <div className="button">{children}</div>
        </a>
      ) : href ? (
        <Link href={href}>
          <div className="button">{children}</div>
        </Link>
      ) : (
        <button onClick={onClick} className="button">
          {children}
        </button>
      )}
      <style jsx>{`
        .button {
          outline: none;
          border-radius: 3px;
          font-size: 16px;
          border: none;
          background: ${color ? color : "none"};
          padding: 8px 12px;
          color: ${color ? "white" : "black"};
        }

        .button:hover {
          background: ${color ? lightenDarkenColor(color, -20) : "none"};
        }
      `}</style>
    </>
  );
};

export default Button;
