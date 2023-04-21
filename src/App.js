import { useState, useEffect } from "react";
import {getStarships} from "./services/Swapi"
import "./App.css"

export default function App() {
  const [starship, setStarship] = useState([])

  const testFunc = async () => {
    const data = await getStarships()
    const rows = data.map((row) => (
        <div className="card" key = {row.name}>{row.name}</div>
    ));
    setStarship(rows)
    //return rows

  }


  useEffect(() => {
    testFunc()
  }, []);

  return (
  <div className="App">
    <div className="container">{starship ? <h1>{starship}</h1> : <h1>No content</h1> }</div>
  </div>
  )
}
