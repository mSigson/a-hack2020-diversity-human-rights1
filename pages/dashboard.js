import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>This is the dashboard</h1>
      <Link href={`/user/mSigson/projects`}>My Projects</Link>
      <Link href={`/onboarding`}>Sign Up</Link>
    </div>
  );
}
