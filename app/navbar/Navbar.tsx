import Link from "next/link";

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex w-[306px] items-center justify-center gap-1 rounded-full bg-[#07070a]/90 p-1  text-[#e4ded7] backdrop-blur-md sm:w-[383.3px] md:p-2 lg:w-[397.3px]">
      <Link href="#home" onClick={handleScroll}>
        <h4 className="rounded py-2 px-2 text-xs sm:px-4 sm:text-sm md:py-1 md:px-4">
          Home
        </h4>
      </Link>
      <Link href="#work" onClick={handleScroll}>
        <h4 className="rounded py-2 px-2 text-xs sm:px-4 sm:text-sm md:py-1 md:px-4">
          Work
        </h4>
      </Link>
      <Link href="#about" onClick={handleScroll}>
        <h4 className="rounded py-2 px-2 text-xs sm:px-4 sm:text-sm md:py-1 md:px-4">
          About
        </h4>
      </Link>
      <Link href="#contact" onClick={handleScroll}>
        <h4 className="rounded py-2 px-2 text-xs sm:px-4 sm:text-sm md:py-1 md:px-4">
          Contact
        </h4>
      </Link>
    </nav>
  );
};

export default Navbar;
