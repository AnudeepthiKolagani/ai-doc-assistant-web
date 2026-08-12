import { WorkSpaceCard } from "./WorkSpaceCard";

export const WorkSpaceGrid = ({ workspaces }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {workspaces.map((workspace) => (
        <WorkSpaceCard
          key={workspace.id}
          title={workspace.title}
          createdAt={workspace.createdAt}
          lastOpenedAt={workspace.lastOpenedAt}
        />
      ))}
    </div>
  );
};

