import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <ContextProvider>
      <div className="root">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
