import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-xl navbar-dark bg-primary">
    <a className="navbar-brand" href="#">Book Store</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <Link className="btn btn-outline-dark " to= "/addbook">Add a book</Link>
  </nav></div>
  )
}
