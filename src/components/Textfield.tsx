import { useState } from 'react';

export default function Textfield() {
  const [editMode, setEditMode] = useState(false);
  const [buttonMode, setButtonMode] = useState('edit');

  const modeHandler = () => {
    if (editMode === false) {
      setEditMode(true);
      setButtonMode('save');
    }
    if (editMode === true) {
      setEditMode(false);
      setButtonMode('edit');
    }
  };

  return (
    <>
      <div className="h-full w-1/3 bg-red-300">
        <div className="flex justify-center my-4 ml-2 mr-4 h-full bg-red-100 shadow-md shadow-zinc-600">
          <section className="relative self-center overflow-y-scroll scroll-smooth w-full mx-6 h-5/6 bg-red-300 shadow-md shadow-zinc-600 hover:shadow-lg hover:shadow-zinc-600 rounded-sm">
            <button
              onClick={modeHandler}
              className="absolute left-1/3 w-1/3  opacity-75 p-1 rounded-sm bg-red-100 shadow-inner shadow-zinc-600 hover:shadow-zinc-800 hover:bg-red-500 text-slate-800 font-semibold hover:text-slate-100 cursor-pointer"
            >
              {buttonMode}
            </button>
            <div className="m-8 bg-red-200 shadow-inner shadow-zinc-600 rounded">
              <section
                contentEditable={editMode}
                className="flex flex-col justify-stretch m-4 text-slate-800 text-sm"
              >
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
    </>
  );
}
