import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddVideo from "./components/add/AddVideo";
import EditVideo from "./components/Edit/EditVideo";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
        <Route path="/videos/add" element={<AddVideo />} />
        <Route path="/videos/edit/:videoId" element={<EditVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
