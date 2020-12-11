import requireAuthentication from "../src/components/AuthenticatedComponent";

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome back {user.name},</h1>
    </div>
  );
};

export default requireAuthentication(Dashboard);
