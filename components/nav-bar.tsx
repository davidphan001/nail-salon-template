import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-gray-100 p-2 bg-gradient-to-r from-gray-600 to-gray-700 bg-opacity-95 backdrop-filter backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Nail Salon
          </Link>
        </h1>
        <div className="hidden md:flex space-x-3">
          <Link
            href="/"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/e-gift"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            E-Gift
          </Link>
          <Link
            href="/host-a-party"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Host a Party
          </Link>
          <Link
            href="/happy-hour"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Happy Hour
          </Link>
          <Link
            href="/promotions"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Promotions
          </Link>
          <Link
            href="/contact"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            href="/book"
            className="text-sm bg-gray-700 hover:bg-gray-600 text-white font-medium py-1 px-3 rounded transition-colors duration-300"
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
