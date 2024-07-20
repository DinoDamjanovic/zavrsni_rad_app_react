import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { DestinationsContext } from "../DestinationsProvider";

export default function SearchComponent() {
  const searchPlaceholder: string = 'Search...';
  const [searchTerm, setSearchTerm] = useState('');
  const { toggleSearch } = useContext(DestinationsContext);

  const onSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    if (searchTerm.length !== 1) {
      toggleSearch(searchTerm);
    }
  }

  return (
    <div className="flex items-center">
      <FaSearch size={20} color="gray" className="mr-2" />
      <input
        className="text-gray-500 border rounded px-3 py-2 transition ease-in-out duration-150 focus:outline-none focus:border-blue-500"
        value={searchTerm}
        placeholder={searchPlaceholder}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
