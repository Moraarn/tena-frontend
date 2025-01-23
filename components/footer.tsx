import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">HouseHunt</h3>
          <p className="text-sm">
            Find your dream home effortlessly with HouseHunt. Thousands of
            listings, all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: support@househunt.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Location: 123 Dream St, Neighborhood, City</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-lg font-bold mb-4">Subscribe</h4>
          <p className="text-sm mb-4">
            Sign up to receive the latest updates and offers.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-green-600 outline-none"
            />
            <Button className="bg-green-600 hover:bg-green-700 text-white px-4">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} HouseHunt. All rights reserved.</p>
      </div>
    </footer>
  );
}
