import { useEffect } from "react";

const Results = ({ images: { photos } }) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      {!photos ? (
        <h1>No images found!</h1>
      ) : (
        photos.photo.map((image) => (
          <img
            alt={image.title}
            key={image.id}
            src={`https://live.staticflickr.com/${image?.server}/${image?.id}_${image?.secret}.jpg`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
