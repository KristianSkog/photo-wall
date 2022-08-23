import PropTypes from "prop-types";
import { ImageList, ImageListItem } from "@mui/material";

const Results = ({ images }) => {
  return (
    <div>
      {images?.length === 0 ? (
        <h1>No images found!</h1>
      ) : (
        <ImageList variant="masonry" cols={4} gap={4}>
          {images.map((item) => (
            // NOTE: it's really important to pass the unique key to the component that is created inside a loop
            <ImageListItem key={item.id}>
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

Results.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      farm: PropTypes.number,
      id: PropTypes.string,
      isfamily: PropTypes.number,
      isfriend: PropTypes.number,
      ispublic: PropTypes.number,
      owner: PropTypes.string,
      secret: PropTypes.string,
      server: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default Results;
