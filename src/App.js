import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./assets/styles/main.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home/";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  let [searchVal, setSearchVal] = useState("");
  let [pageCount, setPageCount] = useState(1);
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");

  const [datas, setDatas] = useState({
    isLoading: false,
    data: [],
    isError: "",
  });

  const api = `https://rickandmortyapi.com/api/character?name=${searchVal}&page=${pageCount}&status=${status}&gender=${gender}`;

  const clearAllFunc = () => {
    setSearchVal("");
    setPageCount(1);
    setStatus("");
    setGender("");
  };
  console.log(api);
  // console.log(gender);
  const getDatas = () => {
    setDatas({
      isLoading: true,
      data: [],
      isError: "",
    });

    axios
      .get(api)
      .then((data) => {
        if (data.status === 200)
          setDatas({
            isLoading: false,
            data: data.data,
            isError: "",
          });
      })
      .catch((err) => {
        if (err) {
          setDatas({
            isLoading: false,
            data: [],
            isError: err.message,
          });
        }
      });
  };

  useEffect(() => {
    getDatas();
  }, [api]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              datas={datas}
              pageCount={pageCount}
              setPageCount={setPageCount}
              searchVal={searchVal}
              setSearchVal={setSearchVal}
              setStatus={setStatus}
              setGender={setGender}
              clearAllFunc={clearAllFunc}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
