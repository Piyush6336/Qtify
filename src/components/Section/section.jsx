// import React, { useEffect, useState } from "react";
// import { Box, Grid, Typography, Button } from "@mui/material";
// import axios from "axios";
// import AlbumCard from "../cards/cards";
// import Carousel from "../Carousel/Carousel";

// const Section = ({ title, apiUrl }) => {
//   const [albums, setAlbums] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(4); // Default visible count
//   const [collapsed, setCollapsed] = useState(true);

//   useEffect(() => {
//     const fetchAlbums = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         setAlbums(response.data);
//       } catch (error) {
//         console.error("Error fetching albums:", error);
//       }
//     };

//     fetchAlbums();
//   }, [apiUrl]);

//   const handleToggle = () => {
//     setCollapsed(!collapsed);
//     setVisibleCount(collapsed ? albums.length : 6); // Show all or limit to 6
//   };

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
//         <Typography variant="h4" sx={{ color: "white" }}>
//           {title}
//         </Typography>
//         <Button variant="contained" onClick={handleToggle}>
//           {collapsed ? "Show All" : "Collapse"}
//         </Button>
//       </div>

//       {collapsed ? (
//         <Carousel items={albums} renderItem={(album) => <AlbumCard album={album} />} />
//       ) : (
//         <Grid container spacing={2}>
//           {albums.slice(0, visibleCount).map((album) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={album.id}>
//               <AlbumCard album={album} />
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </div>
//   );
// };

// export default Section;
// import React, { useEffect, useState } from "react";
// import { Box, Grid, Typography, Button } from "@mui/material";
// import axios from "axios";
// import AlbumCard from "../cards/cards";
// import Carousel from "../Carousel/Carousel";

// const Section = ({ title, apiUrl, alias }) => {
//   const [albums, setAlbums] = useState([]);
//   const [collapsed, setCollapsed] = useState(true);

//   useEffect(() => {
//     const fetchAlbums = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         setAlbums(response.data);
//       } catch (error) {
//         console.error(`Error fetching albums for ${alias}:`, error);
//       }
//     };

//     fetchAlbums();
//   }, [apiUrl, alias]);

//   const handleToggle = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <div data-cy={alias}>
//       {/* Header Section with Title and Toggle Button */}
//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
//         <Typography variant="h4" sx={{ color: "white" }}>
//           {title}
//         </Typography>
//         <Button variant="contained" onClick={handleToggle}>
//           {collapsed ? "Show All" : "Collapse"}
//         </Button>
//       </div>

//       {/* Conditionally Render Carousel or Grid */}
//       {collapsed ? (
//         <Carousel items={albums} renderItem={(album) => <AlbumCard album={album} />} />
//       ) : (
//         <Grid container spacing={2}>
//           {albums.map((album) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={album.id}>
//               <AlbumCard album={album} />
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </div>
//   );
// };

// export default Section;

import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Tabs,
  Tab,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import AlbumCard from "../cards/cards";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, apiUrl, alias, isSongsSection = false }) => {
  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [collapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(true); // State for loading

  // Fetch items from API (albums/songs based on apiUrl)
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log(response, "items");
        setItems(response.data);
      } catch (error) {
        console.error(`Error fetching data for ${alias}:`, error);
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchItems();

    // Fetch genres for songs section if required
    if (isSongsSection) {
      const fetchGenres = async () => {
        try {
          const genreResponse = await axios.get(
            "https://qtify-backend-labs.crio.do/genres"
          );
          console.log(genreResponse, "genres");
          setGenres(genreResponse.data);
          setSelectedGenre(genreResponse.data[0]?.key || ""); // Default to first genre
        } catch (error) {
          console.error("Error fetching genres:", error);
        }
      };

      fetchGenres();
    }
  }, [apiUrl, isSongsSection, alias]);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  // Memoized genre change handler
  const handleGenreChange = useCallback((event, newValue) => {
    setSelectedGenre(newValue);
  }, []);

  // Filter items based on selected genre for songs section
  const filteredItems = isSongsSection
    ? items.filter((item) => item.genre?.key === selectedGenre) // Ensure genre exists
    : items;
    console.log(filteredItems, 'Filtered Items');

  return (
    <div data-cy={alias}>
      {/* Header Section with Title and Toggle Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          {title}
        </Typography>
        {!isSongsSection && (
          <Button variant="contained" onClick={handleToggle}>
            {collapsed ? "Show All" : "Collapse"}
          </Button>
        )}
      </div>

      {/* Genre Tabs for Songs Section */}
      {isSongsSection && genres.length > 0 && (
        <Tabs
          value={selectedGenre}
          onChange={handleGenreChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          sx={{ marginBottom: "20px" }}
        >
          {genres.map((genre) => (
            <Tab key={genre.key} label={genre.label} value={genre.key} />
          ))}
        </Tabs>
      )}

      {/* Loading Spinner */}
      {loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div>
          {/* Conditionally Render Carousel or Grid */}
          {collapsed ? (
            <Carousel
              items={filteredItems}
              renderItem={(item) => (
                <AlbumCard
                  album={item}
                  isSongsSection={isSongsSection || !item.songs}
                />
              )}
            />
          ) : (
            <Grid container spacing={2}>
              {filteredItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <AlbumCard
                    album={item}
                    isSongsSection={!!item.durationInMs || !item.songs}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
