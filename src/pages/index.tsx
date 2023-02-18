import Head from 'next/head';
import Link from 'next/link';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

const name = 'Aubrey';
const job = 'Intermediate Software Engineer';
const hobby = 'Ashtanga Yoga Practitioner';
const discovery = 'Web Development';
const year = '2015';

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-slate-600">
      <Head>
        <title>Aubrey Dill | Portefeuille</title>
      </Head>

      <div className="h-full w-2/3 bg-red-300">
        <div className="flex justify-center my-4 ml-4 mr-2 h-full bg-red-100">
          <section className="flex self-center w-full mx-6 h-5/6 bg-slate-400 shadow-sm shadow-zinc-400 cursor-pointer">
            <div className="w-3/5 h-full hover:shadow-md hover:shadow-zinc-600">
              <header className="p-3 bg-red-400 text-zinc-100 text-xl text-center font-semibold tracking-wider border-y border-zinc-500 shadow shadow-zinc-500">
                Portefeuille d'Aubrey
              </header>
              <section className="m-8 text-slate-800 text-lg">
                <p className="p-2">Hi there! My name is {name}.</p>
                <p className="p-2">
                  I'm a {job} and {hobby}.
                </p>
                <p className="p-2">
                  Lorem ipsum dolor sit amet. Non Quis praesentium est dicta
                  quam qui voluptatem veritatis hic dolore fugiat id dignissimos
                  velit. Est ducimus facilis nam cupiditate nihil qui beatae
                  asperiores hic repudiandae impedit. Eos rerum temporibus ut
                  illum galisum aut voluptas beatae eum praesentium aspernatur
                  et dolorum alias cum voluptatem ipsa et incidunt quam.
                </p>
              </section>
            </div>
            <div className="flex justify-center w-2/5 bg-red-200 shadow-inner shadow-zinc-400 hover:shadow-zinc-600 rounded-sm">
              <div className="self-center w-72 h-72 bg-red-500 shadow-md shadow-zinc-400 hover:shadow-zinc-600 rounded-full" />
            </div>
          </section>
        </div>
      </div>
      <div className="h-full w-1/3 bg-red-300">
        <div className="flex justify-center my-4 ml-2 mr-4 h-full bg-red-100">
          <section className="self-center overflow-y-scroll scroll-smooth w-full mx-6 h-5/6 bg-red-300 shadow-md shadow-zinc-600 hover:shadow-lg hover:shadow-zinc-600 rounded-sm">
            <div className="m-8 bg-red-200 shadow-inner shadow-zinc-600 rounded">
              <section className="m-4 text-slate-800 text-sm">
                <p className="p-2">
                  Lorem ipsum dolor sit amet. Vel necessitatibus omnis 33 omnis
                  optio sed veniam excepturi sit dolor architecto sit voluptatem
                  repudiandae ut voluptatum maiores qui velit exercitationem! Ea
                  nemo numquam non repellendus mollitia ut ducimus sint qui
                  quaerat omnis. Vel maiores consectetur vel internos blanditiis
                  qui reprehenderit sequi qui magnam officia?
                </p>
                <p className="p-2">
                  Qui repudiandae harum qui distinctio amet non tempore nobis.
                  Rem odio ducimus non natus nostrum id omnis aliquam eos
                  praesentium veniam sit commodi voluptas sit accusamus porro
                  aut modi commodi. Est cumque consectetur vel dolorum aperiam
                  qui adipisci omnis est rerum sunt est quae aliquid nam
                  mollitia porro ut reprehenderit repellat! Et modi quaerat ut
                  magnam dolorem quo maxime laudantium.
                </p>
                <p className="p-2">
                  Sed excepturi Quis rem velit omnis et obcaecati esse in
                  ducimus blanditiis est inventore praesentium. Qui laborum
                  alias non earum deserunt id consequatur officia aut ipsum esse
                  et totam deserunt. Ea corporis dolore est minus dolores et
                  consequatur corporis et ipsa earum ea quas modi! Id voluptate
                  beatae est suscipit blanditiis ut assumenda explicabo.
                </p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>

    /* <div className="flex ml-8 mr-8 mt-8 mb-8">
        <main className="flex flex-row  bg-slate-100 shadow-md shadow-zinc-600  hover:shadow-zinc-700 cursor-pointer">
          <section className="mx-6 my-6 w-2/3 bg-slate-200 shadow-md shadow-zinc-400 hover:shadow-zinc-500 rounded-sm">
            <header className="p-4  bg-slate-400  text-white text-center text-lg tracking-wider font-semibold">
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

          <section className="w-1/3 flex justify-center  bg-slate-200 shadow-inner shadow-zinc-400 hover:shadow-zinc-500">
            <div className="m-6 w-56 h-56 self-center  bg-red-400 shadow-sm shadow-zinc-600 hover:scale-105 duration-500 rounded-full" />
          </section>
        </main>

        {/* <div className="overflow-y-scroll scroll-smooth bg-slate-200 text-zinc-800 shadow-md  shadow-zinc-500 hover:shadow-zinc-600 rounded-sm cursor-pointer">
          <section className="m-6">
            <div className=" bg-slate-100 p-6 shadow-inner shadow-zinc-500 hover:bg-slate-500 hover:shadow-zinc-600 hover:text-slate-100 duration-600 rounded">
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
            </div> */
  );
}
