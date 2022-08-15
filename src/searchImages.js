import { useState, useEffect } from "react";
import Results from "./Results";

const SearchImages = () => {
  // const [images, setImages] = useState([]);

  const [images, setImages] = useState({});

  useEffect(() => {
    requestImages();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestImages(searchText = "car") {
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4358fce2397bd1673106f92f24dd801b&text=${searchText}&format=json&nojsoncallback=1`
    );
    const json = await res.json();

    await setImages(json);

    console.log("Ended");
    // console.log("json", json);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestImages(e.target.querySelector(".searchInput").value);
        }}
      >
        <input className="searchInput" />
        <button>Submit</button>
      </form>
      <Results images={images} />
    </div>
  );
};

export default SearchImages;
