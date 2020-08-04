import { useEffect, useState } from 'react';

const useFetch = (path: string) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!path) return;

    const fetchData = async () => {
      setStatus('fetching');
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/${path}`
      );
      const data = await response.json();
      setData(data.hits);
      setStatus('fetched');
    };

    fetchData();
  }, [path]);

  return { data };
};
