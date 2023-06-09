import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  // console.log(url);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const instance = axios.create(config);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await instance.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setIsPending(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setIsPending(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      return res.data;
    } catch (err) {
      setError(err.message);
    }
    setIsPending(false);
  };
  return { data, isPending, error, reFetch };
};

export default useFetch;
