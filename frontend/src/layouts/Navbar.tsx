import HamburgerIcon from "@/components/icons/Hamburger";

interface NavbarProps {
  onClick: () => void;
}

const Navbar = ({ onClick }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between md:hidden h-[64px] bg-white shadow-sm border-b-gray-200 border px-4">
      <div className="flex items-center gap-2">
        <img src="/images/logo.svg" alt="logo" />
        <h2 className="text-gray-900 [text-shadow:0_4px_4px_rgba(0,0,0,0.3)] text-lg">
          {" "}
          Untitled UI
        </h2>
      </div>

      <HamburgerIcon onClick={onClick} />
    </nav>
  );
};

export default Navbar;
