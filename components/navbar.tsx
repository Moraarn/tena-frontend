import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-600 flex items-center">
              <img src="/logo.png" alt="HouseHunt Logo" className="h-8 w-8 mr-2" />
              HouseHunt
            </Link>
            </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#listings" className="text-gray-700 hover:text-green-600">
              Listings
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600">
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
              Log In
            </Button>
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className="text-gray-700 hover:text-green-600 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white shadow-lg border border-gray-200 rounded-md">
                <DropdownMenuItem asChild>
                  <a href="#listings" className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Listings
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#about" className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                    About
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#contact" className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Contact
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/login" className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Log In
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/signup" className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Sign Up
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
