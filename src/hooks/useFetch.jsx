import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    return data;
  };
  useEffect(() => {
    getData();
  }, []);
  return [data, setData];
};
export default useFetch;
