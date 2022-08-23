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
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&user_id=${process.env.REACT_APP_FLICKR_USER_ID}&format=json&nojsoncallback=1`
    );
    const json = await res.json();

    setImages(json?.photos?.photo);
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
