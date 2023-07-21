import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllNews = () : JSX.Element => {
    const apikey = 'f46c14c8497f8ef30b03bfa43069571d';
    const gNewsApiUrl = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apikey}`;

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    //using axios to fetch data from API
    const fetchNews = async () : Promise<void> => {
        const response = await axios.get(gNewsApiUrl);
        console.log(response);
        setNews(response.data.articles);
        setLoading(false);
    };

    useEffect(() => {
        fetchNews();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {news.map((news: any) => (
                <div key={news.id}>
                    <h3>{news.title}</h3>
                    <p>{news.description}</p>
                    <img src={news.image ? news.image : ''} alt={news.title} />
                    <a href={news.url} target="_blank" rel="noreferrer">
                        Read More
                    </a>
                </div>
            ))}
        </div>
    );
}

export default AllNews;