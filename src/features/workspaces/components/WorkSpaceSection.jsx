import {WorkSpaceGrid} from "./WorkSpaceGrid";

export const WorkSpaceSection = ({ title, workspaces }) => {
  return (
    <section>
      <h2 className="mb-5 text-xl font-semibold text-black">{title}</h2>

      <WorkSpaceGrid workspaces={workspaces} />
    </section>
  );
};

