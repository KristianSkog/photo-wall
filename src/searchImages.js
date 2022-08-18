import { useState, useEffect } from "react";
import Results from "./Results";
import "./searchImages.css";

const SearchImages = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestImages();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestImages() {
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=4358fce2397bd1673106f92f24dd801b&user_id=tretton37&format=json&nojsoncallback=1`
    );
    const json = await res.json();

    await setImages(json);
    setLoading(false);
  }

  return (
    <div>
      <div className="SearchForm__container">
        <form
          className="SearchForm"
          onSubmit={(e) => {
            e.preventDefault();
            requestImages(e.target.querySelector(".searchInput").value);
          }}
        >
          <input className="searchInput" placeholder="Search for images" />
          <button className="searchSubmitButton">Submit</button>
        </form>
      </div>
      {loading === false ? <Results images={images} /> : <p>Loading..</p>}
    </div>
  );
};

export default SearchImages;
