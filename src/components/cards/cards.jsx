import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import PropTypes from "prop-types";

const AlbumCard = ({ image, title, follows, category }) => {
  return (
    <Card
      data-testid="album-card"
      style={{ maxWidth: 200, margin: 10, borderRadius: 10 }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        style={{ objectFit: "cover" }}
        data-testid="album-image"
      />
      <CardContent>
        <Chip
          label={`${follows} Follows`}
          style={{ marginBottom: 8 }}
          data-testid="album-follows"
        />
        <Typography
          variant="subtitle1"
          gutterBottom
          data-testid="album-title"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          data-testid="album-category"
        >
          {category}
        </Typography>
      </CardContent>
    </Card>
  );
};

AlbumCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  follows: PropTypes.number.isRequired,
  category: PropTypes.string,
};

export default AlbumCard;
