import "./App.css";
import { useState } from "react";
function App() {
  const [response, setResponse] = useState<null | "yes" | "no">(null);
  const sadGifs = [
    "https://media.giphy.com/media/CMBQRK9GuOF7ujjhop/giphy.gif?cid=790b7611zdozyj6rlx6smju1cr1kp880r61jswix5fcokk5j&ep=v1_stickers_search&rid=giphy.gif&ct=s",
    "https://media.giphy.com/media/axqDsPFiBaHTnY1YkH/giphy.gif?cid=790b7611zdozyj6rlx6smju1cr1kp880r61jswix5fcokk5j&ep=v1_stickers_search&rid=giphy.gif&ct=s",
    "https://media.giphy.com/media/sJIrrXEQkbYIQ5VkFn/giphy.gif?cid=790b7611zdozyj6rlx6smju1cr1kp880r61jswix5fcokk5j&ep=v1_stickers_search&rid=giphy.gif&ct=s",
  ];
  const happyGifs = [
    "https://media.giphy.com/media/BMDUAjhHGZYP5IXmto/giphy.gif?cid=790b7611sjcdt6try7qnpy9769mm0mw6j5q1cy3afzdvq9j4&ep=v1_stickers_search&rid=giphy.gif&ct=s",
    "https://media.giphy.com/media/v9puQhoHgD3LtGNujm/giphy.gif?cid=790b7611sjcdt6try7qnpy9769mm0mw6j5q1cy3afzdvq9j4&ep=v1_stickers_search&rid=giphy.gif&ct=s",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2pjZHQ2dHJ5N3FucHk5NzY5bW0wbXc2ajVxMWN5M2FmemR2cTlqNCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/8A45YaN90Ir5jx1mUj/giphy.gif",
  ];
  if (response === "no") {
    return (
      <div
        className="flex flex-col justify-center items-center min-h-screen p-4 md:p-8"
        style={{ backgroundColor: "#ffcfff" }}
      >
        <p className="text-3xl md:text-5xl font-cute text-grey-600 mb-4 md:mb-8 text-center">
          Oh... ok. =(
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {sadGifs.map((gif, index) => (
            <img
              key={index}
              src={gif}
              alt={`Sad Gif ${index + 1}`}
              className="w-48 h-48 md:w-72 md:h-72 max-w-full object-contain"
            />
          ))}
        </div>
      </div>
    );
  }
  if (response === "yes") {
    return (
      <div
        className="flex flex-col justify-center items-center min-h-screen p-4 md:p-8"
        style={{ backgroundColor: "#ffcfff" }}
      >
        <p className="text-3xl md:text-5xl font-cute text-pink-600 mb-4 md:mb-8 text-center">
          Yay! =)
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {happyGifs.map((gif, index) => (
            <img
              key={index}
              src={gif}
              alt={`Happy Gif ${index + 1}`}
              className="w-48 h-48 md:w-72 md:h-72 max-w-full object-contain"
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen p-4"
      style={{ backgroundColor: "#ffcfff" }}
    >
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZneHdlbjBmeHU3dDB5bmp0aTFmaW0xeGo2OW13bTltYXVhZXBjNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iyUhP5jgv6s6oqxk4S/giphy.gif"
        alt="Centered Gif"
        className="w-48 h-48 md:w-72 md:h-72 max-w-full object-contain"
      />
      <p className="mt-4 md:mt-6 text-3xl md:text-5xl font-cute text-pink-600 text-center px-4">
        Will you be my valentine?
      </p>
      <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 md:gap-8">
        <button
          onClick={() => setResponse("yes")}
          className="px-8 py-3 text-2xl md:text-3xl font-cute bg-pink-400 text-white rounded-full hover:bg-pink-500 transition-colors w-48 md:w-auto"
        >
          Yes
        </button>
        <button
          onClick={() => setResponse("no")}
          className="px-8 py-3 text-2xl md:text-3xl font-cute bg-gray-400 text-white rounded-full hover:bg-gray-500 transition-colors w-48 md:w-auto"
        >
          No
        </button>
      </div>
    </div>
  );
}
export default App;
