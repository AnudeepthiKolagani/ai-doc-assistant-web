export const WorkSpaceCard = ({ title, createdAt, lastOpenedAt }) => {
  return (
    <button
      type="button"
      className="group aspect-square w-full rounded-xl border border-gray-200 bg-white p-5 text-left transition hover:border-black hover:shadow-sm"
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="line-clamp-2 text-lg font-medium text-black">
            {title}
          </h3>
        </div>

        <div className="space-y-1 text-xs text-gray-500">
          <p>Created {createdAt}</p>

          <p>Last opened {lastOpenedAt}</p>
        </div>
      </div>
    </button>
  );
};

