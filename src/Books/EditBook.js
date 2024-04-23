import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditBook() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    yearPub: 0,
    price: 0.0
  });

  const { title, author, genre, yearPub, price } = book;

  const onInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBook();
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/book/${id}`, book);
    navigate("/");
  };

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:8080/book/${id}`);
    setBook(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Default Title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter author"
                name="author"
                value={author}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="genre" className="form-label">
                Genre
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Default genre"
                name="genre"
                value={genre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="yearPub" className="form-label">
                Year of publication
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="2000"
                name="yearPub"
                value={yearPub}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="0.00"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-success my-2">
              Submit
            </button>
            <Link className="btn btn-outline-warning mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
