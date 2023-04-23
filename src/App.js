import { useState, useEffect } from "react";
import {getStarships} from "./services/Swapi"
import "./App.css"

export default function App() {
  const [starship, setStarship] = useState([])

  const testFunc = async () => {
    const data = await getStarships()
    const rows = data.map((row) => (
        <p className="card" key = {row.name}>{row.name}</p>
    ));
    setStarship(rows)
    //return rows

  }


  useEffect(() => {
    testFunc()
  }, []);

  return (
  <>
  <h2 className="banner">Star Wars Starships</h2>
    {starship ? <div className="container">{starship}</div> : <h1>No content</h1> }
  </>
  )
}
