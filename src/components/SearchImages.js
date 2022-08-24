import { useState, useEffect } from "react";

import Results from "./Results";
import TrailAnimationContainer from "../containers/TrailAnimationContainer";

const SearchImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestImages();
  }, []);

  async function requestImages() {
    // TODO: use .env to store this endpoint
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=4358fce2397bd1673106f92f24dd801b&user_id=tretton37&format=json&nojsoncallback=1`
    );
    const json = await res.json();

    // put to the images what it expects to be, we can use a different state for the rest of the data
    // NOTE: slice() used temporarily to get the needed amount of images for a grid
    setImages(json?.photos?.photo.slice(94));
    setLoading(false);
  }

  return (
    <div>
      {loading === false ? (
        <Results images={images} />
      ) : (
        <TrailAnimationContainer text="Loading..." />
      )}
    </div>
  );
};

export default SearchImages;
