import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';
import { navIcons, navLinks } from '@/static/static';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cartList = useSelector((state) => state.cart.cartList);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Navbar */}
      <nav className={`bg-background p-6 top-0 text-foreground shadow-md sticky z-20`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Menu Icon (visible on mobile) */}
          <button onClick={toggleSidebar} className="lg:hidden hover:text-primary">
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl flex items-center hover:text-primary">
            <span className="logo">Multimart</span>
          </Link>

          {/* Navigation Links (hidden on mobile) */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.to} className="hover:text-primary  text-xl">
                {link.text}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {navIcons.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                aria-label={item.ariaLabel}
                className={`hover:text-primary ${item.icon === Search || item.icon === ShoppingCart ? 'block' : 'hidden lg:block'}`}
              >
                <item.icon className="h-6 w-6" />
              </Link>
            ))}
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Sidebar (Opening from Top) */}
      <div className={`fixed inset-x-0 top-0 transform ${isSidebarOpen ? "translate-y-0" : "-translate-y-full"} bg-background shadow-lg transition-transform duration-300 ease-in-out lg:hidden z-30`}>
        <div className="p-6 text-foreground">
          <button onClick={toggleSidebar} className="absolute top-4 right-4 hover:text-primary w-10 h-10 flex items-center justify-center border rounded-lg">
            <X className="h-6 w-6" />
          </button>
          <div className="mt-16 *:py-4">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.to} className="block text-center hover:text-primary pl-4 first:border-t-2 border-b-2" onClick={toggleSidebar}>
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-20 lg:hidden" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Navbar;
