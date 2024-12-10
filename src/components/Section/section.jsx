import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import axios from "axios";
import AlbumCard from "../cards/cards";

const Section = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiUrl);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [apiUrl]);

  return (
    <Box sx={{ marginBottom: 4 }}>
      {/* Header Section with Title and Collapse Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
        <Button variant="contained" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Expand" : "Collapse"}
        </Button>
      </Box>

      {/* Grid of Albums with Horizontal Scroll on Large Screens */}
      {!collapsed && (
        <Box
          sx={{
            overflowX: { lg: "auto" }, // Enable horizontal scroll on large screens
            whiteSpace: { lg: "nowrap" }, // Prevent wrapping of cards in a new line
          }}
        >
          <Grid container spacing={2} sx={{ flexWrap: { lg: "nowrap" } }}>
            {albums.map((album) => (
              <Grid item xs={12} sm={6} md={4} lg={1} key={album.id}>
                <AlbumCard album={album} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Section;
