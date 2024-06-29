import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Element from "./components/Element";
import List from "./components/List";
import Footer from "./components/Footer";
import { data } from "./data1.js";
import Side from "./components/Side.jsx";
import Add from "./components/Add.jsx";

function App() {
  const [list, setList] = useState([]);
  const [itemSelect, setItemSelect] = useState(-1);
  const [show, setShow] = useState(false);
  const [line, setLine] = useState(false)
  const [select, setSelect] = useState(-1)

  useEffect(
    () => {
      if (show === false && Object.keys(itemSelect).length !== 0) {
        setItemSelect({});
      }
    },
    [show, itemSelect]
  );

  const editItem = (id, name, email, address, phone) => {
    const newItem = {
      id: id,
      name: name,
      email: email,
      address: address,
      phone: phone,
      act: 1
    };
    setItemSelect(newItem);
    setShow(true);
  };

  const removeItem = (idx) => {
    setList(list.filter((item, id) => id !== idx));
    setLine(true)
  };

  useEffect(() => {
    setList(data);
  }, []);

  const handleDelete = (select) => {
    if (select !== -1) {
      removeItem(select)
      setLine(true)
      return setShow(false)
    }
  }

  return <div className="flex">
      <Side />
      <div>
        <Navbar2 setList={setList} show={show} setShow={setShow} itemSelect={itemSelect} removeItem={removeItem} />
        {line && <p className="bg-gray-400 p-3 ">Delete successful! The cell has been remove from the system</p>}
        <Element id="Cell ID" name="Cell Name" phone={"Number of Inmates"} act={0}/>
        <List list={list} setList={setList} editItem={editItem} removeItem={removeItem} show={show} setShow={setShow}/>
        {
          show && (
              <>
                  <div className='fixed inset-0 bg-black opacity-50 z-10'></div> {/* inset-0: top left down right = 0, lap day phan tu cha */}
                  <div className='fixed inset-0 flex items-center justify-center z-20'>
                      <Add setShow={setShow} setList={setList} itemSelect={itemSelect} removeItem={removeItem} handleDelete={handleDelete}/>
                  </div>
              </>
          )
          }
      </div>
    </div>;
}

export default App;
