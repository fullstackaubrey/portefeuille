import Head from 'next/head';
import Link from 'next/link';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

const name = 'Aubrey';
const job = 'Intermediate Software Engineer';
const hobby = 'Ashtanga Yoga Practitioner';
const discovery = 'Web Development';
const year = '2014';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-slate-400">
      <Head>
        <title>Aubrey Dill | Portefeuille</title>
      </Head>

      <nav className="sticky top-0 w-screen h-content cursor-pointer">
        <ul className="w-full flex flex-row justify-evenly p-3 bg-red-400 text-white shadow-sm shadow-zinc-500">
          <Link className="self-center" href="/">
            Home
          </Link>
          <li className="self-center">About Me</li>
          <li className="self-center">Resume</li>
          <li className="self-center">Projects</li>
          <div className="w-1/5 p-1 shadow-inner shadow-zinc-500 flex flex-row justify-around bg-slate-100 rounded-sm text-sm text-slate-600 text-center">
            <li className="p-1 w-1/2 hover:shadow-inner hover:shadow-zinc-400 hover:rounded-sm duration-300 border-r border-slate-300 mr-1">
              Sign in
            </li>
            <li className="p-1 w-1/2 hover:shadow-inner hover:shadow-zinc-400 hover:rounded-sm duration-300 border-l border-slate-300 ml-1">
              Register
            </li>
          </div>
        </ul>
      </nav>
      <div className="flex">
        <main className="h-2/3 flex flex-row bg-slate-100 ml-6 mr-1 mb-6 mt-6 shadow-md shadow-zinc-600 cursor-pointer hover:shadow-zinc-700">
          <section className="mx-6 my-6 w-2/3 bg-slate-200 shadow-md shadow-zinc-400 rounded-sm hover:shadow-zinc-500">
            <header className="p-4 text-center text-lg text-white tracking-wider font-semibold bg-slate-400">
              Portefeuille d'Aubrey
            </header>
            <div className="m-8 text-md tracking-wider">
              <p className="px-1 pb-1">
                Well, hello there! My name is {name}. I'm an {job} and {hobby}.
              </p>
              <p className="p-1">
                I first discovered {discovery} in {year}. Read more about my
                experience{' '}
                <Link className="underline" href="/aboutme">
                  here
                </Link>
                !
              </p>
              <p className="p-1">
                I created this website using Reactjs, Nextjs, and Tailwindcss.
                It is responsive on desktop, mobile, and tablet viewports. You
                may also like to review the Git repository for this website
                here.
              </p>
              <p className="px-1 pt-1">Enjoy clicking around!</p>
            </div>
          </section>

          <section className="w-1/3 flex justify-center shadow-inner shadow-zinc-400 hover:shadow-zinc-500 bg-slate-200">
            <div className="m-6 w-56 h-56 self-center rounded-full shadow-sm shadow-zinc-600 bg-red-400 hover:scale-105 duration-500" />
          </section>
        </main>

        <div className=" bg-slate-200 w-2/3 h-96 overflow-y-scroll scroll-smooth mx-6 mt-6 shadow-md  shadow-zinc-500 text-zinc-800 rounded-sm hover:shadow-zinc-600 cursor-pointer">
          <section className="m-6">
            <div className=" bg-slate-100 p-6 shadow-inner shadow-zinc-500 rounded hover:bg-slate-500 hover:shadow-zinc-600 hover:text-slate-100 duration-600">
              <p className="p-1">
                But I must explain to you how all this mistaken idea of
                denouncing of a pleasure and praising pain was born and I will
                give you a complete account of the system, and expound the
                actual teachings of the great explorer of the truth, the
                master-builder of human happiness.
              </p>
              <p className="p-1">
                No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure, but because those who do not know how to pursue
                pleasure rationally encounter consequences that are extremely
                painful. Nor again is there anyone who loves or pursues or
                desires to obtain pain of itself, because it is pain, but
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure. To take a trivial example,
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it? But who has any right to find
                fault with a man who chooses to enjoy a pleasure that has no
                annoying consequences, or one who avoids a pain that produces no
                resultant pleasure? On the other hand, we denounce with
                righteous indignation and dislike men who are so beguiled and
                demoralized by the charms of pleasure of the moment, so blinded
                by desire, that they cannot foresee the pain and trouble that
                are bound to ensue; and equal blame belongs to those who fail in
                their duty through weakness of will, which is the same as saying
                through shrinking from toil and pain.
              </p>
              <p className="p-1">
                These cases are perfectly simple and easy to distinguish. In a
                free hour, when our power of choice is untrammeled and when
                nothing prevents our being able to do what we like best, every
                pleasure is to be welcomed and every pain avoided. But in
                certain circumstances and owing to the claims of duty or the
                obligations of business it will frequently occur that pleasures
                have to be repudiated and annoyances accepted. The wise man
                therefore always holds in these matters to this principle of
                selection: he rejects pleasures to secure other greater
                pleasures, or else he endures pains to avoid worse pains.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* <header className="bg-green-300">About Me</header>
        <section className="bg-green-200">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <header className="bg-purple-300">Resume</header>
        <section className="bg-purple-200">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <header className="bg-orange-300">Projects</header>
        <section className="bg-orange-200">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <header className="bg-yellow-300">Sign in</header>
        <section className="bg-yellow-200">Sign in comp</section>

        <header className="bg-red-300">Register</header>
        <section className="bg-red-200">Register comp</section> */}
    </div>
  );
}
