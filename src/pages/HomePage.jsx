export const HomePage = () => {
  return (
    <div className="mt-5 flex min-h-[80vh] items-center justify-center">
      <div className="flex w-[70vw] flex-col items-center justify-center gap-8 text-center">
        <h2 className="text-7xl font-bold">Understand Anything</h2>
        <h2 className="text-3xl text-gray-500">
          Your research and thinking partner, grounded in the information you
          trust, built with the latest Gemini models.
        </h2>

        <button className=" my-10 rounded-lg bg-black px-4 py-2 text-3xl text-white hover:cursor-pointer">
          Try AI Doc Assistant
        </button>

        <h2 className="text-4xl">Your AI-Powered Research Partner</h2>
      </div>
    </div>
  );
};
