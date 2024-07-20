import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

export default function AboutMenu() {
  return (
    <div className="bg-gray-100 py-4 px-6 flex justify-between items-center mb-4">
      <div className="flex justify-between w-full">
        <Link to={`/home`}>
          <div className="flex items-center font-semibold text-gray-500">
            <FaAngleLeft size={20} color="gray" />Home
          </div>
        </Link>
      </div>
    </div>
  );
};
