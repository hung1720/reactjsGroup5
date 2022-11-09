import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import { db } from "firebase.js";
import { collection, getDocs } from "firebase/firestore";

const SearchMentor = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <>
      {" "}
      {users.map((user) => {
        return (
          <div>
            {""}
            <h1>Name: {user.nameMentee}</h1>
            <h1>Age: {user.subject}</h1>
          </div>
        );
      })}
    </>
  );
};

export default SearchMentor;
