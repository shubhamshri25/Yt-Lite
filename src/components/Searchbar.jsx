import axios from "axios";
import React, { useState } from "react";

const Searchbar = ({ setVideos }) => {
  const [search, setsearch] = useState("");
  

  // console.log(videos);

  function implementSearch() {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: `${import.meta.env.VITE_ACCESS_KEY}`,
          part: "snippet",
          type: "video",
          maxResults: 10,
          q: search,
        },
      })
      .then((res) => setVideos(res.data.items))
      .catch((err) => console.log(err));
  }
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button onClick={implementSearch}>Search</button>
    </div>
  );
};

export default Searchbar;
