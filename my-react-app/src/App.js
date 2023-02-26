import { RouterProvider } from "react-router-dom";
import "./App.css";
import GetRoutes from "./components/Shared/DefineRoutes";


function App() {

  return (
    <div className="App">
      <RouterProvider router={GetRoutes()} />
    </div>
  );
}

export default App;
