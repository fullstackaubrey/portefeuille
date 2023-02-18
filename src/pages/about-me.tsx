export default function About() {
  return (
    <div className="flex h-screen w-screen bg-slate-600">
      <div className="h-full w-1/3 bg-red-300">
        <div className="flex flex-col justify-center my-4 ml-4 mr-2 h-full bg-red-100 shadow-md shadow-zinc-500 hover:shadow-lg hover:shadow-zinc-600">
          <header className="p-2 self-center text-zinc-700 text-md font-semibold tracking-wider">
            Skills
          </header>
          <section className="flex self-center w-full h-full bg-slate-400 shadow-inner shadow-zinc-600 hover:shadow-zinc-700 cursor-pointer"></section>
        </div>
      </div>

      <div className="h-full w-1/3 bg-red-300">
        <div className="flex flex-col justify-center my-4 ml-2 mr-2 h-full bg-red-100 shadow-md shadow-zinc-500 hover:shadow-lg hover:shadow-zinc-600">
          <header className="p-2 self-center text-zinc-700 text-md font-semibold tracking-wider">
            Resume
          </header>
          <section className="flex self-center w-full h-full bg-slate-400 shadow-inner shadow-zinc-600 hover:shadow-zinc-700 cursor-pointer"></section>
        </div>
      </div>

      <div className="h-full w-1/3 bg-red-300">
        <div className="flex flex-col justify-center my-4 ml-2 mr-4 h-full bg-red-100 shadow-zinc-500 hover:shadow-lg hover:shadow-zinc-600">
          <header className="p-2 self-center text-zinc-700 text-md font-semibold tracking-wider">
            Personal
          </header>
          <section className="flex self-center w-full h-full bg-slate-400 shadow-inner shadow-zinc-600 hover:shadow-zinc-700 cursor-pointer"></section>
        </div>
      </div>
    </div>
  );
}
