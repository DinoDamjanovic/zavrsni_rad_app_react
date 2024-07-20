import { FaHeart } from 'react-icons/fa';
import { useContext } from "react";
import { DestinationsContext } from "../DestinationsProvider";

interface DestinationCardProps {
  id: number;
  name: string;
  imageUrl: string;
  isFavorite: boolean;
}

export default function DestinationCard({ id, name, imageUrl, isFavorite }: DestinationCardProps) {
  const { toggleFavorite } = useContext(DestinationsContext);

  return (
    <div className="relative p-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt="Destination" />
      <div className="flex justify-between items-center mt-4">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <button onClick={() => toggleFavorite(id)} className="focus:outline-none">
          <FaHeart size={24} color={isFavorite ? 'red' : 'gray'} />
        </button>
      </div>
    </div>
  );
};
