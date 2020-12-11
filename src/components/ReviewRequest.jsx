import React from "react";
import Button from "./Button";

const ReviewRequest = ({ request }) => {
  return (
    <>
      <div className="request" key={request.id}>
        <div className="request-info">
          <p className="request-title">{request.requestName}</p>
          <p className="request-owner">{request.owner.login}</p>
          <p className="request-language">{request.language}</p>
          <p className="request-description">{request.requestDesc}</p>
        </div>
        <div className="request-cta">
          <Button href={request.html_url}>Review</Button>
        </div>
      </div>

      <style jsx>{`
        .request {
          display: flex;
          justify-content: space-between;
          width: calc(50% - 10px);
          padding: 24px;
          background: white;
          border-radius: 8px;
          border: 1px solid #aaaaaa;
        }

        .request-info {
          font-size: 16px;
          min-width: 50%;
          max-width: 50%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .request-title {
          font-weight: bold;
        }

        .request-language,
        .request-owner {
          margin-bottom: 12px;
        }

        @media (max-width: 960px) {
          .request {
            width: 100%;
            flex-direction: column;
          }

          .request-info,
          .request-cta {
            width: 100%;
            min-width: 100%;
            max-width: 100%;
          }

          .request-cta {
            justify-content: initial;
            align-items: initial;
            margin: 12px 0 0;
          }

          .request-cta .button {
            margin-right: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default ReviewRequest;
