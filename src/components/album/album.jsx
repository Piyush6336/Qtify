import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from '../Section/section';
import Carousel from '../Carousel/Carousel';

const NewAlbumsSection = () => {
    const [newAlbums, setNewAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewAlbums = async () => {
            try {
                const res = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
                setNewAlbums(res.data);
            } catch (err) {
                console.error("Error fetching new albums:", err);
                setError("Failed to load new albums.");
            } finally {
                setLoading(false);
            }
        };
        fetchNewAlbums();
    }, []);

    return (
        <Section
            title="New Albums"
            albums={newAlbums}
            loading={loading}
            error={error}
            carouselComponent={
                <Carousel items={newAlbums} renderItem={(album) => <MediaCard album={album} />} />
            }
        />
    );
};

export default NewAlbumsSection;
