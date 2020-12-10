import { useRouter } from "next/router";

export default function Projects() {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.id} Projects</h1>
      <p>This is the user projects section</p>
    </div>
  );
}
