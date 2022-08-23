import client from "./client";

const BASE_URL = `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&user_id=${process.env.REACT_APP_FLICKR_USER_ID}&format=json&nojsoncallback=1`;

const getImages = async () => {
  return await client(BASE_URL);
};

export { getImages };
