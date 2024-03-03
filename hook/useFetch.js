import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const Rapid_API_KEY = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData ] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
        'X-RapidAPI-Key': Rapid_API_KEY,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query},
    };
}

