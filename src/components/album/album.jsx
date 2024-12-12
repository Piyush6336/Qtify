import React, { useEffect, useState } from 'react';
import { Grid, Button, Typography } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import AlbumCard from '../cards/cards'; // Assume this component is created

const API = 'https://qtify-backend-labs.crio.do/albums/new';

const TopAlbumsSection = ({title}) => {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Typography variant="h4" sx={{color:"white"}}>{title}</Typography>
        <Button variant="contained" onClick={toggleCollapse}>
          {isCollapsed ? 'Show All' : 'Collapse'}
        </Button>
      </div>

      {isCollapsed ? (
        <Carousel
          items={albums}
          renderItem={(album) => <AlbumCard album={album} />}
        />
      ) : (
        <Grid container spacing={2}>
          {albums.map((album) => (
            <Grid item xs={12} sm={6} md={4} lg={1} key={album.id}>
              <AlbumCard album={album} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default TopAlbumsSection;
