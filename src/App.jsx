import Searchbar from "./components/Searchbar";
import VideoList from "./components/VideoList";
import VideoPlay from "./components/VideoPlay";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState("");
  const [selectedVideos, setSelectedVideos] = useState("");
  console.log(selectedVideos);
  return (
    <>
      <Searchbar setVideos={setVideos} />
      <div className="videos">
        <VideoPlay selectedVideos={selectedVideos} />
        <VideoList videos={videos} setSelectedVideos={setSelectedVideos} />
      </div>
    </>
  );
}

export default App;
