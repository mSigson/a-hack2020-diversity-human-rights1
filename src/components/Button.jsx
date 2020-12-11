import React from "react";
import lightenDarkenColor from "../utils/lightenDarkenColor";
import Link from "next/link";

const Button = ({ children, color = "#7acbd7", href, onClick }) => {
  return (
    <>
      {href ? (
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
