import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Element from "./components/Element";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/data.json")
    .then(res => {return res.json()})
    .then(data => { setList(data) })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="">
      <Header />
      <Navbar list={list} setList={setList} />
      <Element
        name={"Họ và tên"}
        email="Thư điện tử"
        address="Địa chỉ"
        phone="Số điện thoại"
        act={0}
      />
      <List list={list} setList={setList} />
    </div>
  );
}

export default App;
