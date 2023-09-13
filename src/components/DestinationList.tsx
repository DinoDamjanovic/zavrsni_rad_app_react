import {useContext} from "react";
import {DestinationsContext} from "../DestinationsProvider";
import DestinationCard from "./DestinationCard";

export default function DestinationList({onlyFavorites}: { onlyFavorites: boolean }) {
    const {destinationData} = useContext(DestinationsContext);

    return (
        <div className="grid gap-4 pb-4 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {destinationData
                .filter(destination => !onlyFavorites || destination.isFavorite)
                .map(destinationData => (
                    <DestinationCard
                        key={destinationData.id}
                        id={destinationData.id}
                        name={destinationData.name}
                        imageUrl={destinationData.imageUrl}
                        isFavorite={destinationData.isFavorite}
                    />
                ))}
        </div>
    );
};

