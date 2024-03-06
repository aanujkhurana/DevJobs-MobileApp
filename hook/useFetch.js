import { useState, useEffect } from "react";
import axios from "axios";

// import Config from "react-native-config";


const useFetch = (endpoint, query) => {
    const [data, setData ] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setError(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            console.log(response.data.data);
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

