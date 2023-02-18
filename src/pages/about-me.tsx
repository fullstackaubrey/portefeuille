export default function About() {
  return (
    <div className="flex h-screen w-screen bg-slate-600">
      <div className="h-full w-1/3 bg-red-300">
        <div className="relative flex flex-row my-4 ml-4 mr-2 h-full bg-red-100 shadow-md shadow-zinc-500 hover:shadow-lg hover:shadow-zinc-600">
          <header className="p-2 absolute w-full bg-red-100 border-y border-zinc-500 text-center text-zinc-700 text-md font-semibold tracking-wider">
            Skills
          </header>
          <section className="w-1/2 h-full flex flex-col justify-center bg-slate-400 shadow-inner shadow-zinc-600 hover:shadow-zinc-700 cursor-pointer">
            <p className="self-center text-slate-800">
              <ul>
                <li className="py-2">Git</li>
                <li className="py-2">APIs</li>
                <li className="py-2">JSON</li>
                <li className="py-2">Data Fetching</li>
                <li className="py-2">Hosting & Deployment</li>
                <li className="py-2">Responsive Design</li>
                <li className="py-2">Agile</li>
              </ul>
            </p>
          </section>
          <section className="w-1/2 h-full flex flex-col justify-center bg-slate-600 shadow-inner shadow-zinc-600 hover:shadow-zinc-700 cursor-pointer">
            <p className="m-2 self-center text-slate-200">
              <ul>
                <li className="py-2">React</li>
                <li className="py-2">Nextjs</li>
                <li className="py-2">Tailwindcss</li>
                <li className="py-2">Postgres</li>
                <li className="py-2">Node</li>
                <li className="py-2">AWS</li>
              </ul>
            </p>
          </section>
        </div>
      </div>

      <div className="h-full w-1/3 bg-red-300">
        <div className="flex flex-col my-4 ml-4 mr-2 h-full bg-red-100 shadow-md shadow-zinc-500 hover:shadow-lg hover:shadow-zinc-600">
          <header className="p-2 self-center text-zinc-700 text-md font-semibold tracking-wider">
            Resume
          </header>
          <section className="flex self-center w-full h-full bg-slate-400 shadow-inner shadow-zinc-600 hover:shadow-zinc-700 cursor-pointer"></section>
        </div>
      </div>

      <div className="h-full w-1/3 bg-red-300">
        <div className="flex flex-col my-4 ml-4 mr-2 h-full bg-red-100 shadow-md shadow-zinc-500 hover:shadow-lg hover:shadow-zinc-600">
          <header className="p-2 self-center text-zinc-700 text-md font-semibold tracking-wider">
            Personal
          </header>
          <section className="flex self-center w-full h-full bg-slate-400 shadow-inner shadow-zinc-600 hover:shadow-zinc-700 cursor-pointer"></section>
        </div>
      </div>
    </div>
  );
}
