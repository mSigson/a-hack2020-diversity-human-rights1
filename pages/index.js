import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Welcome to ...</h1>
      <Link href={`/dashboard`}>Login</Link>
      <Link href={`/onboarding`}>Sign Up</Link>
    </div>
  );
}
