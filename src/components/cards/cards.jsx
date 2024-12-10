import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
const MediaCard = ({ album }) => {
    MediaCard.propTypes = {
        album: PropTypes.shape({
          image: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          follows: PropTypes.number.isRequired,
        }).isRequired,
      };
  return (
    <Card
      sx={{
        width: 159,
        height: 205,
        gap: 0,
        borderRadius: "10px 10px 0 0",
        overflow: "hidden",
      }}
    >
      <CardMedia
        sx={{ height: "60%" }} // Adjust the height to maintain aspect ratio
        image={album.image} // Use album's image URL
        title={album.title} // Use album's title for accessibility
        alt={`${album.title} album cover`}
      />
      <Stack
        direction="row"
        spacing={1}
        sx={{ padding: "8px", justifyContent: "flex-start" }}
      >
        <Chip label={`${album.follows} Follows`} color="primary" variant="outlined" />

      </Stack>
      <Typography
        variant="h6"
        component="div"
        sx={{
          paddingLeft: "8px",
          textAlign: "left",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {album.title} {/* Display the album title */}
      </Typography>
    </Card>
  );
};

export default MediaCard;
