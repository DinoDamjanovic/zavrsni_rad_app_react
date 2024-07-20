import MainContainer from "../components/MainContainer";
import AboutMenu from "../components/AboutMenu";

export default function About() {
  return (
    <MainContainer>
      <AboutMenu />
      <div className="flex-grow overflow-y-auto flex flex-col justify-center items-center h-full p-8 space-y-4">
        <h1 className="text-4xl font-bold text-gray-500 text-center max-w-2xl">About</h1>
        <p className="text-gray-500 max-w-2xl leading-relaxed">
          This web application is an epitome of modern web development practices. It harnesses the power of React to showcase some of the pivotal features essential for contemporary web apps.
          Functionalities integrated into this application are the following:
        </p>
        <ul className="text-gray-500 max-w-2xl leading-relaxed list-disc pl-5">
          <li><strong>Components:</strong> The entire UI is constructed using React components, allowing for modularity and reusability across the application.</li>
          <li><strong>Routing:</strong> Seamless navigation is made possible using routing, directing users between different sections without a page reload, thereby providing a single-page
            application experience.
          </li>
          <li><strong>Data Binding:</strong> The synchronization between the UI and data ensures real-time updates, making the user experience dynamic and reactive.</li>
          <li><strong>Event Binding:</strong> User interactions, be it button clicks or form submissions, are efficiently handled and processed using event binding techniques.</li>
          <li><strong>State Management:</strong> Leveraging React's context API, the application manages its state, ensuring data consistency and controlled data flow throughout the components.</li>
        </ul>
        <p className="text-gray-500 max-w-2xl leading-relaxed">
          By integrating these features, this web application provides an optimal user experience.
        </p>
      </div>
    </MainContainer>
  );
}
