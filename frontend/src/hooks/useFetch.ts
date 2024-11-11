// frontend/src/hooks/useFetch.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then(response => {
      setData(response.data);
      setLoading(false);
    });
  }, [url]);

  return { data, loading };
};

export default useFetch;
