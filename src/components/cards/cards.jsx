import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";

const AlbumCard = ({ album }) => {
  return (
    <Card sx={{ width: 160, height: 220, borderRadius: 2, overflow: "hidden" }}>
      <CardMedia
        component="img"
        height="140"
        image={album.songs?.[0]?.image || "https://via.placeholder.com/160x140"}
        alt={album.songs?.[0]?.title}
      />
      <CardContent>
        <Typography variant="h6" noWrap>
          {album.songs?.[0]?.title}
        </Typography>
        <Chip label={`${album.follows} Follows`} size="small" />
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
