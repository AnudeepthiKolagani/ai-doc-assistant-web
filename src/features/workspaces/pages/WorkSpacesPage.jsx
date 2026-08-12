import { useState } from "react";

import { WorkSpaceHeader } from "../components/WorkSpaceHeader";
import { WorkSpaceNavigation } from "../components/WorkSpaceNavigation";
import { WorkSpaceSection } from "../components/WorkSpaceSection";

import { workspaces } from "../data/workSpacesData";

export const WorkSpacesPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const recentWorkspaces = [...workspaces]
    .sort((a, b) => new Date(b.lastOpenedAt) - new Date(a.lastOpenedAt))
    .slice(0, 4);

  const displayedWorkspaces =
    activeTab === "recent" ? recentWorkspaces : workspaces;

  return (
    <div className="min-h-screen bg-white text-black px-8 py-4">
      <WorkSpaceHeader />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <WorkSpaceNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-10">
          <WorkSpaceSection
            title={
              activeTab === "recent" ? "Recent Workspaces" : "All Workspaces"
            }
            workspaces={displayedWorkspaces}
          />
        </div>
      </main>
    </div>
  );
};
