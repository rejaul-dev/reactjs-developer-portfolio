import AOS from "aos";
import 'aos/dist/aos.css';
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes/Routes";


function App() {
  AOS.init();
  return (
    <div className="bg-accent">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
