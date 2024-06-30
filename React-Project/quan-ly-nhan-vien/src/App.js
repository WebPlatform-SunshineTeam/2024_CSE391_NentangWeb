import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar2 from "./components/Navbar2";
import Element from "./components/Element";
import List from "./components/List";
import { data } from "./data1.js";
import Side from "./components/Side.jsx";
import Add from "./components/Add.jsx";

function App() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [line, setLine] = useState(false)
  const [choose, setChoose] = useState(-1)

  const removeItem = (idx) => {
    console.log(idx)
    setList(list.filter((item, id) => { return item.id !== idx }));
    setLine(true)
  };

  const handleChoose = (idx) => {
    console.log(idx)
    setChoose(idx)
    setShow(true)
  }

  useEffect(() => {
    setList(data);
  }, []);

  return <div className="flex">
      <Side />
      <div>
        <Navbar2/>
        {line && <p className="bg-gray-400 p-3 ">Delete successful! The cell has been remove from the system</p>}
        <Element id="Cell ID" name="Cell Name" phone={"Number of Inmates"} act={0}/>
        <List list={list} removeItem={removeItem} setShow={setShow} handleChoose={handleChoose}/>
        {   
            show && (
                <>
                    <div className='fixed inset-0 bg-black opacity-50 z-10'></div>
                    <div className='fixed inset-0 flex items-center justify-center z-20'>
                        <Add setShow={setShow} removeItem={removeItem} choose={choose}/>
                    </div>
                </>
          )
        }
      </div>
    </div>;
}

export default App;
