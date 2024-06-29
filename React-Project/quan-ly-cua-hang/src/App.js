import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Navbar1 from "./components/Navbar1";
import Table from './components/Table';
import {data} from './data.js'
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  const [list, setList] = React.useState([]);
  const [show, setShow] = React.useState('hidden'); 
  const [select, setSelect] = React.useState(null);

  React.useEffect(() => {
    setList(data)
  }, [])

  const handleAdd = (name, address, lastUpdate) => {
    setList([...list, {id: Date.now().toString(), name, address, lastUpdate}])
  }

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const handleEdit = (itemUpdate) => {
    setList(list.map((item) => item.id === itemUpdate.id ? itemUpdate : item))
  }

  const handleSelect = (item) => {
    setSelect(item)
    setShow('block')
  }

  const handleUnSelect = () => {
    setSelect(null)
  }

  return <div className="">
      <div className="flex-grow">
        <Navbar />
        <Navbar1 setShow={setShow} />
        <Table list={list} handleDelete={handleDelete} setSelect={handleSelect} />
        <Form handleAdd={handleAdd} handleEdit={handleEdit} show={show} setShow={setShow} select={select} handleUnSelect={handleUnSelect} />
        <Footer />
      </div>
    </div>;
}

export default App;
