import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Element from './components/Element';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  const [list, setList] = useState([])
  const [editIndex, setEditIndex] = useState(-1)

useEffect(() => {
  fetch("/data.json")
    .then(response => response.json()) // Read the response as json
    .then(data => { setList(data); }) // Set the list of items in state
    .catch(error => console.error("Error fetching data: ", error));
}, []);
  
  return <div className="">
      <Navbar />
      <Navbar2 list={list} setList={setList} />
      <Element name="Họ và tên" mail="Thư điện tử" address={"Địa chỉ"} phone={"Số điện thoại"} act={0} />
      <List list={list} setList={setList} />
      <div className="mt-24 ml-2 mr-2 justify-between">
        <Footer list={list} />
      </div>
    </div>;
}

export default App;
