export const WorkSpaceHeader = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="flex h-16 items-center justify-between px-6">
        <h1 className="text-lg font-semibold">AI Document Assistant</h1>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-medium text-white"
        >
          A
        </button>
      </div>
    </header>
  );
};


