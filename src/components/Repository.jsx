import React from "react";
import Link from "next/link";
import Button from "./Button";

const Repository = ({ repo, seekReview }) => {
  return (
    <div className="repo">
      <div className="repo-info">
        <p className="repo-title">{repo.name}</p>
        {repo.language}
      </div>
      <div className="repo-cta">
        <Button href={repo.html_url}>Go to Repo</Button>
        <Button color="#807ad7" onClick={seekReview}>
          Seek a Review
        </Button>
      </div>
      <style jsx>{`
        .repo {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: calc(50% - 10px);
          padding: 24px;
          background: white;
          border-radius: 8px;
          border: 1px solid #aaaaaa;
        }

        .repo-info {
          font-size: 16px;
          min-width: 50%;
          max-width: 50%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .repo-title {
          font-weight: bold;
        }

        .repo-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 250px;
        }

        @media (max-width: 960px) {
          .repo {
            width: 100%;
            flex-direction: column;
          }

          .repo-info,
          .repo-cta {
            width: 100%;
            min-width: 100%;
            max-width: 100%;
          }

          .repo-cta {
            justify-content: initial;
            align-items: initial;
            margin: 12px 0 0;
          }

          .repo-cta .button {
            margin-right: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Repository;
