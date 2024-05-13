import {Table} from 'react-bootstrap'
import './Table.css'
import { BsFillTrashFill,BsFillPencilFill } from 'react-icons/bs';
import { useState } from 'react';
import { InputGroup} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
function TableHome({rows,handleDelete, rowUpdate}){
  const [search,setSearch]=useState('');
  return(
  <div className="container">
    <div className='search-from'>
    <Form>
      <InputGroup>
      <Form.Control onChange={(e)=>setSearch(e.target.value)} placeholder='Search User by name'/>
      </InputGroup>
    </Form>
    </div>
    <Table striped bordered hover className='table'>
      <thead>
        <tr>
          <th ></th>
          <th>ID</th>
          <th className='expand-1' >Name</th>
          <th className='expand-2'>Email</th>
          <th className='expand-3'>Mobile</th>
          <th className='expand-4'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          rows.length>0
          ? rows.filter((item)=>{
            return search.toLowerCase===''?item:item.name.toLowerCase().includes(search)
          }).map((user,i)=>{
            return (
            <tr key={i}>
              <td><input type="checkbox"/></td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td><BsFillPencilFill onClick={()=>rowUpdate(i)}className='edit-btn'/> 
              <BsFillTrashFill onClick={()=>handleDelete(i)} className='trash-btn'/></td>
            </tr>
           ) })
           :"No user data added"
          }
        
      </tbody>
    </Table>
        </div>
    )
}

export default TableHome;