import { useState } from "react";
import "./search.css";
import { SEARCHDATA } from "./data.js";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "@mui/material";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Card, Form } from "react-bootstrap";
// import { textAlign } from "@mui/system";
// import { flex } from "tailwindcss-classnames";

function Search() {
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
  return (
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
          {SEARCHDATA.filter((data) => {
            console.log("new request");
            if (search === "") return data;
            else if (data.subject.toLowerCase().includes(search.toLowerCase()))
              return data;
            else if (data.nameTeach.includes(search)) return data;
            else if (data.email.toLowerCase().includes(search.toLowerCase()))
              return data;
          }).map((data, index) => {
            return (
              <div key={index} className="listItem ">
                <Card>
                  {/* <Card.Img variant="left" src={require('assets/img/faces/avata.jpg')} /> */}
                  <Card.Header>
                    <h1 className="btnprice">
                      <Button variant="contained" color="inherit">
                        {data.price}
                      </Button>
                    </h1>
                    <b> {data.subject}</b>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      Learn with - <b>{data.nameTeach}</b>{" "}
                    </p>
                    {data.email}
                  </Card.Body>
                  {/* <div className="imge">{data.image}</div> */}
                  {/* <div className="txtsubject">{data.subject}
                                            <Button className="btnAdd" variant="contained" color="inherit">
                                                {data.price}
                                            </Button>
                                        </div> */}
                  {/* <div className="text-lg" md="2">
                                            <div>Learn about - {data.nameTeach}</div></div>
                                        <div className="text-sm">{data.email}</div> */}
                </Card>
              </div>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Search;
