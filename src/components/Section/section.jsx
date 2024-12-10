import React, { useEffect, useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import AlbumCard from "../cards/cards";
import axios from "axios";

const Section = () => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <Typography variant="h5" sx={{ color: 'white' }}>Top Albums</Typography>
        <Button
          variant="text"
          color="primary"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {collapsed ? "Expand" : "Collapse"}
        </Button>
      </div>
      <Grid container spacing={2}>
        {albums
          .slice(0, collapsed ? 4 : albums.length)
          .map((album) => (
            <Grid item key={album.id} xs={6} sm={4} md={3}>
              <AlbumCard
                image={album.image}
                title={album.title}
                follows={album.follows}
                category={album.description}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Section;
