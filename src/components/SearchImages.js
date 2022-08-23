import { useState, useEffect } from "react";

import { getImages } from "../api";
import TrailAnimationContainer from "../containers/TrailAnimationContainer";

import Results from "./Results";

const SearchImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestImages();
  }, []);

  async function requestImages() {
    const images = await getImages();

    setImages(images?.photos?.photo);
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
