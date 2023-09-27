import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1280")
    .then((response) => response.json())
    .then((json) => {
      setDatas(json.results);
      setIsLoading(false);
    });
  })

  return (
    <div>
      <h1>Pokemons !</h1>
      {isLoading
      ? <p>Loading...</p> 
      : <select>
        {datas.map((data) => (
          <option> {data.name} </option>
        ))}
      </select> }
    </div>
  );
}

export default App;
