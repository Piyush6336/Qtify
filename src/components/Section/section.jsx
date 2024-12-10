// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Button, Typography, CircularProgress } from '@mui/material';
// // import MediaCard from '../cards/cards'; 
// // import './Section.css';

// // const Section = ({ title }) => {
// //     const [albums, setAlbums] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [collapsed, setCollapsed] = useState(true);

// //     useEffect(() => {
// //         const fetchAlbums = async () => {
// //             setLoading(true); // Set loading to true at the start of the fetch
// //             try {
// //                 const res = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
// //                 console.log("Full API Response:", res.data); // Log the full response

// //                 // Check if the response is an array and set albums correctly
// //                 if (Array.isArray(res.data)) {
// //                     setAlbums(res.data); // Set albums directly from the array
// //                     console.log("Albums Set:", res.data); 
// //                 } else {
// //                     setError("No albums found."); // Handle case where albums are not an array
// //                 }
// //             } catch (error) {
// //                 console.error("Error fetching albums:", error);
// //                 setError("Failed to load albums.");
// //             } finally {
// //                 setLoading(false); // Set loading to false when the fetch completes
// //             }
// //         };

// //         fetchAlbums();
// //     }, []);

// //     const toggleCollapse = () => {
// //         setCollapsed(!collapsed);
// //     };

// //     return (
// //         <div className="section">
// //             <div className="section-header">
// //                 <Typography variant="h5" component="div">
// //                     {title}
// //                 </Typography>
// //                 <Button onClick={toggleCollapse} variant="contained" size="small">
// //                     {collapsed ? 'Show All' : 'Collapse'}
// //                 </Button>
// //             </div>

// //             {/* Display loading indicator */}
// //             <div className={`grid ${collapsed ? 'collapsed' : ''}`}>
// //                 {loading && <CircularProgress />}
// //                 {error && <Typography color="error">{error}</Typography>}
// //                 {!loading && (
// //                     <>
// //                         {albums.length > 0 ? (
// //                             albums.map((album) => (
// //                                 <MediaCard key={album.id} album={album} />
// //                             ))
// //                         ) : (
// //                             <Typography>No albums available.</Typography>
// //                         )}
// //                     </>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Section;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography, CircularProgress } from '@mui/material';
import MediaCard from '../cards/cards';
import Carousel from '../Carousel/Carousel'; // Import the Carousel component
import './Section.css';

const Section = ({ title }) => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const res = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
                if (Array.isArray(res.data)) {
                    setAlbums(res.data);
                } else {
                    setError("No albums found.");
                }
            } catch (error) {
                setError("Failed to load albums.");
            } finally {
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []);

    const toggleCollapse = () => setCollapsed(!collapsed);

    return (
        <div className="section">
            <div className="section-header">
                <Typography variant="h5">{title}</Typography>
                <Button onClick={toggleCollapse} variant="contained" size="small">
                    {collapsed ? 'Show All' : 'Collapse'}
                </Button>
            </div>
            <div className="section-content">
                {loading && <CircularProgress />}
                {error && <Typography color="error">{error}</Typography>}
                {!loading && !error && (
                    collapsed ? (
                        <div className="grid">
                            {albums.map(album => (
                                <MediaCard key={album.id} album={album} />
                            ))}
                        </div>
                    ) : (
                        <Carousel
                            items={albums}
                            renderItem={(album) => <MediaCard album={album} />}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Section;

// import React from 'react';
// import { Typography, Button, CircularProgress } from '@mui/material';
// import MediaCard from '../cards/cards';
// import './Section.css';

// const Section = ({ title, albums = [], loading, error, carouselComponent, collapsed, toggleCollapse }) => {
//     return (
//         <div className="section">
//             <div className="section-header">
//                 <Typography variant="h5">{title}</Typography>
//                 <Button onClick={toggleCollapse} variant="contained" size="small">
//                     {collapsed ? 'Show All' : 'Collapse'}
//                 </Button>
//             </div>

//             <div className={`grid ${collapsed ? 'collapsed' : ''}`}>
//                 {loading && <CircularProgress />}
//                 {error && <Typography color="error">{error}</Typography>}
//                 {!loading && (
//                     <>
//                         {albums?.length > 0 ? (
//                             collapsed ? (
//                                 carouselComponent
//                             ) : (
//                                 albums.map((album) => <MediaCard key={album.id} album={album} />)
//                             )
//                         ) : (
//                             <Typography>No albums available.</Typography>
//                         )}
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Section;
