import React from "react";
import { reviewRequests } from "../src/database/reviewRequests";
import requireAuthentication from "../src/components/AuthenticatedComponent";
import ReviewRequest from "../src/components/ReviewRequest";

const ReviewRequests = () => {
  return (
    <div>
      <h1>Requests Seeking Review</h1>
      <div className="requests-container">
        {reviewRequests.map((request) => (
          <ReviewRequest request={request} key={request.id} />
        ))}
      </div>
      <style jsx>{`
        .requests-container {
          margin-top: 30px;
        }

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
    </div>
  );
};

export default requireAuthentication(ReviewRequests);
