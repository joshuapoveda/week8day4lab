const getStarships = async () => {
  const response = await fetch("https://swapi.dev/api/starships/");
  ///.json() is a function that converts promise into workable object
  const data = await response.json();
  let ships = data.results
  return ships
};

export { getStarships };
