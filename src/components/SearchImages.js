import { useState, useEffect } from "react";

import Results from "./Results";

const SearchImages = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestImages();
  }, []);

  function shuffle(array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  async function requestImages() {
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=4358fce2397bd1673106f92f24dd801b&user_id=tretton37&format=json&nojsoncallback=1`
    );
    const json = await res.json();

    const getImages = json?.photos?.photo;

    let randomArray = shuffle(getImages);
    let getSpecificValues = randomArray.slice(0, 6);

    await setImages(getSpecificValues);
    setLoading(false);
  }

  return (
    <div>
      {loading === false ? <Results images={images} /> : <p>Loading..</p>}
    </div>
  );
};

export default SearchImages;
