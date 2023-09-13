import {useContext, useEffect, useState} from "react";
import {FaSearch} from "react-icons/fa";
import {DestinationsContext} from "../DestinationsProvider";

export default function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState("");
    const {toggleSearch} = useContext(DestinationsContext)

    useEffect(() => {
        if (searchTerm.length !== 1) {
            toggleSearch(searchTerm);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    return (
        <div className="flex items-center">
            <FaSearch size={20} color="gray" className="mr-2"/>
            <input
                className="text-gray-500 border rounded px-3 py-2 transition ease-in-out duration-150 focus:outline-none focus:border-blue-500"
                value={searchTerm}
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};
