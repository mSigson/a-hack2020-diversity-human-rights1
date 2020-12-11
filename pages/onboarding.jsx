import requireAuthentication from "../src/components/AuthenticatedComponent";

const Onboarding = () => {
  return (
    <div>
      <h1>Looks like you're new</h1>
    </div>
  );
};

export default requireAuthentication(Onboarding);
