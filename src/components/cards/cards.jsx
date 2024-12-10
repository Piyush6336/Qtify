import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Chip } from "@mui/material";

const AlbumCard = ({ album }) => {
  return (
    <Card
      sx={{
        width: 180,
        height: 250,
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Album Image Section */}
      <Box sx={{ height: "70%", position: "relative" }}>
        <CardMedia
          component="img"
          image={album.image} // Actual album image
          alt={album.title}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        {/* Follows Chip */}
        <Chip
          label={`${album.follows} Follows`}
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            fontSize: "0.75rem",
            padding: "4px 8px",
          }}
        />
      </Box>

      {/* Bottom Section */}
      <CardContent
        sx={{
          height: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          {album.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
