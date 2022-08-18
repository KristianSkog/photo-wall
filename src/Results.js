import { ImageList, ImageListItem } from "@mui/material";

const Results = ({ images: { photos } }) => {
  return (
    <div>
      {!photos ? (
        <h1>No images found!</h1>
      ) : (
        <ImageList variant="masonry" cols={4} gap={4}>
          {photos.photo.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`https://live.staticflickr.com/${item?.server}/${item?.id}_${item?.secret}.jpg`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </div>
  );
};

export default Results;
