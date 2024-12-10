import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const MediaCard = ({ album }) => {
    return (
        <Card sx={{ width: 159, height: 205, gap: 0, borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
            <CardMedia
                sx={{ height: '60%' }} // Adjust the height to maintain aspect ratio
                image={album.image} // Use album's image URL
                title={album.title} // Use album's title for accessibility
            />
            <Stack direction="row" spacing={1} sx={{ padding: '8px', justifyContent: 'flex-start' }}>
                <Chip label={`${album.follows} Follows`} />
            </Stack>
            <Typography variant="h6" component="div" sx={{ paddingLeft: '8px', textAlign: 'left' }}>
                {album.title} {/* Display the album title */}
            </Typography>
        </Card>
    );
};

export default MediaCard;
