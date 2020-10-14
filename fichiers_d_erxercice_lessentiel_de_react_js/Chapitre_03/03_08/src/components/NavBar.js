import React from 'react'
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa'

const NavBar = () => (
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        <div className="btn-group">
            <a href="#" className="btn btn-outline-dark bg-light"><FaListAlt /></a>
            <a href="#" className="btn btn-outline-dark bg-light">< FaCheckSquare /></a>
            <a href="#" className="btn btn-outline-dark bg-light"><FaPlusSquare /></a>
        </div>
        <button className="btn btn-outline-dark bg-light"><FaTrash /></button>
    </footer>
)

export default NavBar