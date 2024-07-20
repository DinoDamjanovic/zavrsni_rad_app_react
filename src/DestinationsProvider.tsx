import React, { createContext, useState } from 'react';
import MountainLake from "../src/assets/img/mountain_lake.png";
import HiddenForest from "../src/assets/img/hidden_forest.png";
import LakeRoad from "../src/assets/img/lake_road.png";
import ForestfallHike from "../src/assets/img/forestfall_hike.png";
import AzureBeachHideout from "../src/assets/img/azure_beach_hideout.png";
import MountainRetreat from "../src/assets/img/mountain_retreat.png";
import TropicalParadise from "../src/assets/img/tropical_paradise.png";
import AutumnDream from "../src/assets/img/autumn_dream.png";
import SunnyMeadow from "../src/assets/img/sunny_meadow.png";
import SunsetDocks from "../src/assets/img/sunset_docks.png";
import LakeOfSilence from "../src/assets/img/lake_of_silence.png";
import SpringField from "../src/assets/img/spring_field.png";

interface DestinationData {
  id: number;
  name: string;
  imageUrl: string;
  isFavorite: boolean;
}

export const DestinationsContext = createContext({
  destinationData: [] as DestinationData[],
  toggleFavorite: (id: number) => {
  },
  toggleSearch: (searchTerm: string) => {
  }
});

export default function DestinationsProvider({ children }: React.PropsWithChildren<{}>) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [allDestinationData, setAllDestinationData] = useState([
    {
      id: 1,
      name: 'Mountain Lake',
      imageUrl: MountainLake,
      isFavorite: false
    },
    {
      id: 2,
      name: 'Hidden Forest',
      imageUrl: HiddenForest,
      isFavorite: false
    },
    {
      id: 3,
      name: 'Lake Road',
      imageUrl: LakeRoad,
      isFavorite: false
    },
    {
      id: 4,
      name: 'Forestfall hike',
      imageUrl: ForestfallHike,
      isFavorite: false
    },
    {
      id: 5,
      name: 'Azure Beach Hideout',
      imageUrl: AzureBeachHideout,
      isFavorite: false
    },
    {
      id: 6,
      name: 'Mountain Retreat',
      imageUrl: MountainRetreat,
      isFavorite: false
    },
    {
      id: 7,
      name: 'Tropical Paradise',
      imageUrl: TropicalParadise,
      isFavorite: false
    },
    {
      id: 8,
      name: 'Autumn Dream',
      imageUrl: AutumnDream,
      isFavorite: false
    },
    {
      id: 9,
      name: 'Sunny Meadow',
      imageUrl: SunnyMeadow,
      isFavorite: false
    },
    {
      id: 10,
      name: 'Sunset Docks',
      imageUrl: SunsetDocks,
      isFavorite: false
    },
    {
      id: 11,
      name: 'Lake of Silence',
      imageUrl: LakeOfSilence,
      isFavorite: false
    },
    {
      id: 12,
      name: 'Spring Field',
      imageUrl: SpringField,
      isFavorite: false
    }
  ]);
  const [activeDestinationData, setActiveDestinationData] = useState<DestinationData[]>(allDestinationData);

  const toggleFavorite = (id: number) => {
    const updatedDestinations = allDestinationData.map(destination => {
      if (destination.id === id) {
        return { ...destination, isFavorite: !destination.isFavorite };
      }
      return destination;
    });

    setAllDestinationData(updatedDestinations);

    if (isSearchActive) {
      const idSet = new Set(activeDestinationData.map(destination => destination.id));
      setActiveDestinationData(updatedDestinations.filter(destination => idSet.has(destination.id)));
    } else {
      setActiveDestinationData(updatedDestinations);
    }
  };

  const toggleSearch = (searchTerm: string) => {
    if (searchTerm.length === 0) {
      setIsSearchActive(false);
      setActiveDestinationData(allDestinationData);
      return;
    }

    const lowerCasedSearchTerm = searchTerm.toLowerCase();

    const updatedDestinations = allDestinationData.filter(destination => {
      return destination.name.toLowerCase().includes(lowerCasedSearchTerm);
    });

    setIsSearchActive(true);
    setActiveDestinationData(updatedDestinations);
  };

  const value = {
    destinationData: activeDestinationData,
    toggleFavorite,
    toggleSearch
  };

  return (
    <DestinationsContext.Provider value={value}>
      {children}
    </DestinationsContext.Provider>
  );
}
