import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-01&sortBy=publishedAt&apiKey=1bd15ab3e5024593a26b3b846ef6346d')
            .then(res => res.json())
            .then(data => setArticles(data.articles));
    }, [])
    return (
        <Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    articles.map(article =>
                        <Grid item xs={2} sm={4} md={4}>
                            <News article={article}></News>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
};

export default Newspaper;