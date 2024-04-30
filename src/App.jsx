import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
