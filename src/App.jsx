import { useState } from "react";
import { getData } from "./data";

import "./App.css";

function App() {
  const animals = getData();
  const [filterProp, setFilterProp] = useState("");
  const speciesTypes = [];
  let filtered = animals;
  if (filterProp) {
    filtered = animals.filter((ani) => ani.species === filterProp);
  }
  return (
    <div>
      {/* <button onClick={() => setFilterProp("")}>Show all</button>
      <button onClick={() => setFilterProp("cat")}>Only Cats</button>
      <button onClick={() => setFilterProp("dog")}>Only Dogs</button>
      <button onClick={() => setFilterProp("horse")}>Only Horses</button>
      <button onClick={() => setFilterProp("dragon")}>Only Dragons</button> */}
      {animals.map(
        (spec) => {
          if (!speciesTypes.includes(spec.species)) {
            console.log("new item added");
            // spec.species = [...speciesTypes];
            // !speciesTypes.some((item) => item.includes(spec.species))
            speciesTypes.push(spec.species);
          }
          console.log(speciesTypes);
        }
        // <button onClick={() => setFilterProp(`${spec.species}`)}>Only {spec.species}s</button>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Trait</th>
            <th>Species</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ani) => (
            <tr>
              <td>{ani.name}</td>
              <td>{ani.trait}</td>
              <td>{ani.species}</td>
              <td>{ani.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
