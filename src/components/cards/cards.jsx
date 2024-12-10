import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import PropTypes from "prop-types";
import './cards.css';
const AlbumCard = ({ image, title, follows, category }) => {
  return (
    <Card style={{ maxWidth: 200, margin: 10, borderRadius: 10 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        style={{ objectFit: "cover" }}
      />
      <CardContent>
        <Chip label={`${follows} Follows`} style={{ marginBottom: 8 }} />
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
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
