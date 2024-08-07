import SearchComponent from "./SearchComponent";
import { MenuOption } from "../constants";

interface MenuProps {
  activeTab: MenuOption;
  setActiveTab: (activeTab: MenuOption) => void;
}

export default function MainMenu({ activeTab, setActiveTab }: MenuProps) {
  return (
    <div className="bg-gray-100 py-4 px-6 flex justify-between items-center">
      <div className="flex justify-between w-full">
        <button
          className={`${
            activeTab === MenuOption.DESTINATIONS
              ? 'font-semibold text-blue-500'
              : 'font-semibold text-gray-500'
          }`}
          onClick={() => setActiveTab(MenuOption.DESTINATIONS)}
        >
          Destinations
        </button>

        <SearchComponent />

        <button
          className={`${
            activeTab === MenuOption.FAVORITES
              ? 'font-semibold text-blue-500'
              : 'font-semibold text-gray-500'
          }`}
          onClick={() => setActiveTab(MenuOption.FAVORITES)}
        >
          Favorites
        </button>
      </div>
    </div>
  );
};

