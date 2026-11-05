import { useEffect } from "react";

const Popup = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex z-10 items-center justify-center w-full mx-auto bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="flex relative flex-col gap-10 p-8 md:p-12 items-start w-full max-w-4xl bg-amber-950 text-white justify-center rounded-md"
      >
        <button
          onClick={onClose}
          className="bg-red-500 absolute right-10 top-8 px-4 py-2 rounded-md text-white font-semibold"
        >
          Close
        </button>
        <div>
          <h2 className="text-4xl tracking-tight font-bold">LogIn</h2>
          <p className="mt-4 text-sm tracking-wide text-gray-200">
            Enter Your Email & Password to <br className="md:hidden" /> Login To
            Your Account.
          </p>
        </div>
        <form className="flex flex-col w-full max-w-xl">
          <label htmlFor="loginEmail">
            <input
              type="email"
              name="email"
              id="loginEmail"
              className="border-b tracking-wide border-white w-full px-4 py-2"
              placeholder="Enter Your Email Address"
            />
          </label>

          <label htmlFor="loginPassword">
            <input
              type="password"
              name="password"
              id="loginPassword"
              className="border-b tracking-wide border-white w-full px-4 py-2 mt-4"
              placeholder="Enter Your Password"
            />
          </label>
          <button type="button" className="text-right mt-4">
            Forgot Password?
          </button>
          <button
            type="submit"
            className="text-left mt-4 bg-amber-300 text-black/80 font-semibold tracking-wide rounded-md w-fit px-8 py-2"
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
