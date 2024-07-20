import RoutesComponent from "./components/RoutesComponent";
import DestinationsProvider from "./DestinationsProvider";

export default function App() {
  return (
    <DestinationsProvider>
      <RoutesComponent />
    </DestinationsProvider>
  );
};
