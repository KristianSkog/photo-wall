import { ImageList, ImageListItem } from "@mui/material";

// TODO: check out why it is not yelling about PropTypes
const Results = ({ images }) => {
  return (
    <div>
      {!images ? (
        <h1>No images found!</h1>
      ) : (
        <ImageList variant="masonry" cols={3} gap={4}>
          {images.map((item) => (
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
