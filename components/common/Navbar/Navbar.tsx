// components/Header.tsx
import { leftMenus, rightMenus } from './menuLinks';
import NavbarLinks from './NavbarLink';
import Logo from './Logo';


const Navbar = () => {
    return (
    <header className="shadow-md">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Each section has one responsibility */}
        <NavbarLinks links={leftMenus} />
        <Logo />
        <NavbarLinks links={rightMenus} />
      </nav>
    </header>
  );
}


export default Navbar;