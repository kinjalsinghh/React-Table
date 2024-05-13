import { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import "./App.css";
import TableHome from "./Components/Table/Table";
import Form from "./Components/Form/Form";
import LoaderButton from "./Components/LoaderButton/LoaderButton";

const getDataFromLocalStorage=()=>{
  const data=localStorage.getItem('rows');
  if(data){
    return JSON.parse(data)
  }else{
    return []
  }
}
function App() {
  
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(getDataFromLocalStorage())
  const [rowToEdit, setRowToEdit] = useState(null);
  
   useEffect(()=>{
      localStorage.setItem('rows',JSON.stringify(rows))
   },[rows])

  const handleDelete = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const rowUpdate = (idx) => {
    setRowToEdit(idx);
    setOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <Button variant="info" onClick={()=>setOpen(true)}>Create </Button>
      <TableHome rows={rows} handleDelete={handleDelete} rowUpdate={rowUpdate}/>
      {open && <Form closeForm={()=>{setOpen(false)}} addData={handleSubmit} value={rowToEdit!==null && rows[rowToEdit]}/>}
      <div className="loader-btns">
      <LoaderButton text="Button 1" loadingTime={10000} />
      <LoaderButton text="Button 2" loadingTime={5000} intervalTime={10000} />
      </div>
    </div>
  );
}

export default App;