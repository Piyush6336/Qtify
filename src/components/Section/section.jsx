import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import axios from "axios";
import AlbumCard from "../cards/cards";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // Default visible count
  const [collapsed, setCollapsed] = useState(true);

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

  const handleToggle = () => {
    setCollapsed(!collapsed);
    setVisibleCount(collapsed ? albums.length : 6); // Show all or limit to 6
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Typography variant="h4" sx={{ color: "white" }}>
          {title}
        </Typography>
        <Button variant="contained" onClick={handleToggle}>
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </div>

      {collapsed ? (
        <Carousel items={albums} renderItem={(album) => <AlbumCard album={album} />} />
      ) : (
        <Grid container spacing={2}>
          {albums.slice(0, visibleCount).map((album) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={album.id}>
              <AlbumCard album={album} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Section;
