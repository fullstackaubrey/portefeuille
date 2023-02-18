import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [input, setInput] = useState('');

  return (
    <nav className="w-screen cursor-pointer">
      <ul className="w-full flex flex-row justify-evenly p-3 bg-red-400 text-white shadow-sm shadow-zinc-600 font-semibold">
        <Link href="/" className="self-center">
          Home
        </Link>
        <Link href="/about-me" className="self-center">
          About Me
        </Link>
        <Link href="/resume" className="self-center">
          Resume
        </Link>
        <Link href="/projects" className="self-center">
          Projects
        </Link>
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
  );
}
