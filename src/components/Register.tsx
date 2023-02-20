import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

export default function Register({ open, children, onClose }) {
  const [input, setInput] = useState('');
  if (!open) return null;

  return (
    <div onMouseLeave={onClose}>
      <div className="z-10 fixed flex justify-center left-1/4 h-5/6 w-1/2 bg-zinc-300 shadow-lg shadow-zinc-800 opacity-95 cursor-pointer">
        <div className="w-5/6 h-5/6 self-center bg-zinc-100 shadow-inner  shadow-zinc-600 hover:shadow-zinc-800">
          {children}
          <Tilt>
            <header className="text-zinc-800 text-center font-semibold p-3 text-2xl bg-red-400 border border-y-zinc-600 shadow-md shadow-zinc-600">
              Register Account
            </header>
          </Tilt>
          <div className="w-full flex flex-col items-center text-base">
            <header className="mt-4 mx-8 p-2 text-center">
              Register an account to interact with the user dashboard. This is
              an extension of my portfolio. Enjoy checking it out!
            </header>
            <form className="w-2/3">
              <label className="cursor-pointer self-start">
                <h1 className="py-2">Email</h1>
              </label>
              <input
                className="w-full p-1 shadow-sm shadow-zinc-600"
                type="text"
                placeholder="Enter Email"
                required
                onChange={(e) => setInput(e.target.value)}
              />
              <label className="cursor-pointer py-2 self-start">
                <h1 className="py-2">Password</h1>
              </label>
              <input
                className="w-full p-1 shadow-sm shadow-zinc-600"
                type="text"
                placeholder="Enter Password"
                required
                onChange={(e) => setInput(e.target.value)}
              />
              <label className="cursor-pointer py-2 self-start">
                <h1 className="py-2">Repeat Password</h1>
              </label>
              <input
                className="w-full p-1 shadow-sm shadow-zinc-600"
                type="text"
                placeholder="Repeat Password"
                required
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
