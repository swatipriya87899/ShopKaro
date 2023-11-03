import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error,setError] =useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        fetchData();
    },[url])

    const fetchData = async() =>{
        setIsLoading(true);
        try{
            const response= await axios.get(url);
            setData(response.data);
        }
        catch(error){
            setError(error);
        }
        setIsLoading(false)
    }
  return {data,error,isLoading};
}

export default useFetch
