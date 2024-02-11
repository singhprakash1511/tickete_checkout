import {Routes, Route} from "react-router-dom";
import Checkout from "./Pages/Checkout";
import "./App.css"

function App() {
  return (
   <div className="w-screen min-h-screen flex ">
      <Routes>
        <Route path="/"  element={<Checkout />}/>
      </Routes>

   </div>
  );
}

export default App;
