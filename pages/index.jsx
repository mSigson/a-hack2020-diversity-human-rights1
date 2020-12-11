import Layout from "../src/components/Layout";
import Button from "../src/components/Button";

export default function Index() {
  return (
    <Layout>
      <div className="welcome">
        <h1>Welcome to Convoy</h1>
        <Button href={`/api/login`}>Let's go!</Button>
      </div>
      <style jsx global>{`
        h1 {
          margin-bottom: 30px;
        }
        .welcome {
          width: 50%;
          margin: 30px auto;
        }
      `}</style>
    </Layout>
  );
}
