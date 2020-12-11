import { useEffect, useState } from "react";
import requireAuthentication from "../src/components/AuthenticatedComponent";
import Input from "../src/components/form/Input";
import ReviewRequest from "../src/components/ReviewRequest";
import Button from "../src/components/Button";
import { reviewRequests, state } from "../src/database/reviewRequests";

const PendingRequests = () => (
  <>
    {reviewRequests.map((request) => (
      <ReviewRequest request={request} key={request.id} />
    ))}
  </>
);

const Dashboard = ({ user }) => {
  const [userData, setUserData] = useState(state.userData);

  useEffect(() => {
    state.userData = userData;
  }, [userData]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>
          {userData
            ? `Welcome back ${user.name}`
            : `Hi ${user.name}! Welcome to Convoy!`}
        </h1>
        {userData && <Button>Find a Mentor</Button>}
      </div>

      {userData && (
        <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>
          Your current requests
        </h2>
      )}
      {userData && reviewRequests.length > 0 && <PendingRequests />}
      {userData && reviewRequests.length === 0 && (
        <p>You haven't made any request for review</p>
      )}

      {!userData && (
        <>
          <h2 style={{ marginTop: "40px" }}>
            We have a couple questions for you.
          </h2>
          <div className="onboarding-form">
            <div className="input">
              <Input label="First Name:" />
            </div>
            <div className="input">
              <Input label="Last Name:" />
            </div>
            <div className="input">
              <Input label="What's your age?" type="select">
                <option value="0-10">0 - 10</option>
                <option value="10-15">10 - 15</option>
                <option value="15-20">15 - 20</option>
                <option value="20-25">20 - 25</option>
                <option value="25-30">25 - 30</option>
                <option value="30-35">30 - 35</option>
                <option value="35-40">35 - 40</option>
                <option value="40-45">40 - 45</option>
                <option value="45-50">45 - 50</option>
                <option value="50-55">50 - 55</option>
                <option value="60-65">60 - 65</option>
              </Input>
            </div>
            <div className="input">
              <Input
                label="What's your years of experience in technology?"
                type="select"
              >
                <option value="0-1">0 - 2 </option>
                <option value="2-5">2 - 5 </option>
                <option value="5-10">5 - 10 </option>
                <option value="10+">10+</option>
              </Input>
            </div>
            <div className="input">
              <div style={{ marginBottom: "12px" }}>
                <label style={{ fontWeight: "bold", marginBottom: "6px" }}>
                  Are you Open to work?
                </label>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "20px" }}>
                  <Input label="Yes" type="radio" />
                </div>
                <Input label="No" type="radio" />
              </div>
            </div>
            <div className="input">
              <Input label="What is your preferred language?" type="select">
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
                <option value="chinese">Chinese</option>
                <option value="punjabi">Punjabi</option>
              </Input>
            </div>
            <div className="input">
              <Input label="Email" />
            </div>
            <div className="input">
              <Button onClick={() => setUserData(true)}>Submit</Button>
            </div>
          </div>
        </>
      )}
      <style jsx>{`
        .input {
          margin-bottom: 12px;
        }

        .onboarding-form {
          margin-top: "30px";
          width: "50%";
        }

        @media (max-width: 960px) {
          .onboarding-form {
            width: "100%";
          }
        }
      `}</style>
    </div>
  );
};

export default requireAuthentication(Dashboard);
