import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import axios from "axios";
import AlbumCard from "../cards/cards";

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
      setVisibleCount(collapsed ? albums.length : 4); // Show all or limit to 4
    };
  
    return (
      <Box sx={{ marginBottom: 4 }}>
        {/* Header Section with Title and Show All/Collapse Button */}
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
          <Button variant="contained" onClick={handleToggle}>
            {collapsed ? "Show All" : "Collapse"}
          </Button>
        </Box>
  
        {/* Grid of Albums */}
        <Grid container spacing={2}>
          {albums.slice(0, visibleCount).map((album) => (
            <Grid item xs={12} sm={6} md={4} lg={1} key={album.id}>
              <AlbumCard album={album} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default Section;
