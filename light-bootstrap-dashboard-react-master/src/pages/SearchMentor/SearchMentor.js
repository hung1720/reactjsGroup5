import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import { db } from "firebase.js";
import { collection, getDocs } from "firebase/firestore";
import "./search.css";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "@mui/material";
import { Card, Form } from "react-bootstrap";

const SearchMentor = () => {
  const [search, setSearch] = useState("");
  const [searchTimer, setSearchTimer] = useState();
  const [loading, setLoading] = useState(false);

  const updateSearch = (e) => {
    setLoading(true);
    clearTimeout(searchTimer);
    setSearchTimer(
      setTimeout(() => {
        setSearch(e.target.value);
        setLoading(false);
      }, 900)
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="boxinput  max-w-5xl mx-auto flex flex-col justify-center items-center p-10 ">
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Type your search..."
            className="border border-gray-500 w-full h-full rounded-md opacity-80 p-3"
            onChange={updateSearch}
          />

          <div className="flex justify-center gap-4 mt-7 w-full text-black">
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

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
      {/* {users.map((user) => {
        return (
          <div>
            {""}
            <h1>Name: {user.nameMentee}</h1>
            <h1>Subject: {user.subject}</h1>
          </div>
        );
      })} */}
      <div className="min-h-screen  ">
        <div className="search">
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search..."
            className="border border-gray-500 w-full h-full rounded-md opacity-80 p-3"
            onChange={updateSearch}
          />
          <Grid>
            {users
              .filter((data) => {
                console.log("new request");
                if (search === "") return data;
                else if (
                  data.subject.toLowerCase().includes(search.toLowerCase())
                )
                  return data;
              })
              .map((users, index) => {
                return (
                  <div key={index} className="listItem ">
                    <Card>
                      {/* <Card.Img variant="left" src={require('assets/img/faces/avata.jpg')} /> */}
                      <Card.Header>
                        <h1 className="btnprice">
                          <Button variant="contained" color="inherit">
                            {users.price}
                          </Button>
                        </h1>
                        <b> {users.subject}</b>
                      </Card.Header>
                      <Card.Body>
                        <p>
                          Learn with - <b>{users.nameMentee}</b>{" "}
                        </p>
                        {users.email}
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default SearchMentor;
