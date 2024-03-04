import { useState, useEffect } from "react";
import axios from "axios";

// import { RAPID_API_KEY } from "@env";

// const Rapid_API_KEY = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData ] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
        'X-RapidAPI-Key': '3efeada1b8msha61a429fd689111p158092jsn0cf6ca0a7d91',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setError(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There was an error fetching data')
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, error, isLoading, refetch };
}

export default useFetch;

