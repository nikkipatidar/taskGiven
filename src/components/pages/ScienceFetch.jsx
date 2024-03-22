import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

const ScienceFetch = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://child.onrender.com/api/sciencefiction');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();

            setStories(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log(stories)

    return (
        <div>

            <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", margin: "5px", padding: "5px" }}>
                {stories.map(story => (
                    <li key={story._id} style={{ listStyle: "none" }}>
                        <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt='image' width='100%' />
                        <h2>{story.Title}</h2>
                        <Button variant="contained" color="primary" style={{ width: "50px", height: "50px" }}><p>{story.Status}</p></Button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default ScienceFetch;
