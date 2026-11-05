const Navbar = ({ onLoginClick }) => {
  return (
    <header className="flex font-semibold tracking-tight sticky top-0 z-5 items-center  text-xl md:rounded-md mx-auto py-2 text-white bg-amber-500 w-full max-w-7xl justify-around">
      <a href="/" aria-label="SamzBuild home" className="text-2xl">
        SamzBuild
      </a>
      <nav className="md:flex font-normal gap-20 hidden">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="flex gap-2 md:gap-10">
        <button className="active:scale-95 cursor-pointer hidden md:block">
          SignUp
        </button>
        <button
          onClick={onLoginClick}
          className="active:scale-95 cursor-pointer bg-amber-950 px-6 py-2 rounded-md "
        >
          LogIn
        </button>
      </div>
    </header>
  );
};

export default Navbar;
