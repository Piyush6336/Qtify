import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";

const AlbumCard = ({ album }) => {
  return (
    <Card sx={{ width: 160, height: 220, borderRadius: 2, overflow: "hidden" }}>
      <CardMedia
        component="img"
        height="140"
        image={album.image || "https://via.placeholder.com/160x140"}
        alt={album.title}
      />
      <CardContent>
        <Typography variant="h6" noWrap>
          {album.title}
        </Typography>
        <Chip label={`${album.follows} Follows`} size="small" />
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
