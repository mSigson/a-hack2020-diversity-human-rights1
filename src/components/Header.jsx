import React from "react";
import Link from "next/link";

const Header = ({ user }) => {
  return (
    <header>
      <div className="title">Convoy</div>
      {user && (
        <nav>
          <Link href={`/dashboard`}>Dashboard</Link>
          <Link href={`/user/${user.name}/projects`}>My Projects</Link>
          <Link href={`/review-requests`}>Requesting Review</Link>
        </nav>
      )}

      <style jsx global>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 12px;
          font-weight: 700;
          position: fixed;
          width: 100%;

          background: #0f6dab;
        }

        .title {
          font-size: 32px;
          color: white;
        }

        nav {
          color: white;
        }

        nav a {
          margin-right: 24px;
        }
      `}</style>
    </header>
  );
};

export default Header;
