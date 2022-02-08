import { Route, Routes } from "react-router-dom";
import { Layaut, Home, Dashboard, Setting ,Bell ,Message ,Sale,Exit} from "./pages";


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
