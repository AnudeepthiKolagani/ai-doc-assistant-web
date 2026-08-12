export const WorkSpaceNavigation = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onTabChange("all")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            activeTab === "all"
              ? "bg-black text-white"
              : "text-black hover:bg-gray-100"
          }`}
        >
          All
        </button>

        <button
          type="button"
          onClick={() => onTabChange("recent")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            activeTab === "recent"
              ? "bg-black text-white"
              : "text-black hover:bg-gray-100"
          }`}
        >
          Recent
        </button>
      </div>

      <div>
        <button className="border border-black hover:bg-black hover:text-white  px-4 py-1 rounded-lg cursor-pointer">
          + Add WorkSpace
        </button>
      </div>
    </div>
  );
};

