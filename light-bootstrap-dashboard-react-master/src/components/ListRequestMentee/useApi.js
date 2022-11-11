import { useState, useEffect } from "react";
import axios from "axios";

export function useAPi(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(url);
    setData(response.data);
  };

  const removeData = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      const del = data.filter((item) => id !== item.TaskID);
      setData(del);
    });
  };

  return { data, removeData };
}
