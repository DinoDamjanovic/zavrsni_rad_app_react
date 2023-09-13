import {useState} from "react";
import DestinationList from "../components/DestinationList";
import MainMenu from "../components/MainMenu";
import MainContainer from "../components/MainContainer";
import {MenuOption} from "../constants";

export default function Home() {
    const [activeTab, setActiveTab] = useState(MenuOption.DESTINATIONS);

    return (
        <MainContainer>
            <MainMenu activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="flex-grow overflow-y-auto">
                {activeTab === MenuOption.DESTINATIONS && <DestinationList onlyFavorites={false}/>}
                {activeTab === MenuOption.FAVORITES && <DestinationList onlyFavorites={true}/>}
            </div>
        </MainContainer>
    );
};
