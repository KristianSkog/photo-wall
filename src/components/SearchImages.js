import { useState, useEffect } from "react";

import Results from "./Results";

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
    setImages(json?.photos?.photo);
    setLoading(false);
  }

  return (
    <div>
      {loading === false ? <Results images={images} /> : <p>Loading..</p>}
    </div>
  );
};

export default SearchImages;
