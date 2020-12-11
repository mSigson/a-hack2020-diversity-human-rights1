import { useEffect, useState } from "react";
import requireAuthentication from "../../../src/components/AuthenticatedComponent";
import Repository from "../../../src/components/Repository";
import SlideInDrawer from "../../../src/components/SlideInDrawer";

const Projects = ({ user }) => {
  const [repositories, setRepositories] = useState();
  const [slideInDrawerIsOpen, setSlideInDrawerIsOpen] = useState(false);

  useEffect(() => {
    async function getRepositories() {
      const res = await fetch(
        `https://api.github.com/users/${user.name}/repos`
      );
      const data = await res.json();
      setRepositories(data);
    }
    getRepositories();
  }, []);

  return (
    <div>
      {repositories && (
        <>
          <h1>Your Projects</h1>
          <div className="projects-list">
            {repositories.map((repo) => (
              <Repository
                key={repo.id}
                repo={repo}
                seekReview={setSlideInDrawerIsOpen}
              />
            ))}
          </div>
        </>
      )}
      {slideInDrawerIsOpen && (
        <SlideInDrawer close={() => setSlideInDrawerIsOpen(false)}>
          I want help
        </SlideInDrawer>
      )}
      <style jsx global>{`
        h1 {
          margin-bottom: 24px;
        }
        .projects-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .projects-list .repo {
          margin-bottom: 12px;
        }
      `}</style>
    </div>
  );
};

export default requireAuthentication(Projects);
