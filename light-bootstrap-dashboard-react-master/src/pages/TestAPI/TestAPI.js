import axios from "axios";
import React, { useEffect, useState } from "react";

const TestAPI = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6331a1443ea4956cfb635d5f.mockapi.io/api/test/tableSlot")
      .then((res) => {
        setPosts(
          res.data.map((dataItem) => ({
            ...dataItem,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <>{console.log(posts)}</>
    </>
  );
};

export default TestAPI;
