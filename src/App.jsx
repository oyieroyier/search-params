import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import TeamMembersContextProvider from "./context/TeamMembersContextProvider";
import { useEffect } from "react";
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
const App = () => {
  const location = useLocation();
  const search = location?.search;

  function extractSearchQuery(urlString) {
    // Find the index of the "?" character
    const questionMarkIndex = urlString.indexOf("?");

    // If "?" is found, extract the search query
    if (questionMarkIndex !== -1) {
      const searchQuery = urlString.substring(questionMarkIndex + 1);
      return searchQuery.split("&")[0].split("=")[1];
    } else {
      return "useSearchParams Walkthrough"; // Default Page title if no search query is present
    }
  }

  let pageTitle = extractSearchQuery(search);

	useDocumentTitle(pageTitle);
	
  return (
    <div className="flex flex-col gap-4 p-8">
      <Navbar />
      <TeamMembersContextProvider>
        <Outlet />
      </TeamMembersContextProvider>
    </div>
  );
};

export default App;
