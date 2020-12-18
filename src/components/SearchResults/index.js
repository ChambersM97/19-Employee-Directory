import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div>
    <button >Filter By Gender</button>
    <button >Sort by Name</button>
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="User" src={result.picture.medium} className="img-fluid" />
          <br></br>
          <h1> {result.name.title} {result.name.first} {result.name.last}</h1>
          <h2> {result.gender}</h2>
          <h3> {result.email}</h3>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default SearchResults;
