import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold">LegalEase</h2>
          <p className="mt-3 text-sm text-gray-300">
            Find trusted lawyers easily and securely.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">Contact</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">Privacy Policy</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4 text-gray-300">

            <a href="#" className="hover:text-yellow-400">Facebook</a>
            <a href="#" className="hover:text-yellow-400">Twitter</a>
            <a href="#" className="hover:text-yellow-400">LinkedIn</a>

          </div>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>

          <p className="text-gray-300 text-sm mb-2">
            Subscribe for latest lawyer updates
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 text-black rounded-l"
            />

            <button className="bg-yellow-400 px-4 text-black rounded-r">
              Join
            </button>
          </div>
        </div>

      </div>

      
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} LegalEase. All rights reserved.
      </div>

    </footer>
  );
}