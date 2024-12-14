// import React from "react";
// import { Grid, Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";

// const AlbumCard = ({ album }) => {
//   return (
//     <Grid container spacing={2} justifyContent="center">
//       {/* Display album title and follow count */}
//       <Grid item xs={12}>
//         <Typography variant="h5" align="center" sx={{ marginBottom: 2 ,color:'white'}}>
//           {album.title}
//         </Typography>
//         <Chip label={`${album.follows} Follows`} size="small" color="primary" sx={{ marginBottom: 3 }} />
//       </Grid>

//       {/* Iterate over the songs array and display each song */}
//       {album.songs?.map((song, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Card sx={{ width: 160, height: 220, borderRadius: 2, overflow: "hidden" }}>
//             <CardMedia
//               component="img"
//               height="140"
//               image={song.image || "https://via.placeholder.com/160x140"}
//               alt={song.title}
//             />
//             <CardContent>
//               <Typography variant="h6" noWrap>
//                 {song.title}
//               </Typography>
//               <Chip label={`${song.likes} Follows`} size="small" color="primary" sx={{ marginBottom: 3 }} />
//               {/* <Chip label="Song" size="small" sx={{ marginTop: 1 }} /> */}
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default AlbumCard;
import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";

const AlbumCard = ({ album, isSongsSection = false }) => {
  // If isSongsSection is true, treat the album as a single "song"
  const songs = isSongsSection ? [album] : album.songs || []; // If album.songs is undefined, use an empty array

  console.log(songs, 'Songs Data');  // Logs the final songs data
  console.log(album.songs, 'Album Songs');  // Logs album.songs to check if it's available

  return (
    <Grid container spacing={2} justifyContent="center">
      {/* Display album title and follow count */}
      <Grid item xs={12}>
        <Typography variant="h5" align="center" sx={{ marginBottom: 2, color: 'white' }}>
          {album.title}
        </Typography>
        <Chip label={`${album.follows} Follows`} size="small" color="primary" sx={{ marginBottom: 3 }} />
      </Grid>

      {/* Iterate over the songs array and display each song */}
      {songs.length > 0 ? (
        songs.map((song, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ width: 160, height: 220, borderRadius: 2, overflow: "hidden" }}>
              <CardMedia
                component="img"
                height="140"
                image={song.image || "https://via.placeholder.com/160x140"}
                alt={song.title}
              />
              <CardContent>
                <Typography variant="h6" noWrap>
                  {song.title}
                </Typography>
                <Chip label={`${song.likes} Likes`} size="small" color="primary" sx={{ marginBottom: 3 }} />
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="body1" align="center" color="white">
            No songs available
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default AlbumCard;




