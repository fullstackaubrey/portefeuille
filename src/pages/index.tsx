import Textfield from '@/components/Textfield.tsx';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

const name = 'Aubrey';
const job = 'Software Engineer';
const hobby = 'Ashtanga Yoga Practitioner';

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-slate-600">
      <div className="h-full w-2/3 bg-red-300">
        <div className="flex justify-center my-4 ml-4 mr-2 h-full bg-red-100 shadow-md shadow-zinc-600">
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

      <Textfield />
    </div>
  );
}
