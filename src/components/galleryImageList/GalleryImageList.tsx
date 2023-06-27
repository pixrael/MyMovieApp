import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IconButton, ImageListItemBar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { IMG_BASE_URL } from '../../constants';

function srcset(image: string, size: number, rows = 1, cols = 1) {

  const imgPath = `${IMG_BASE_URL}${image}`;

  return {
    src: `${imgPath}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${imgPath}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function GalleryImageList({ imagesData, onSelectedMovie }: {
  imagesData: any[],
  onSelectedMovie: Function
}) {
  return (
    <ImageList
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {imagesData.map((item, index) => (

        <ImageListItem data-testid={`item-${index}`} key={item.id} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.poster_path, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            data-testid={`img-poster-${index}`}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={`${item.release_date} `}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                onClick={() => {
                  onSelectedMovie(item.id);
                }}
                data-testid={`info-button-${index}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

      ))}
    </ImageList>
  );
}