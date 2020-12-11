import React from "react";

const ReviewRequests = () => {
  return (
    <div>
      <h1>Requests for Review Here</h1>
    </div>
  );
};

export default requireAuthentication(ReviewRequests);
