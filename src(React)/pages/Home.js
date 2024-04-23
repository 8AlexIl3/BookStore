import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function Home() {

  const [books,setBooks]=useState([])
const {id}=useParams();
  useEffect(()=>{
    loadBooks();
  },[]);

  const loadBooks=async()=>{
    const result=await axios.get("http://localhost:8080/books");
    setBooks(result.data);
  }
  const deleteBook=async(id)=>{
    await axios.delete(`http://localhost:8080/book/${id}`)
    loadBooks();
  }
  
  return (
    <div className='container'>
      <div className='py-4'>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Author</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      books.map((book,index)=>(
        
        <tr>
        <th scope="row"key={index}>{index+1}</th>
        <td>{book.title}</td>
        <td>{book.genre}</td>
        <td>{book.author}</td>
       
        <td>
          
          <Link className="btn btn-outline-primary mx-2" to={`/editbook/${book.id}`}>Details</Link>
          <button className="btn btn-danger mx-2" onClick={()=>deleteBook(book.id)}>Delete</button>
        </td>
        </tr>
      ))
    }
  </tbody>
</table>
      </div>
    </div>

  )
}
