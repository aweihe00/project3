import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
function Family() {
  return (
    <>
      <button className="familyCard">
        <Link to="/petfamilyinfo">
          <div>
            <img
              src=""
              className="card-img-top familyCard"
              alt="first pet"
            />
            <div className="card-body">
              <p className="card-text">Mr. Wiggles</p>
            </div>
          </div>
        </Link>
      </button>
      <button className="familyCard">
        <Link to="/createPet">
          <div>
            <img
              src=""
              className="card-img-top familyCard"
              alt="new pet"
            />
            <div className="card-body">
              <p className="card-text"> + Add New Pet</p>
            </div>
          </div>
        </Link>
      </button>
    </>
  );
}

export default Family;