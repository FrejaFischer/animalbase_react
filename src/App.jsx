import { useState } from "react";
import { getData } from "./data";

import "./App.css";
import AnimalObj from "./components/AnimalObj";

function App() {
  const animals = getData();
  const [filterProp, setFilterProp] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const speciesTypes = [];

  animals.map((spec) => {
    if (!speciesTypes.includes(spec.species)) {
      speciesTypes.push(spec.species);
    }
  });
  let filtered = animals;
  if (filterProp) {
    filtered = animals.filter((ani) => ani.species === filterProp);
  }

  function sortAnimals(a, b) {
    if (a[sortColumn] > b[sortColumn]) {
      return 1;
    } else {
      return -1;
    }
  }
  filtered.sort(sortAnimals);
  if (sortDirection === "desc") {
    filtered.reverse();
  }
  return (
    <div>
      <button onClick={() => setFilterProp("")}>Show all</button>

      {speciesTypes.map((specType) => (
        <button key={specType} onClick={() => setFilterProp(`${specType}`)}>
          Only {specType}s
        </button>
      ))}
      <table>
        <thead>
          <tr>
            <th>Favorite</th>
            <th>
              {" "}
              <button
                onClick={() => {
                  setSortColumn("name");
                  setSortDirection((prevSortDirection) => (prevSortDirection === "asc" ? "desc" : "asc"));
                }}
              >
                Name
              </button>
            </th>
            <th>
              {" "}
              <button
                onClick={() => {
                  setSortColumn("trait");
                  setSortDirection((prevSortDirection) => (prevSortDirection === "asc" ? "desc" : "asc"));
                }}
              >
                Trait
              </button>
            </th>
            <th>
              {" "}
              <button
                onClick={() => {
                  setSortColumn("species");
                  setSortDirection((prevSortDirection) => (prevSortDirection === "asc" ? "desc" : "asc"));
                }}
              >
                Species
              </button>
            </th>
            <th>
              {" "}
              <button
                onClick={() => {
                  setSortColumn("age");
                  setSortDirection((prevSortDirection) => (prevSortDirection === "asc" ? "desc" : "asc"));
                }}
              >
                Age
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ani) => (
            <AnimalObj name={ani.name} trait={ani.trait} species={ani.species} age={ani.age} key={ani.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
