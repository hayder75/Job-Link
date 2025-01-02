import { useState , useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) =>{
    const [data,setData] = useState([]);
    const [isLoading , setIsLoading] = useState([]);
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query},
        headers: {
          'x-rapidapi-key': '1434dd1a9fmshb0739f630576e71p1a2d74jsn5084777f27cd',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () => {
        setIsLoading(true);
        const response = await axios.request(options);

        setData(response.data.data)
        setIsLoading(false);
        try{

        } catch(error) {
            setError(error)
            alert('There is an error')
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() =>{
        fetchData();
    },[]);

    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }

        return {data , isLoading , error , refetch}
};


export default useFetch