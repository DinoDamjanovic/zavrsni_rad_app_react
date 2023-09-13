import RoutesComponent from "./components/RoutesComponent";
import {BrowserRouter} from "react-router-dom";
import DestinationsProvider from "./DestinationsProvider";

export default function App() {
    return (
        <BrowserRouter>
            <DestinationsProvider>
                <RoutesComponent/>
            </DestinationsProvider>
        </BrowserRouter>
    );
};
