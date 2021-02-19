import React, {useState} from "react";
import { AiOutlineClose, AiOutlineHome, AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";

function Header(props) {

  const handleChange = (e) =>{
    console.log(e.target.value);
  }

  return (
    <div>
      <div className="header navbar navbar-expand-lg navbar-dark bg-dark fixed-top-sm justify-content-center flex-nowrap">
        <h4 className="text-center text-light">Trending Repos</h4>
      </div>

      <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-2 mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <button className="btn btn-outline-light my-2 my-sm-0" onClick={()=>console.log("left")}>
                  <AiOutlineLeft />
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="btn btn-outline-light my-2 my-sm-0" onClick={()=>console.log("right")}>
                  <AiOutlineRight />
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="btn btn-outline-light my-2 my-sm-0" onClick={()=>console.log("Close")}>
                  <AiOutlineClose />
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <button className="btn btn-outline-light my-2 my-sm-0" onClick={()=>console.log("Home")}>
                  <AiOutlineHome />
                </button>
              </a>
            </li>
          </ul>
          <form className="form-inline d-flex justify-content-center my-0 my-lg-0 float-right w-100">
            <input
              className="form-control mr-sm-2" style={{width : "90%"}} type="search" placeholder="Search"
              onChange={handleChange}
              aria-label="Search"
            />
          <button className="btn btn-outline-light my-2 my-sm-0" style={{width : "auto"}} onClick={()=>console.log("searching...")}>
              <AiOutlineSearch />
            </button>
          </form>

        </div>
      </nav>
    </div>
    );
}
export default Header;
