import DesktopNavbar from "./desktopNavbar/DesktopNavbar";
import MovilNavbar from "./movilNavbar/MovilNavbar";

function Navbar() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      <div className="block md:hidden">
        <MovilNavbar />
      </div>
    </>
  );
}

export default Navbar;
