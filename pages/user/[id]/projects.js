import { useEffect, useState } from "react";
import requireAuthentication from "../../../src/components/AuthenticatedComponent";
import Repository from "../../../src/components/Repository";
import SlideInDrawer from "../../../src/components/SlideInDrawer";
import Input from "../../../src/components/form/Input";
import Button from "../../../src/components/Button";
import { reviewRequests } from "../../../src/database/reviewRequests";

import dayjs from "dayjs";

const onSubmit = (selectedRepo, formValues) => {
  reviewRequests.push({ ...selectedRepo, ...formValues });
};

const Projects = ({ user }) => {
  const [repositories, setRepositories] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState();
  const [formValues, setFormValues] = useState({});
  const [slideInDrawerIsOpen, setSlideInDrawerIsOpen] = useState(false);

  useEffect(() => {
    async function getRepositories() {
      const res = await fetch(
        `https://api.github.com/users/${user.nickname}/repos`
      );
      const data = await res.json();
      setRepositories(data);
    }
    getRepositories();
  }, []);

  return (
    <div>
      {repositories ? (
        <>
          <h1>Your Projects</h1>
          <div className="projects-list">
            {repositories.map((repo) => (
              <Repository
                key={repo.id}
                repo={repo}
                seekReview={() => {
                  setSelectedRepo(repo);
                  setSlideInDrawerIsOpen(true);
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <h2>You don't have any public repositories you've created</h2>
      )}
      {slideInDrawerIsOpen && (
        <SlideInDrawer close={() => setSlideInDrawerIsOpen(false)}>
          <div className="drawer-content">
            <h2>Create a Request for Review</h2>
            <div className="repo-details">
              <p>
                <span>Selected Code Base:</span> {selectedRepo.name}
              </p>
              <p>
                <span>Last Updated:</span>{" "}
                {dayjs(selectedRepo.pushed_at).format("YYYY-MM-DD HH:mm:ss")}
              </p>
              <p>
                <span>Language:</span> {selectedRepo.language}
              </p>
            </div>
            <Input
              label="Request Name"
              value={formValues.requestName || ""}
              onChange={(e) =>
                setFormValues({ ...formValues, requestName: e.target.value })
              }
            />
            <Input
              label="Request Description"
              type="textarea"
              value={formValues.requestDesc || ""}
              onChange={(e) =>
                setFormValues({ ...formValues, requestDesc: e.target.value })
              }
            />
            <Button
              onClick={() => {
                onSubmit(selectedRepo, formValues);
                setSlideInDrawerIsOpen(false);
              }}
            >
              Submit
            </Button>
          </div>
        </SlideInDrawer>
      )}
      <style jsx global>{`
        h1 {
          margin-bottom: 24px;
        }

        h2 {
          margin: 20px 0;
        }

        .drawer-content {
          padding-left: 40px;
        }

        .repo-details p {
          margin-bottom: 12px;
        }

        .repo-details span {
          font-weight: bold;
          margin-right: 12px;
        }

        .projects-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .projects-list .repo {
          margin-bottom: 12px;
        }

        input,
        textarea {
          margin-bottom: 12px;
        }

        input[type="submit"] {
          outline: none;
          border-radius: 3px;
          font-size: 16px;
          border: none;
          background: #0f6dab;
          padding: 8px 12px;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default requireAuthentication(Projects);
