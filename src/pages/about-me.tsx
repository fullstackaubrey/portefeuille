export default function About() {
  return (
    <div className="flex h-screen w-screen bg-slate-600">
      <div className="h-full w-1/3 bg-red-300">
        <div className="relative flex flex-row my-4 ml-4 mr-2 h-full bg-red-100 shadow-md shadow-zinc-500 hover:shadow-lg hover:shadow-zinc-600">
          <header className="p-2 absolute w-full bg-red-100 border-y border-zinc-500 text-center text-zinc-700 text-md font-semibold tracking-wider">
            Skills
          </header>
          <section className="w-1/2 h-full flex flex-col justify-center bg-slate-400 shadow-inner shadow-zinc-600 hover:shadow-zinc-700 cursor-pointer">
            <ul className="self-center text-slate-800">
              <li className="py-2">useState, useEffect</li>
              <li className="py-2">useReducer, Redux</li>
              <li className="py-2">API Calls</li>
              <li className="py-2">JSON & Data Fetching</li>
              <li className="py-2">Hosting & Deployment</li>
              <li className="py-2">Responsive Design</li>
              <li className="py-2">Agile</li>
            </ul>
          </section>
          <section className="w-1/2 h-full flex flex-col justify-center bg-slate-600 shadow-inner shadow-zinc-600 hover:shadow-zinc-700 cursor-pointer">
            <ul className="list-disc self-center text-slate-200">
              <li className="py-2">React</li>
              <li className="py-2">Nextjs</li>
              <li className="py-2">Tailwindcss</li>
              <li className="py-2">Postgres</li>
              <li className="py-2">Node</li>
              <li className="py-2">AWS</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="h-full w-1/3 bg-red-300">
        <div className="flex flex-col my-4 ml-4 mr-2 h-full bg-red-100 shadow-md shadow-zinc-500 hover:shadow-lg hover:shadow-zinc-600">
          <header className="p-2 self-center text-zinc-700 text-md font-semibold tracking-wider">
            About Me
          </header>
          <div className="flex justify-center w-full h-full bg-slate-400 shadow-inner shadow-zinc-600 hover:shadow-zinc-700 cursor-pointer">
            <section className="self-center overflow-y-scroll scroll-smooth m-6 h-5/6 w-full bg-red-200 shadow-inner shadow-zinc-600 hover:shadow-zinc-800 hover:bg-orange-200">
              <div className="h-full m-2 text-zinc-800 text-sm tracking-wide">
                <p className="p-2">
                  Hello, I'm Aubrey! In 2014, I discovered web dev. I remember
                  learning with Codecademy back in its freemium days, and having
                  fun making HTML & CSS layouts for my favorite online forums.
                </p>
                <p className="p-2">
                  I never imagined it would become my career, but here I am, a
                  decade later! I'm a self-taught developer, specializing in
                  Frontend development. I have played around, briefly, with some
                  Backend dev tools.
                </p>
                <p className="p-2">
                  Currently, I'm working for a local startup, Swaltech. We are
                  building a web app with a user dashboard. I am working
                  diligently with React and Nextjs, as well as styling the app.
                  As development progresses, I will be learning more Backend
                  technologies on-the-job, such as AWS.
                </p>
                <p className="p-2">
                  I am looking for a Junior or Intermediate role that will grow
                  and challenge me. As a relatively new developer, I am
                  constantly learning new things! I aspire to work with a team
                  of developers who communicate well remotely, motivate each
                  other, and share with me their development wisdom.
                </p>
              </div>
            </section>
          </div>
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
