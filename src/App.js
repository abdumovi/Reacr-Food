import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layaut, Home, Dashboard, Setting, Bell, Message, Sale, Exit } from "./pages";
import { AppContext } from "./contexts/AppContext";

function App() {
  
  const [dishes,setDishes] = React.useState([]);
  return (
    <div className="App">
      <AppContext.Provider value={dishes,setDishes}> 
        <Routes>
          <Route path="/" element={<Layaut />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="setting" element={<Setting />} />
            <Route path="bell" element={<Bell />} />
            <Route path="message" element={<Message />} />
            <Route path="sale" element={<Sale />} />
            <Route path="exit" element={<Exit />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
