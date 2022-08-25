import PropTypes from "prop-types";
import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import getSxSize from "../../helpers/getSxSize";

const ImagesGrid = ({ images }) => {
  const theme = useTheme();
  // 900px
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  // 1200px
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  // 1536px
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <div>
      {images?.length === 0 ? (
        <h1>No images found!</h1>
      ) : (
        <ImageList
          sx={getSxSize({ isXl, isLg, isMd })}
          variant="woven"
          cols={3}
          gap={12}
        >
          {images.map((item) => (
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

ImagesGrid.propTypes = {
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

export default ImagesGrid;
