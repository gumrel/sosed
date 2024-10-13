import React, { useEffect, useState } from "react";
import HttpService from "../Services/htttpService";

const HttpT = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await HttpService.get<any>(
          `https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.REACT_APP_GEO}&geocode=Москва,+Арбат+улица,+дом+1&format=json`
        );
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Geo Items</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HttpT;
