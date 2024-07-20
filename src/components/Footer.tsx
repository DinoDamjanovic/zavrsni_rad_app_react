import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-100 text-gray-500 py-8 px-6 flex justify-between items-center">
      <p>© 2023 Dino Damjanović</p>

      <div className="flex space-x-10 hover:text-blue-500">
        <Link to={`/about`}>
          About
        </Link>
      </div>
    </div>
  );
};
